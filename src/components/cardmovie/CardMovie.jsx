import React, { useState } from 'react';
import { useMoviesAPI } from '../../hooks/UseMoveApi';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import './CardMovie.css';
import { useOutletContext } from 'react-router';

function CardMovie() {
    const { busca } = useOutletContext();

    const [filmeSelecionado, setFilmeSelecionado] = useState(null);

    const { movieData, loading } = useMoviesAPI(busca);
    const { details, loading: loadingDetails } = useMovieDetails(filmeSelecionado?.imdbID);

    return (
        <div>
            {loading && <p>Carregando...</p>}

            {movieData && movieData.length > 0 ? (
                <div className="cards">
                    {movieData.map((filme) => (
                        <div key={filme.imdbID} className="card-movie" onClick={() => setFilmeSelecionado(filme)}>
                            <div className="main">
                                {filme.Poster !== "N/A" && (
                                    <img src={filme.Poster} alt={filme.Title} />
                                )}
                                <div className="favorite">
                                    <span>💜</span>
                                </div>
                            </div>

                            <div className="footer">
                                <p className="titulo">{filme.Title}</p>
                                <p className="descricao">{filme.Year}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p>Nenhum filme encontrado</p>
            )}

            {filmeSelecionado && (
                <div className='modal-overlay' onClick={() => setFilmeSelecionado(null)}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        {loadingDetails ? (
                            <p>Carregando detalhes...</p>
                        ) : details ? (
                            <div>
                                <img src={details.Poster} alt={details.Title} />
                                <div className='modal-info'>
                                    <h2>{details.Title} ({details.Year})</h2>
                                    <p><strong>Ano:</strong> {details.Year}</p>
                                    <p><strong>Duração:</strong> {details.Runtime}</p>
                                    <p><strong>Gênero:</strong> {details.Genre}</p>
                                    <p><strong>Nota:</strong> {details.imdbRating}</p>
                                    <button className='watch-btn'>
                                        ▶️ Watch now
                                    </button>
                                </div>
                            <p className='modal-plot'>{details.Plot}</p>
                            </div>

                        ):(
                            <p>Detalhes não disponíveis</p>
                        )}
                        
                        <button className='close-btn' onClick={() => setFilmeSelecionado(null)}>Fechar</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default CardMovie;