import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "Your api key",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      const res = await fetch(url, options);
      const data = await res.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return { data, loading };
};
