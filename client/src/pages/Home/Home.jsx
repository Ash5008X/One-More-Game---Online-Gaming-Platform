import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import FeaturedGames from '../../components/FeaturedGames/FeaturedGames';
import FeatureHighlights from '../../components/FeatureHighlights/FeatureHighlights';
import Footer from '../../components/Footer/Footer';

import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      
      <main className="home-page__main">
        <Hero />
        <FeaturedGames />
        <FeatureHighlights />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
