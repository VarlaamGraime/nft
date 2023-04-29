import React from 'react';
import style from '../Styles/Cards.css'
import smileCards1 from '../Assets/smileCards1.png'
import smileCards2 from '../Assets/smileCards2.png'
import smileCards3 from '../Assets/smileCards3.png'
import smileCards4 from '../Assets/smileCards4.png'

 

const Cards = () => {
    return (
        <div className='centerGrid'>
            <p className='titleCards'>Что даст тебе обучение?</p>
            <div className='gridCards'>
                <div className='cardBlock'>
                    <div className='boxSmile'>
                        <img className='smileImage'  src={smileCards1}></img>
                        <img className='blurSmile'  src={smileCards1}></img>
                    </div>
                    <p className='cardsText'>Откроешь свой первый криптокошелек и научишься с ним работать</p>
                    <div className='cardBgBlock'/>                 
                </div>
                <div className='cardBlock'>
                    <div className='boxSmile'>
                        <img className='smileImage'  src={smileCards2}></img>
                        <img className='blurSmile'  src={smileCards2}></img>
                    </div>
                    <p className='cardsText'>Поймёшь, как выбирать правильные дропы</p>
                    <div className='cardBgBlock'/>
                </div>
                <div className='cardBlock'>
                    <div className='boxSmile'>
                        <img  className='smileImage'  src={smileCards3}></img>
                        <img  className='blurSmile' src={smileCards3}></img>
                    </div>
                    <p className='cardsText'>Построишь план по быстрому приумножению заработанных средств</p>                    
                    <div className='cardBgBlock'/>
                </div>
                <div className='cardBlock'>
                    <div className='boxSmile'>
                        <img  className='smileImage'  src={smileCards4}></img>
                        <img  className='blurSmile' src={smileCards4}></img>
                    </div>
                    <p className='cardsText'>Узнаешь кто такие холдеры и флипперы</p>                    
                    <div className='cardBgBlock'/>
                </div>
            </div>
            <div className='elipsCardsBgTop'></div>
            <div className='elipsCardsBgBot'></div>
            <div className='elipsCardsSmTopSemi'></div>
            <div className='elipsCardsSmTop'></div>
            <div className='elipsCardsSmBot'></div>
        </div>
    );
};

export default Cards;