import { useEffect, useState } from "react";
import axios from "axios";
 
const API_KEY = "e476dca";

export function useMovieDetails(imdbID) {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!imdbID) return;

        async function fetchData() {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
                );

                if (response.data && response.data.Response !== "False") {
                    setMovie(response.data);
                } else {
                    setMovie(null);
                    setError("Detalhes não encontrados");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [imdbID]);

    return { movie, loading, error };
}
