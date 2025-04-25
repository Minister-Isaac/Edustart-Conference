import React from "react";
import "./VisualBanner.css";
import bannerImage from "./assets/banner-image.png";

const VisualBanner = () => {
  return (
    <section className="visual-banner">
      <img src={bannerImage} alt="Banner" />
    </section>
  );
};

export default VisualBanner;
