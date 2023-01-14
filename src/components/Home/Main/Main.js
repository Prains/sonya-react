import './Main.scss'
import { mainimage } from '../../../utils/baseIcons'
import mainBackground from '../../../images/фонподфотонаглавной.svg'
import round from '../../../images/кружок3.svg'
import { Link } from 'react-router-dom'
import star from '../../../images/star.svg'
import man from '../../../images/man.svg'
import cart from '../../../images/cart.svg'
import web from '../../../images/web.svg'
import tg from '../../../images/tg.svg'
import ig from '../../../images/ig.svg'
import phone from '../../../images/phone.svg'
const Main = () => {
    return (
        <section className="main">
            <div className='main__lead'>
                <div className='main__lead__wrapper'>
                    <p className='main__lead__button'>веб-дизайнер</p>
                    <h2>СОФЬЯ КАЗАКОВА</h2>
                </div>
                <p className='main__lead__lead'>
                    Делаю сайты, <br></br>
                    которым завидуют ваши конкуренты
                </p>
                <Link to='/form' className='main__lead__link'>
                    ОСТАВИТЬ ЗАЯВКУ
                </Link>
                <div className='main__lead__socials'>
                    <a href="/"><img src={tg} alt="social" /></a>
                    <a href="/"><img src={ig} alt="social" /></a>
                    <a href="/"><img src={phone} alt="social" /></a>
                </div>
            </div>
            <div className='main__image'>
                <div className='main__image__blocks'>
                    <div className='main__image__circle'></div>
                    <div className='main__image__circle'></div>
                    <div className='main__image__rectangle' style={{
                        background: `url(${round}) no-repeat`,
                    }}></div>
                </div>
                <div className='main__image__advantages'>
                    <p className='main__image__advantages__advantage'><img src={star} alt="" className='advantage__icon'/>Дизайн страниц</p>
                    <p className='main__image__advantages__advantage'><img src={man} alt="" className='advantage__icon'/>Лендинги</p>
                    <p className='main__image__advantages__advantage'><img src={cart} alt="" className='advantage__icon'/>Интернет-магазины</p>
                    <p className='main__image__advantages__advantage'><img src={web} alt="" className='advantage__icon'/>Многостраничники</p>
                </div>
                <div className='main__image__wrapper' style={{ background: `url(${mainBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center center' }}>
                    <img src={mainimage} alt="" className='main__mainimage' />
                </div>
            </div>
        </section >
    );
}

export default Main;