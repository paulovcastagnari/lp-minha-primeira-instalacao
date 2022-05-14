import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    let path = window.location.pathname;
    console.log(window.location.pathname);

    router.push(`/?src=${path?.replace("/", "")}`);
  }, []);

  return null;
}
