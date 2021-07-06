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
          <div className="copy-title">What make us diff</div>
          <div className="copy-body">
            Welcome PC Culture your one stop for all you pc building needs. We got graphics cards,
            motherboards, CPUs, SSDs, everything from Cooler Master to G. Skill you want it, we got
            it, and if we don’t, you can add it.
          </div>
        </div>
        <CategoryCard />
      </div>
    </Layout>
  );
}
