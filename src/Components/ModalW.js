import React from 'react';
import Style from '../Styles/Modal.css'
import cross from '../Assets/cross.png'


const ModalW = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className='modalContent' onClick={e => e.stopPropagation()}>
                <div className='modalFlexColumn'>
                    <div className='flexRowModal'>
                        <p className='titleModal'>Начни прямо сейчас!</p>
                        <img className={active ? "modal active crossImg" : "modal crossImg"}   onClick={() => setActive(false)} src={cross} />
                    </div>
                    <p className='subTitleModal'>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                    <input
                        placeholder='Ваш email'
                        className='inputModal' />
                    <button className='buttonBody buttonModal'>Оплатить</button>
                    <div className='elipsModal'/>
                </div>
            </div>
        </div>
    );
};  

export default ModalW;