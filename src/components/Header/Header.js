import { Link } from "react-router-dom";
import '../Header/Header.scss'
import { logo } from '../../utils/baseIcons'

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <img src={logo} alt="logo" />
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
        </header >

    );
}

export default Header;