import './Contacts.scss'
import phone from '../../images/iphone.png'

const Contacts = () => {
    return (
        <section className="contacts">
            <img src={phone} alt="" />
            <div className='contacts__text-wrapper'>
                <a href="/" className='contacts__link'>TELEGRAM</a>
                <a href="/" className='contacts__link'>WHATSAPP</a>
                <a href="/" className='contacts__link'>INSTAGRAMM</a>
                <a href="/" className='contacts__link'>+7 951 875-46-53</a>
            </div>
        </section>
    );
}

export default Contacts;