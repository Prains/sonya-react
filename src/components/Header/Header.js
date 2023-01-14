import { Link } from "react-router-dom";
import '../Header/Header.scss'
import { logo } from '../../utils/baseIcons'
import burger from '../../images/burger.svg'
import tg from '../../images/телеграм.svg'
import ig from '../../images/instagram.svg'
import phone from '../../images/phone-call.svg'
import Burger from "../Burger/Burger";



const Header = (props) => {
    const burgerShown = props.burgerShown;
    const setBurgerShown = props.setBurgerShown;
    return (
        <>
            {burgerShown === false && <header className="header">
                <Link to='/'>
                    <img src={logo} alt="logo" className="header__logo" />
                </Link>
                <nav className="header__nav">
                    <Link to='/'>
                        <h4>Главная</h4>
                    </Link>
                    <Link to='/projects'>
                        <h4>Мои проекты</h4>
                    </Link>
                    <Link to='/services'>
                        <h4>Услуги</h4>
                    </Link>
                </nav>
                <div className="header__socials">
                    <a href="/" className="header__social"><img src={tg} alt="" /></a>
                    <a href="/" className="header__social"><img src={ig} alt="" /></a>
                    <a href="/" className="header__social"><img src={phone} alt="" /></a>
                </div>
                <img src={burger} alt="" className="header__burger" onClick={() => {
                    setBurgerShown(!burgerShown);
                }} />
            </header>}
            {burgerShown && <Burger setBurgerShown={setBurgerShown} />}
        </>
    );
}

export default Header;