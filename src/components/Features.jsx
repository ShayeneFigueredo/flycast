import React from 'react';
import { Eye, Smartphone, Zap } from 'lucide-react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="container">
        
        {/* Partners Banner */}
        <div className="partners-banner">
          <span>GlobalBank</span>
          <span>Nietzsche</span>
          <span>Lightbox</span>
          <span>Boltshift</span>
          <span>Spherule</span>
        </div>

        <div className="features-header">
          <h2 className="section-title">
            EXPLORE THE FUTURE OF<br/>
            VIRTUAL REALITY
          </h2>
          <p className="section-subtitle">
            Our VR products redefine immersive experiences, transporting users to new worlds. Discover the endless possibilities of virtual reality technology.
          </p>
        </div>

        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card glass-panel">
            <div className="icon-wrapper">
              <Eye size={24} color="var(--flycast-accent)" />
            </div>
            <h3>Unmatched Immersion and Realism</h3>
            <p>Experience lifelike environments that engage all your senses.</p>
          </div>

          {/* Card 2 */}
          <div className="feature-card glass-panel">
            <div className="icon-wrapper">
              <Smartphone size={24} color="var(--flycast-accent)" />
            </div>
            <h3>Seamless Integration with Your Lifestyle</h3>
            <p>Our VR solutions fit effortlessly into your daily routine.</p>
          </div>

          {/* Card 3 */}
          <div className="feature-card glass-panel">
            <div className="icon-wrapper">
              <Zap size={24} color="var(--flycast-accent)" />
            </div>
            <h3>Cutting-Edge Every Technology</h3>
            <p>Designed for both casual users and ambitious enthusiasts.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
