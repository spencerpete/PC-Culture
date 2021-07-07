import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Layout from '../../components/Layout/Layout';
import './Home.css';

export default function Home({ user }) {
  return (
    <Layout user={user}>
      <div>
        <div>
          <Carousel />
        </div>
        <div className="landingPage-copy-container">
          <div className="copy-title">About Us</div>
          <div className="copy-body">
            Welcome to PC Culture! Your one stop for all your PC building needs. Whether it's graphics
            cards, motherboards, CPUs, SSDs... you want it, we got it. And don't worry, we have gone
            through and picked out the best of the best so no matter your PC knowledge you can rest
            easy knowing that whatever you build, you're going to have one spanking hot PC!
          </div>
        </div>
        <CategoryCard />
      </div>
    </Layout>
  );
}
