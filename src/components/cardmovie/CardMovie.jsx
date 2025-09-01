import React, { useState } from 'react'
import { useMoviesAPI } from '../../hooks/UseMoveApi';
import "./CardMovie.css"

function CardMovie() {
    const [busca, setBusca] = useState('')
    const { movieData, loading, error } = useMoviesAPI(busca);

    return (
        <div>
            <h1>Buscar filme</h1>
            <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Digite o nome do filme"
            />
            {loading && <p>Carregando...</p>}
            {error && <p>Erro: {error}</p>}
            {movieData && movieData.length > 0 ? (
                <div className='cards'>
                    {movieData.map((filme) => (
                        <div key={filme.imdbID} className="card-movie">
                            <div className="main">
                                {filme.Poster !== "N/A" && (
                                    <img src={filme.Poster} alt={filme.Title} />
                                )}
                                <div className="favorite">
                                    <span>💜</span>
                                </div>
                                <div className="overlay"></div>
                            </div>

                            <div className="footer">
                                <p className="titulo">{filme.Title}</p>
                                <p className="descricao">{filme.Year} | {filme.Genre || "Gênero"}</p>
                            </div>
                        </div>

                    ))}
                </div>
            ) : (
                !loading && <p>Nenhum filme encontrado</p>
            )}
        </div>
    )
}
export default CardMovie
