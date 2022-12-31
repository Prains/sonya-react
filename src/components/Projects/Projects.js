import './Projects.scss'
import { Link } from 'react-router-dom'
import boops from '../../images/boops.svg'
import case1 from '../../images/case1.png'
import case2 from '../../images/case2.png'
import case3 from '../../images/case3.png'


const Projects = () => {
    return (
        <section className='projects'>
            <div className='projects__uppersection'>
                <img src={boops} alt="" className='uppersection__boop'/>
                <div className='uppersection__text-wrapper'>
                    <h2 className='uppersection__title'>МОИ ПРОЕКТЫ</h2>
                    <p className='uppersection__subtitle'>Подборка моих самых любимых работ, <br />
                        которые произвели максимальное впечатление на заказчика</p>
                </div>
            </div>
            <div className='projects__content'>
                <div style={{
                    backgroundImage: `url(${case1})`,
                    backgroundSize: 'contain'
                    }} alt="" className='content__image' ></div>
                <div className='content__row'>
                    <img src={case2} alt="" />
                    <img src={case3} alt="" />
                </div>
            </div>
            <Link to='/projects' className='projects__link'>ПОСМОТРЕТЬ ПОБЛИЖЕ</Link>
        </section>
    );
}

export default Projects;