import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(query, type = "tracks", result = "5", limit = "5") {
  const [data, setData] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function fetchData() {
      if (!query) {
        setLoading(false);
        return;
      }
      setLoading(true);
      const options = {
        method: "GET",
        url: "https://spotify23.p.rapidapi.com/search/",
        params: {
          q: query,
          type: type,
          offset: "0",
          limit: limit,
          numberOfTopResults: result,
        },

        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_SPOTIFY_API_KEY,
          "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
        },
      };
      try {
        const response = await axios.request(options);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [query, type, result, limit]);

  return [data, loading, error];
}
export default useFetch;
