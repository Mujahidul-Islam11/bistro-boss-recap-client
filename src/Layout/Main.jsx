import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar.jsx'
import Footer from '../Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <div className='fixed w-full z-10'>
            <Navbar></Navbar>
            </div>
            <div className='md:w-[1300px] mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;