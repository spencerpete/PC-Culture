import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Layout from '../../components/Layout/Layout';
import './Home.css';

export default function Home() {
  return (
    <Layout>
      <div>
        <div>
          <Carousel />
        </div>
        <div className="landingPage-copy-container">
          <div className="copy-title">What make us diff</div>
          <div className="copy-body">
            Welcome to PC Culture! Your one stop for all your pc building needs. We got graphics
            cards, motherboards, CPUs, SSDs... you want it, we got it, and don't worry we have gone
            through and picked out the best of the best so no matter your PC knowledge you can rest
            knowing that no matter the build you are going to have one spanking hot PC!
          </div>
        </div>
        <CategoryCard />
      </div>
    </Layout>
  );
}
