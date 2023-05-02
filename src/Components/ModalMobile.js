import React from 'react';
import Style from '../Styles/ModalMobile.css'
import Styles from '../Styles/Header.css'
import logo from '../Assets/NFT.png'
import cross from '../Assets/cross.png'


const ModalMobile = ({ activeMob, setActiveMob, onChange }) => {
    
    function openCards() {
        onChange(false);
      }

    return (
        <div className={activeMob ? "modalMob activeMob" : "modalMob" } onClick={()=>setActiveMob(false)}>
            <div className={activeMob ? "modalMobContent activeMob" : "modalMobContent" }   onClick={e => e.stopPropagation()}>
                <header>
                    <div className='flexRow marginLogo logoModal'>
                        <div className='elipseLogo'></div>
                        <img className='logoImg' src={logo} />
                        <img className={activeMob ? "modalMob activeMob crossImgModal  " : "modalMob crossImgModal  "}   onClick={() => setActiveMob(false)} src={cross} />
                        <div className='flexRow container'>
                            <div className='flexColumnModal'>
                                <nav className='textModal marginModalText'>Главная</nav>
                                <nav
                                    onClick={openCards}
                                    className='textModal marginModalTextLearn'>Что даст обучение</nav>
                                <button className=' ModalButt'>Личный кабинет</button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default ModalMobile;