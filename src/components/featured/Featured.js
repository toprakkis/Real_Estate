import React from 'react';

import './Featured.css';

import House1 from '../../assets/house1.jpg';
import Bed1 from '../../assets/bed1.jpg';
import Bed2 from '../../assets/bed2.jpg';
import Kitchen from '../../assets/kitchen.jpg';
import Bathroom from '../../assets/bath1.jpg';

import House2 from '../../assets/house2.jpg';
import Bed3 from '../../assets/bed3.jpg';
import Bed4 from '../../assets/bed4.jpg';
import Bathroom2 from '../../assets/bath2.jpg';
import LivingRoom from '../../assets/living-room.jpg';

const Featured = () => {
    return (
        <div className='featured'>
            <h1 className='featured-text'>Meilleurs Annonces Sélectionnées</h1>
            <p className='featured-text'>Sélection de listings par Ville, État et Code Postal, basée sur les vues.</p>
            <div className='container'>
                {/* Images and details */}
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 rue Acme, Tunisia</h2>
                        <p>Maison à vendre</p>
                        <p className='price'>2 677 000 €</p>
                    </div>
                    <div className='info-grid'>
                        {/* ... More details ... */}
                        <div className='info'>
                            <p className='bold'>Chambres :</p><p>5</p>
                        </div>
                        <div className='info'>
                            <p className='bold'>Salles de bain :</p><p>7</p>
                        </div>
                        {/* ... More details ... */}
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>Une belle maison moderne en ville avec une piscine de taille normale. Maison spacieuse et luxueuse située au Texas. Comprenant salle de médias, salle d'entraînement et sauna intégré.</p>
                    <button className='btn'>Voir l'annonce</button>
                </div>
                {/* ... Repeat for other sections ... */}
            </div>

            {/* Second section */}
            {/* ... Repeat similar structure and translations ... */}
        </div>
    );
}

export default Featured;
