import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const api = "https://free-to-play-games-database.p.rapidapi.com/api";
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "ac8350c700mshde1f49ad1e8e56dp141154jsnb539112b111f",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };
      const res = await fetch(`${api}${url}`, options);
      const data = await res.json();
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, [url]);
  return { data, loading };
};
