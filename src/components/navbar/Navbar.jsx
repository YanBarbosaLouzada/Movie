import React from 'react'
import "./Navbar.css";
import { FaHome, FaHeart, FaChartLine, FaCalendarAlt, FaUsers, FaComments, FaCog, FaUser } from "react-icons/fa";
import { Link } from 'react-router';
import Whaticon from '../../assets/19e39a9ea246ceafb9f0673aa2addfe2c313e11c.png';
function Navbar() {
    return (
        <aside className='sidebar'>

            <div >
                <div className='logo'>

                    <h2>
                        <img src={Whaticon} alt="Logo" width={35} height={31} />
                        WATCH
                    </h2>
                </div>

                <nav className='menu'>
                    <div className='menu-icons-top'>
                        <Link to="/"><FaHome size={20} /> Home</Link>
                        <Link to="/favoritos"><FaHeart size={20} /> Favorites</Link>
                        <Link to="/emAlta"><FaChartLine size={20} /> Trending</Link>
                        <Link to="/"><FaCalendarAlt size={20} /> Coming soon</Link>
                    </div>

                    <div className='menu-icons-bottom'>
                        <Link to="/"><FaUsers size={20} /> Community</Link>
                        <Link to="/"><FaComments size={20} /> Social</Link>
                    </div>

                </nav>
            </div>

            <div className='menu-bottom'>
                <Link to="/"><FaCog size={20} /> Settings</Link>
                <Link to="/"><FaUser size={20} /> Logout</Link>
            </div>
        </aside>
    )
}

export default Navbar
