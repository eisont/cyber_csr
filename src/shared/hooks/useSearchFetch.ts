import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

type UseSearchFetchProps = {
  searchData: string;
  enabled?: boolean;
};

const useSearchFetch = <TData = unknown>({
  searchData,
  enabled = true,
}: UseSearchFetchProps): [TData | null, boolean] => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const query = `https://dummyjson.com/products/search?q=${searchData}`;

  const debounceTimer = useCallback(() => {
    try {
      setIsLoading(true);
      const fetchData = async () => {
        const { data } = await axios.get(query);

        setData(data);
        setIsLoading(false);
      };

      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [query]);

  useEffect(() => {
    if (!enabled) return;

    const timerId = window.setTimeout(() => {
      debounceTimer();
    }, 1000);
    return () => clearTimeout(timerId);
  }, [debounceTimer, enabled]);

  return [data, isLoading];
};

export default useSearchFetch;
