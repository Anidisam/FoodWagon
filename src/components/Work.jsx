import React from "react";
import "../assets/css/work.css"; // Make sure to create this CSS file for styling

// Import your images
import image1 from "../assets/images/icon-images";
import image2 from "../assets/images/icons-images";
import image3 from "../assets/images/ico-images";
import image4 from "../assets/images/ic-images";

const workSteps = [
  {
    id: 1,
    imgSrc: image1,
    title: "Select Location",
    description: "chose the location where your food will be delivered.",
  },
  {
    id: 2,
    imgSrc: image2,
    title: "Chose Order",
    description: "Chech over 100 of menus to pick your favorite food.",
  },
  {
    id: 3,
    imgSrc: image3,
    title: "Pay Advance",
    description: "it's Quick save and simple select several method of payment.",
  },
  {
    id: 4,
    imgSrc: image4,
    title: "Enjoy your meal",
    description: "Food is made and delivered directly to your home.",
  },
];

const Work = () => {
  return (
    <section className="work-section">
      {/* Section Heading */}
      <h1 className="work-heading">How Does It Work</h1>

      {/* Steps */}
      <div className="work-steps">
        {workSteps.map((step) => (
          <div key={step.id} className="work-step">
            <img src={step.imgSrc} alt={step.title} className="work-image" />
            <h4 className="work-title">{step.title}</h4>
            <p className="work-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
