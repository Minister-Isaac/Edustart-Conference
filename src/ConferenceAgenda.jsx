import React from 'react';
import './ConferenceAgenda.css';
import image1 from "./assets/image 105.png";
import image2 from "./assets/image 106.png";
import image3 from "./assets/Rectangle 4495.png";
import image4 from "./assets/image 107.png";
import image5 from "./assets/image 107.png";

const sessions = [
  {
    id: 1,
    title: "Session 1",
    description: "The future of work – embracing emerging technologies.",
    image: image1,
  },
  {
    id: 2,
    title: "Session 2",
    description: "Navigating Career Pathways: From High School to Your Dream Job.",
    image: image2,
  },
  {
    id: 3,
    title: "Session 3",
    description: "Innovators in Tech: Meet the Industry Leaders",
    image: image3,
  },
  {
    id: 4,
    title: "Session 4",
    description: "Entrepreneurship & The Gig Economy: Building Your Own Path",
    image: image4,
  },
  {
    id: 5,
    title: "Session 5",
    description: "Careers Beyond Tech: Exploring Non-Tech Fields in a Tech-Driven World",
    image: image5,
  },
];

const ConferenceAgenda = () => {
  return (
    <section className="agenda-section" id="agenda">
      <h2 className="agenda-heading">Conference Agenda</h2>
      <div className="agenda-grid">
        {sessions.map((session) => (
          <div key={session.id} className="agenda-card">
            <img src={session.image} alt={session.title} className="agenda-image" />
            <div className="agenda-content">
              <h3>{session.title}</h3>
              <p>{session.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConferenceAgenda;
