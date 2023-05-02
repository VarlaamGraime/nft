import {React,useState} from 'react';
import Styles from '../Styles/Header.css'
import logo from '../Assets/NFT.png'
import ModalMobile from './ModalMobile';

const Header = ( {onChange} ) => {
 
    const [modalActiveMob, setModalActiveMob] = useState(false)

    function openCards() {
        onChange(false);
      }
    
    return (
        <div className='flexRow marginTop'>
            <div className='elipsBg'></div>
            <div className='flexRow marginLogo'>    
                <div className='elipseLogo'></div>
                <img className='logoImg' src={logo } />
            </div>
            <header className='flexRow container'>
                <div>
                    <nav className='titleHeader marginHome'>Главная</nav>
                </div>
                <div>
                    <nav onClick={openCards} className='titleHeader marginLearn'>Что даст обучение</nav>
                </div>
                <div>
                    <button className='buttonArea marginArea'>Личный кабинет</button>
                </div>

                <div>
                    <button onClick={()=> setModalActiveMob(true)} className='buttonMobile'>
                        <div className='buttonMobileHalf'></div>
                        <div className='buttonMobileHalf'></div>
                    </button>
                </div>

            </header>
            <ModalMobile onChange={openCards} activeMob={modalActiveMob} setActiveMob={setModalActiveMob}/>
            
        </div>
    );
};

export default Header;