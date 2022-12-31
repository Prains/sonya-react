import './About.scss'
import { Link } from 'react-router-dom'
import maingimg from '../../images/about__mainimg.png'
import skills from '../../images/ылшдды.svg'
const About = () => {
    return (
        <section className="about">
            <div className="about__text-wrapper">
                <h2 className="about__title">ОБО МНЕ</h2>
                <p className="about__text">Меня зовут Софья, я веб-дизайнер - помогаю вашим сайтам стать понятнее и интереснее для пользователя!</p>
                <h3 className="text__subtitle">Немного фактов обо мне и моей работе: </h3>
                <ul className="text__list">
                    <li className="list__item"><span className="list__header first">1</span>Мне ближе всего классический стиль построения сайта - понятный первый экран с кнопкой, удобное разделение на блоки. </li>
                    <li className="list__item"><span className="list__header second">2</span>Узнавать новые фишки в дизайне - мое хобби, постоянно применяю что-то новое в работах</li>
                    <li className="list__item"><span className="list__header third">3</span>Люблю делать сайты, основываясь на одном визуальном компоненте. Например, брать фиолетовый и обыгрывать его разными градиентами, как на этом сайте
                    </li>
                </ul>
                <img src={skills} alt="" className="about__image-row" />
                <Link to='/form' className='about__link'>СТОИМОСТЬ РАБОТ</Link>
            </div>
            <img src={maingimg} alt="" className="about__mainimage" />
        </section>
    );
}

export default About;