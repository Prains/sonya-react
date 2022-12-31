import About from "../../components/About/About";
import Main from "../../components/Main/Main";
import Projects from "../../components/Projects/Projects";

const Home = () => {
    return (
        <main className="page">
            <Main />
            <Projects />
            <About />
        </main>
    );
}

export default Home;