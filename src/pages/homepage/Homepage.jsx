import React from 'react'
import './Homepage.css'
import CardMovie from '../../components/cardmovie/CardMovie'
function Homepage() {
  return (
    <div className='main'>
      {/* <div className='imagens'>
        <img src={img} alt='imagens' />
        <div>

        </div>
      </div>

      <div className='text'>
        <h3>Welcome to Watch</h3>
        <p>Discover the latest movies and TV shows, explore trending content, and stay updated with what's coming soon.</p>
        <button className='explore-button'>Explore Now</button>
      </div> */}

      <CardMovie />
    </div>
  )
}

export default Homepage
