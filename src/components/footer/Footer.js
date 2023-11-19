import React from 'react';

import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>À propos</h3>
                    <p>Entreprise</p>
                    <p>Détails</p>
                    <p>Planification</p>
                    <p>À propos de nous</p>
                </div>
                <div className='col'>
                    <h3>Entreprise</h3>
                    <p>Entreprise</p>
                    <p>Détails</p>
                    <p>Planification</p>
                    <p>À propos de nous</p>
                </div>
                <div className='col'>
                    <h3>Juridique</h3>
                    <p>Entreprise</p>
                    <p>Détails</p>
                    <p>Planification</p>
                    <p>À propos de nous</p>
                </div>
                <div className='col'>
                    <h3>Informations</h3>
                    <p>Entreprise</p>
                    <p>Détails</p>
                    <p>Planification</p>
                    <p>À propos de nous</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
