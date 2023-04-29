import React from 'react';
import Styles from '../Styles/Header.css'
import logo from '../Assets/NFT.png'


const Header = () => {
    return (
        <div className='flexRow marginTop'>
            <div className='elipsBg'></div>
            <div className='flexRow marginLogo'>    
                <div className='elipseLogo'></div>
                <img className='logoImg' src={logo } />
            </div>
            <div className='flexRow container'>
                <div>
                    <p className='titleHeader marginHome'>Главная</p>
                </div>
                <div>
                    <p className='titleHeader marginLearn'>Что даст обучение</p>
                </div>
                <div>
                    <button className='buttonArea marginArea'>Личный кабинет</button>
                </div>
            </div>
            
        </div>
    );
};

export default Header;