import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

type UseFetchProps = {
  resource: string;
  path?: string;
  endPoint?: Array<string | number>;
  query?: Record<string, string | number>;
  enabled?: boolean;
};

const useFetch = <TData = unknown>({
  resource,
  path = '',
  endPoint = [],
  query = {},
  enabled = true,
}: UseFetchProps): [TData | null, boolean] => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const endPointString = endPoint.length ? '/' + endPoint.map((el) => el).join('/') : '';
  const queryString = Object.entries(query)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const url = `https://dummyjson.com/${resource}/${path}${endPointString}?${queryString}`;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);

      setData(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (!enabled) return;
    fetchData();
  }, [enabled, fetchData]);

  return [data, isLoading];
};

export default useFetch;
