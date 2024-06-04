import Feature from "../../feature/Feature";
import About from "../about/About";
import Benner from "../benner/Benner";
import Contact from "../contact/Contact";

const Home = () => {
    return (
        <div>
           <Benner></Benner>
           <About></About>
           <Feature></Feature>
           <Contact></Contact>
        </div>
    );
};

export default Home;