import { useState, useEffect } from "react";

export function useFetch<DataType>(url: string) {
  const [data, setData] = useState<DataType>();
  const [isLoading, setIsLoading] = useState<true | false>();

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    async function startFetching() {
      try {
        const response = await fetch(url, { signal: controller.signal });
        const data = await response.json();

        setData(data);
      } catch (error) {
        // catches the abort signal, can be expanded to handle other errors
        // console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    startFetching();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading };
}
