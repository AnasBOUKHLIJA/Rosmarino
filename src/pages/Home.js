import React from "react";
import NavBar from '../components/NavBar';
import SwiperHome from '../components/SwiperHome';
import Service from '../components/Service';
import Footer from '../components/Footer';
const Home = () => {
    return(
        <>
            <NavBar />
            <SwiperHome />
            <Service />
            <Footer />
        </>
    );
}

export default Home;