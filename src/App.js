import React from 'react'
import './index.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CountdownTimer from './CountdownTimer';
import StatsCounter from './StatsCounter';
import AboutSection from './AboutSection';
import VisualBanner from './VisualBanner';
import ConferenceAgenda from './ConferenceAgenda';
import BannerSection from './BannerSection';
import SpeakersSection from './SpeakersSection';
import GetInvolved from './GetInvolved';
import FAQ from './FAQ';
import ContactSection from './ContactSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <CountdownTimer />
      <StatsCounter />
      <AboutSection />
      <VisualBanner />
      <ConferenceAgenda/>
      <BannerSection/>
      <SpeakersSection/>
      <GetInvolved/>
      <FAQ/>
      <ContactSection/>
    </div>
  );
}

export default App;
