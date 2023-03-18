import { useEffect } from 'react';


export function useFetch(
  url: string,
  handleData: (data: any) => void,
) {

  useEffect(() => {
    const fetchData = async function () {
      // Do an ajax request
      const response = await fetch(url);
      const data = await response.json();

      handleData(data);
    };

    try {
      fetchData();
    } catch(error: any) {
      handleData({ error })
    }
  }, [url, handleData]);
}

export default useFetch;