import About from "../../components/Home/About/About";
import Contacts from "../../components/Home/Contacts/Contacts";
import Main from "../../components/Home/Main/Main";
import Projects from "../../components/Home/Projects/Projects";

const Home = () => {
    return (
        <main className="page">
            <Main />
            <Projects />
            <About />
            <Contacts />
        </main>
    );
}

export default Home;