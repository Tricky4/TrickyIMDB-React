import { useEffect, useState } from "react"

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    useEffect(() => {
        async function fetchMovies() {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            const json = await response.json();
            setData(json.results);
          } catch (error) {
            console.error("Error fetching movies:", error);
          }
        }
          fetchMovies();
        }, [url]);

  return { data }
}
