import { logo } from '../../utils/baseIcons.js'
import burger from '../../images/burger.svg'
import { Link } from 'react-router-dom';
import tg from '../../images/телеграм.svg'
import ig from '../../images/instagram.svg'
import phone from '../../images/phone-call.svg'
import './Burger.scss'

const Burger = (props) => {
    return (
        <div className="burger">
            <div className='burger__content'>
                <div className='burger__content__top'>
                    <img src={logo} alt="" className='burger__logo' />
                    <img src={burger} alt="" onClick={() => {
                        props.setBurgerShown(false)
                    }} />
                </div>
                <nav className='burger__content__nav'>
                    <Link to='/'>Главная</Link>
                    <Link to='/projects'>Мои проекты</Link>
                    <Link to='/services'>Услуги</Link>
                </nav>
                <Link to='/form' className='burger__content__link'>ОСТАВИТЬ ЗАЯВКУ</Link>
                <div className='burger__content__socials'>
                    <a href="/" className='burger__content__socials__social'><img src={tg} alt="" /></a>
                    <a href="/" className='burger__content__socials__social'><img src={ig} alt="" /></a>
                    <a href="/" className='burger__content__socials__social'><img src={phone} alt="" /></a>
                </div>
            </div>
        </div>
    );
}

export default Burger;