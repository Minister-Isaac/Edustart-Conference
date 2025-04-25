import React from 'react';
import './SpeakersSection.css';
import image7 from "./assets/User.svg"

const speakers = [
  {
    name: 'Donatus Bishung',
    title: 'Ceo & Founder EduStart Tech',
    imgSrc: image7,
  },
  {
    name: 'Donatus Bishung',
    title: 'Ceo & Founder EduStart Tech',
    imgSrc: image7,
  },
  {
    name: 'Donatus Bishung',
    title: 'Ceo & Founder EduStart Tech',
    imgSrc: image7,
  },
  {
    name: 'Donatus Bishung',
    title: 'Ceo & Founder EduStart Tech',
    imgSrc: image7,
  },
  {
    name: 'Donatus Bishung',
    title: 'Ceo & Founder EduStart Tech',
    imgSrc: image7,
  },
];

const SpeakersSection = () => {
  return (
    <section className="speakers-section" id='speakers'>
      <h2 className="speakers-heading">Meet Our Speakers</h2>
      <div className="speakers-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <img
              src={speaker.imgSrc}
              alt={speaker.name}
              className="speaker-avatar"
            />
            <h3 className="speaker-name">{speaker.name}</h3>
            <p className="speaker-title">{speaker.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpeakersSection;
