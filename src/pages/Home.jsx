import React from "react";
import FeaturedOffers from "../components/FeaturedOffers";
import HowItWorks from "../components/HowItWorks";
import Statistics from "../components/Statistics";

const HomePage = () => {
  return (
    <div>
      <header className="bg-success text-white text-center py-4">
        <h1>مرحبًا بك في المنصة الزراعية</h1>
        <p>إكتشف أفضل العروض والمنتجات الزراعية اليوم!</p>
      </header>
      <FeaturedOffers/>
      <HowItWorks/>
      <Statistics/>
    </div>
  );
};

export default HomePage;