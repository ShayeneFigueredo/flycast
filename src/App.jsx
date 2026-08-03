import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Audience from './components/Audience';
import Benefits from './components/Benefits';
import TeamTimeline from './components/TeamTimeline';
import CTABanner from './components/CTABanner';
import Comparison from './components/Comparison';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Login from './components/Login';

const LandingPage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Audience />
      <Benefits />
      <TeamTimeline />
      <CTABanner />
      <Comparison />
      <Process />
      <FAQ />
    </main>
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
