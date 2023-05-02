import {React,  useState } from 'react';
import Style from '../Styles/Body.css'
import fonts from '../fonts/style.css'
import man from '../Assets/man.png'
import pig from '../Assets/pig.png'
import money from '../Assets/money.png'
import smile from '../Assets/smile.png'
import Lightning1 from '../Assets/Lightning1.png'
import Lightning2 from '../Assets/Lightning2.png'
import ModalW from './ModalW';

const Body = () => {
 const [modalActive, setModalActive] = useState(false)

    return (
        <div>

        <div className='flexBodyRow'>
            
            <div className='flexBody'>
                <p className='titleBody'>Не упусти возможность войти в   <span style={{ fontWeight: 'bold' }}>прибыльную нишу</span></p>
                <p className='subTitleBody'>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                <button onClick={()=> setModalActive(true)} className='buttonBody'>Начать зарабатывать на NFT</button>
            </div>
            <ModalW active={modalActive} setActive={setModalActive} />
            
            <div className='boxImage'>
                <div className='elipsBodyGreen'/>
                <div className='elipsBodyViol'/>
                <img className='manImg' src={man}/>
                <img className='pigImg' src={pig}/>
                <img className='moneyImg' src={money}/>
                <img className='smileImg' src={smile}/>
                <img className='Lightning1Img' src={Lightning1}/>
                <img className='Lightning2Img' src={Lightning2} />
                
            </div>

            </div>
        </div>
    );
};

export default Body;