import { useEffect } from "react";
import { useRouter } from "next/router";

export const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/portal");
  }, []);

  return null;
};
