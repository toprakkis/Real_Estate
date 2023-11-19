import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';

import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Réel</span>Immobilier</h1>
                <button className='btn'>Se Connecter</button>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Accueil</a></li>
                    <li><a href='#'>Rechercher</a></li>
                    <li><a href='#'>À Propos</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
