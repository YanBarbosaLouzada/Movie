import React, { useState } from 'react'
import './NavbarTwo.css'
import user from '../../assets/user.png'
function NavbarTwo({ busca, setBusca }) {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='navbar-two'>
            <div className="navigation">
                <p>Movie</p>
                <p>Serie</p>
                <p>Documentaries</p>
            </div>

            <div className="navigation-icons">
                {showSearch && (
                    <input
                        type="text"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        placeholder="Buscar filme..."
                        className="search-input"
                    />
                )}
                <svg onClick={() => setShowSearch(!showSearch)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>


                <div className='img'>
                    <img src={user} width={30}></img>
                    <p>Osvaldo</p>
                </div>

            </div>

        </div>
    )
}

export default NavbarTwo
