import React from 'react';
import AppBarTop from '../../Components/Home/AppBarTop/AppBarTop';
import Banner from '../../Components/Home/Banner/Banner';
import Features from '../../Components/Home/Features/Features';
import ForestSave50 from '../../Components/Home/ForestSave50/ForestSave50';
import LatestBlog from '../../Components/Home/LatestBlog/LatestBlog';
import Popular from '../../Components/Home/Popular/Popular';
import Recomemended from '../../Components/Home/Recommended/Recomemended';
import Sponcor from '../../Components/Home/Sponcor/Sponcor';
import WelcomeBar from '../../Components/Home/WelcomeBar/WelcomeBar';
import AppBar from '../../Components/Shared/AppBar/AppBar';

const Home = () => {
    return (
        <div>
            <WelcomeBar />
            <AppBarTop />
            <AppBar />
            <Banner />
            <Sponcor />
            <ForestSave50 />
            <Features />
            <Popular />
            <Recomemended />
            <LatestBlog />
        </div>
    );
};

export default Home;