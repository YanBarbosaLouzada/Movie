import React, { useState } from 'react';
import { useMoviesAPI } from '../../hooks/UseMoveApi';
import { useMovieDetails } from '../../hooks/useMovieDetails';
import './CardMovie.css';
import { useOutletContext } from 'react-router';

import { addFavorite, removeFavorite } from '../../redux/slices/favoriteSlice';
import { useDispatch, useSelector } from 'react-redux';
import Popup from '../popup/Popup';
function CardMovie({ movies }) {
    const { busca } = useOutletContext();
    const [filmeSelecionado, setFilmeSelecionado] = useState(null);
    const [mostrar, setMostrar] = useState(false);
    const [tipo, setTipo] = useState("");
    const { movieData, loading } = useMoviesAPI(busca);
    const { details, loading: loadingDetails } = useMovieDetails(filmeSelecionado?.imdbID);

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    const isFavorite = (id) => favorites.some(f => f.imdbID === id);

    const toggleFavorite = (filme) => {
        if (isFavorite(filme.imdbID)) {
            dispatch(removeFavorite(filme.imdbID));
        } else {
            dispatch(addFavorite(filme));
        }
    };


    return (
        <div>
            {(!movies && loading) && <p>Carregando...</p>}

            {(movies || movieData)?.length > 0 ? (
                <div className="cards">
                    {(movies || movieData).map((filme) => (
                        <div key={filme.imdbID} className="card-movie" onClick={() => setFilmeSelecionado(filme)}>
                            <div className="main">
                                {filme.Poster !== "N/A" && (
                                    <img src={filme.Poster} alt={filme.Title} />
                                )}
                                <div
                                    className="favorite"
                                    onClick={(e) => {
                                        e.stopPropagation(); // impede abrir modal
                                        toggleFavorite(filme);
                                        setTipo(isFavorite(filme.imdbID) ? "erro" : "sucesso");
                                        setMostrar(true);
                                        
                                    }}
                                >
                                    <span style={{ color: isFavorite(filme.imdbID) ? 'red' : 'gray' }}>
                                        💜
                                    </span>
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
                            <div className='modal-body'>
                                <img src={details.Poster} alt={details.Title} />
                                <div>
                                    <h2>{details.Title}</h2>
                                    <div className='modal-info'>
                                        <p> {details.Year}</p>
                                        <p> {details.Genre}</p>
                                        <p> {details.Runtime}</p>
                                    </div>
                                    <div>
                                        <p className='modal-plot'>{details.Plot}</p>
                                        <button className='watch-btn'> Watch now</button>
                                    </div>
                                </div>
                                <p>⭐{details.imdbRating}/10</p>
                            </div>
                        ) : (
                            <p>Detalhes não disponíveis</p>
                        )}
                    </div>
                </div>
            )}

            <Popup
                mensagem={tipo === "sucesso" ? "Filme adicionado aos favoritos!" : "Filme removido dos favoritos!"}
                tipo={tipo}
                mostrar={mostrar}
                onClose={() => setMostrar(false)}
            />

        </div>
    );
}

export default CardMovie;