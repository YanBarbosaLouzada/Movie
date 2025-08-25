import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "e476dca";

export function useMoviesSearch(filme) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!filme) return;

        async function fetchData() {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
                        filme
                    )}`
                );

                if (response.data && response.data.Search) {
                    setMovies(response.data.Search); // lista resumida
                } else {
                    setMovies([]);
                    setError("Nenhum filme encontrado");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [filme]);

    return { movies, loading, error };
}
