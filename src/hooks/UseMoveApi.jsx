import { useEffect, useState } from "react";
import axios from 'axios';

export function useMoviesAPI(filme) {
    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!filme) return;


        async function fetchData() {
            setLoading(true);
            setError(null);

            try {

                const response = await axios.get(`https://www.omdbapi.com/?apikey=e476dca&s=${encodeURIComponent(filme)}`);

                if (response.status === 200 && response.data.Search) {

                    const filteredResults = response.data.Search.filter(item =>
                        item.Title.toLowerCase().includes(filme.toLowerCase())
                    );
                    setMovieData(filteredResults);
                } else {
                    setMovieData([]);
                    setError('Nenhum filme encontrado');
                }

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }

        }

        fetchData();
    }, [filme]);

    return { movieData, loading, error };

}