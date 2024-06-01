// src/hooks/useFetch.ts
import { useState, useEffect } from "react";

const useFetch = <T,>(
  url: string,
  storageKey: string,
  expiryKey: string,
): { data: T | null; error: string | null; loading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const currentTime = new Date().getTime();
      const savedData = localStorage.getItem(storageKey);
      const savedExpiry = localStorage.getItem(expiryKey);

      if (
        savedData &&
        savedExpiry &&
        currentTime - parseInt(savedExpiry) < 86400000
      ) {
        setData(JSON.parse(savedData));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        localStorage.setItem(storageKey, JSON.stringify(result));
        localStorage.setItem(expiryKey, currentTime.toString());
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, storageKey, expiryKey]);

  return { data, error, loading };
};

export default useFetch;
