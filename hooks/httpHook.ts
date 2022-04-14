import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export const useHttpClient = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (
      url: string,
      method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE" = "GET",
      body: BodyInit = null,
      headers: HeadersInit = {},
      successMessage: boolean = false
    ) => {
      setIsLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbortCtrl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => {
            return reqCtrl !== httpAbortCtrl;
          }
        );

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        if (successMessage) {
          setSuccess(true);
        }

        setIsLoading(false);

        return responseData;
      } catch (err) {
        console.log(err.message);
        setError(err.message || "Algo deu errado, por favor tente novamente.");
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => {
        abortCtrl.abort();
      });
    };
  }, []);

  const clearError = (push: string = null) => {
    setError(null);
    if (!!push) {
      router.push(push);
    }
  };

  const clearSuccess = (push: string = null) => {
    setSuccess(false);
    if (!!push) {
      router.push(push);
    }
  };

  return { isLoading, error, success, sendRequest, clearError, clearSuccess };
};
