import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Trouvez l'endroit parfait</h1>
                <p className='search-text'> Cherchez la plus grande sélection d'appartements de luxe, de maisons multifamiliales et de maisons de luxe. </p>
                <form className='search'>
                    <div>
                        <input type='text' placeholder='Entrez un mot-clé..' />
                    </div>
                    <div className='radio'> 
                        <input type='radio' checked />
                        <label>Acheter</label>
                        <input type='radio' />
                        <label>Louer</label>
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hero;
