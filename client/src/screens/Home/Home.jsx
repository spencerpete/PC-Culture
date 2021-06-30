import React from 'react';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import Layout from '../../components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div>
        <div>
          <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
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
