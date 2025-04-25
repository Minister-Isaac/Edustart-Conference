import React from "react";
import "./Getinvolved.css";
import image8 from "./assets/image 103.png";
import image9 from "./assets/image 101.png";
import image10 from "./assets/image 102.png"

const involvementOptions = [
  {
    icon: image8,
    title: "Become a Speaker",
    description: "Navigating Career Pathways: From High School to Your Dream Job.",
  },
  {
    icon: image9,
    title: "Sponsor",
    description: "Empower young talent and get a platform to showcase your brand.",
  },
  {
    icon: image10,
    title: "Volunteer",
    description: "Play a key role in making this event a success—join our talented team.",
  },
];

const GetInvolved = () => {
  return (
    <section className="get-involved" id="get-involved">
      <h2 className="section-title">Get Involved</h2>
      <div className="card-container">
        {involvementOptions.map((item, index) => (
          <div key={index} className="involvement-card">
            <img src={item.icon} alt={item.title} className="icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetInvolved;
