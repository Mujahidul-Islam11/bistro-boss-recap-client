import Banner from "../../Banner/Banner";
import About from "../BistroAbout/About";
import Category from "../Category/Category";
import CheckOut from "../CheckOut/CheckOut";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <CheckOut></CheckOut>
        </div>
    );
};

export default Home;