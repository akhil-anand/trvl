import React from 'react';
import '../../App.css';
import HeroSection from '../heroSection/heroSection';
import Cards from '../cards/cards';
import Footer from '../footer/footer';

function Home () {
    return (
        <>
        <HeroSection />
        <Cards />
        <Footer />
        </>

    )
}

export default Home;