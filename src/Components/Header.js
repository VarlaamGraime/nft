import {React,useState} from 'react';
import Styles from '../Styles/Header.css'
import logo from '../Assets/NFT.png'
import ModalMobile from './ModalMobile';

const Header = ( {onChange} ) => {
 
    const [modalActiveMob, setModalActiveMob] = useState()
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
            <div className='flexRow container'>
                <div>
                    <p className='titleHeader marginHome'>Главная</p>
                </div>
                <div>
                    <p onClick={openCards} className='titleHeader marginLearn'>Что даст обучение</p>
                </div>
                <div>
                    <button className='buttonArea marginArea'>Личный кабинет</button>
                </div>

                <div>
                    <button className='buttonMobile '>
                        <div className='buttonMobileHalf'></div>
                        <div className='buttonMobileHalf'></div>
                    </button>
                    <ModalMobile activeMob={modalActiveMob} setActiveMob={setModalActiveMob}/>
                </div>
            </div>
            
        </div>
    );
};

export default Header;