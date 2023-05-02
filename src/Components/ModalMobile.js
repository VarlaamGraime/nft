import React from 'react';
import Style from '../Styles/ModalMobile.css'
import Styles from '../Styles/Header.css'
import logo from '../Assets/NFT.png'
import cross from '../Assets/cross.png'


const ModalMobile = ({activeMob,setActiveMob}) => {
    return (
        <div className={activeMob ? "modalMob activeMob" : "modalMob" } onClick={()=>setActiveMob(false)}>
            <div className={activeMob ? "modalMobContent activeMob" : "modalMobContent" }   onClick={e => e.stopPropagation()}>
                <div>
                    <div className='flexRow marginLogo logoModal'>
                        <div className='elipseLogo'></div>
                        <img className='logoImg' src={logo} />
                        <img className={activeMob ? "modalMob activeMob crossImgModal  " : "modalMob crossImgModal  "}   onClick={() => setActiveMob(false)} src={cross} />
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalMobile;