import React, { useEffect, useState } from 'react';
import CardMovie from '../../components/cardmovie/CardMovie';
import { useMoviesAPI } from '../../hooks/UseMoveApi';

function EmAlta() {
    const [emAlta, setEmAlta] = useState([]);
    const { loading } = useMoviesAPI('batman'); // busca inicial

    useEffect(() => {
        // simulação de filmes em alta — pode mudar os termos abaixo
        const termosPopulares = ['avengers', 'spider man', 'harry potter', 'batman', 'fast'];

        Promise.all(//Execução paralela de várias promessas
            termosPopulares.map(async (termo) => {
                const response = await fetch(`https://www.omdbapi.com/?apikey=e476dca&s=${termo}`);
                const data = await response.json();
                return data.Search || [];
            })
        ).then((resultados) => {
            const todos = resultados.flat();
            setEmAlta(todos);
        });
    }, []);

    return (
        <div>
            <h2>🔥 Filmes em Alta</h2>
            {loading && <p>Carregando filmes...</p>}
            {!loading && emAlta.length === 0 && <p>Nenhum filme encontrado 😢</p>}
            {!loading && emAlta.length > 0 && <CardMovie movies={emAlta} />}
        </div>
    );
}

export default EmAlta;
