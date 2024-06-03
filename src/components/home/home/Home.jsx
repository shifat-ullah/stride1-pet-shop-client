import Feature from "../../feature/Feature";
import About from "../about/About";
import Benner from "../benner/Benner";

const Home = () => {
    return (
        <div>
           <Benner></Benner>
           <About></About>
           <Feature></Feature>
        </div>
    );
};

export default Home;