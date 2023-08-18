import { useState, useEffect } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setData(undefined);

    async function startFetching() {
      const response = await fetch(url, { signal: controller.signal });
      const data = await response.json();

      setData(data);
    }

    try {
      startFetching();
    } catch (error) {
      console.error(error);
    }

    return () => {
      controller.abort();
    };
  }, [url]);

  return data;
}
