import React from 'react'
import './Homepage.css'
import CardMovie from '../../components/cardmovie/CardMovie'
import { useMoviesAPI } from '../../hooks/UseMoveApi'
import { useOutletContext } from 'react-router';

function Homepage() {
  const { busca } = useOutletContext();
  const { movieData, loading, error } = useMoviesAPI(busca);

  if (loading) return <p>Carregando...</p>
  if (error) return <p>{error}</p>

  // Filme destaque = primeiro da lista
  const filmeDestaque = movieData?.length ? movieData[0] : null

  return (
    <div className="homepage-content">

      {/* Header com destaque */}
      {filmeDestaque && (
        <div className="homepage-header" key={filmeDestaque.imdbID}>
          <div className="image-content">
            {filmeDestaque.Poster !== 'N/A' && (
              <img src={filmeDestaque.Poster} alt={filmeDestaque.Title} />
            )}
            <div className="header-content">
              <h1>{filmeDestaque.Title}</h1>
              <p>{filmeDestaque.Year}</p>
              <button>Watch now</button>
            </div>
          </div>
        </div>
      )}

      {/* Lista de filmes */}
      <div className="homepage-movies">
        <CardMovie />
      </div>
    </div>
  )
}

export default Homepage
