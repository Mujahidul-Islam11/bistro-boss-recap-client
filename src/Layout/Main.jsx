import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar.jsx'
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;