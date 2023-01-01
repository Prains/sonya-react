import About from "../../components/About/About";
import Contacts from "../../components/Contacts/Contacts";
import Main from "../../components/Main/Main";
import Projects from "../../components/Projects/Projects";

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