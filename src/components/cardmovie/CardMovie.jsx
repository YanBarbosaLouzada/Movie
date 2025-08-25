import React, { useState } from "react";
import { useMoviesSearch } from "../../hooks/useMoviesSearch";
import { useMovieDetails } from "../../hooks/useMovieDetails";

export default function CardMovie() {
    const [busca, setBusca] = useState("");
    const [filmeSelecionado, setFilmeSelecionado] = useState(null);

    const { movies, loading, error } = useMoviesSearch(busca);
    const { movie: detalhes } = useMovieDetails(filmeSelecionado);

    return (
        <div>
            <h1>Busca de Filmes</h1>
            <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Digite o nome do filme..."
            />

            {loading && <p>Carregando...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {!filmeSelecionado &&
                movies.map((filme) => (
                    <div
                        key={filme.imdbID}
                        style={{ cursor: "pointer" }}
                        onClick={() => setFilmeSelecionado(filme.imdbID)}
                    >
                        <h3>
                            {filme.Title} ({filme.Year})
                        </h3>
                        <img src={filme.Poster} alt={filme.Title} width={100} />
                    </div>
                ))}

            {filmeSelecionado && detalhes && (
                <div>
                    <button onClick={() => setFilmeSelecionado(null)}>Voltar</button>
                    <h2>{detalhes.Title}</h2>
                    <p>🎬 Gênero: {detalhes.Genre}</p>
                    <p>👨‍🎤 Atores: {detalhes.Actors}</p>
                    <p>📝 Sinopse: {detalhes.Plot}</p>
                    <img src={detalhes.Poster} alt={detalhes.Title} width={150} />
                </div>
            )}
        </div>
    );
}
