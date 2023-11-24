import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    let fetchData = async () => {
      try {
        let res = await axios.get(url);
        let responseData = res?.data?.data || [];
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error('Error during data fetching:', error.message);
        setError(error);
        setLoading(false);
      }
    };

    // fetchData();
    const fetchDataWithDelay = setTimeout(fetchData, 500);

    // Cleanup function để clear timeout nếu component unmounts
    return () => clearTimeout(fetchDataWithDelay);
  }, [url, id]); // Include 'url' and 'id' in the dependency array

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
