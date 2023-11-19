import React from 'react';

import Apt1 from '../../assets/apt1.jpeg';
import Apt2 from '../../assets/apt2.jpeg';
import Apt3 from '../../assets/apt3.jpeg';

import './Best.css';

const Best = () => {
    return (
        <div className='best'>
            <h1>Trouvez les propriétés les mieux notées</h1>
            <div>
                <p><span className='bold'>Tous</span></p>
                <p>Commercial</p>
                <p>Résidentiel</p>
                <p>Agricole</p>
            </div>
            <div className='container'>
                <img src={Apt1} alt='Appartement 1' />
                <img src={Apt2} alt='Appartement 2' />
                <img src={Apt3} alt='Appartement 3' />
            </div>
            <button className='btn'>Voir tout</button>
        </div>
    );
}

export default Best;
