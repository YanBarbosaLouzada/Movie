import React from 'react'
import { useSelector } from 'react-redux'
import './Favorito.css'
import CardMovie from '../cardmovie/CardMovie'

function Favorito() {
    const favorites = useSelector((state) => state.favorites)
    return (
        <div>
            <h2>Filmes Favoritos</h2>
            <CardMovie movies={favorites} />
        </div>
    )
}

export default Favorito
