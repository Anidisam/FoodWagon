import React from "react";
import "../assets/css/best.css"; 
import img1 from "../assets/images/b1.svg"; 
import img2 from "../assets/images/b2.svg"; 
import img3 from "../assets/images/b3.svg"; 

const Best = () => {
  return (
    <section className="best-section">
      {/* First Container */}
      <div className="best-container">
        <div className="content-left">
          <h1>
            Best deal <span className="highlight">crispy sandwiches </span>
          </h1>
          <p>
            Enjoy the large size of sandwiches. Complete <br />
            perfect slice of sandwiches.
          </p>
          <button className="order-button">
            Proceed to Order <span className="arrow-icon">→</span>
          </button>
        </div>
        <div className="image-right">
          <img src={img1} alt="Best Food Deals" />
        </div>
      </div>

      {/* Second Container */}
      <div className="best-container reverse">
        <div className="image-left">
          <img src={img2} alt="Fast Delivery Service" />
        </div>
        <div className="content-right">
          <h1>
            Celebrate parties with{" "}
            <span className="highlight">fried chicken</span>
          </h1>
          <p>
            Get the best fried chicken smeared with a lip <br />smacking lemon chili
            flavor. Check out <br />best deals for fried chicken.
          </p>
          <button className="order-button">
            Proceed to Order <span className="arrow-icon">→</span>
          </button>
        </div>
      </div>

      {/* Third Container */}
      <div className="best-container">
        <div className="content-left">
          <h1>
            Wanna eat hot & spicy <span className="highlight">pizza?</span>
          </h1>
          <p>
            Pair up with a friend and enjoy the <br />hot and crispy pizza pops. Try
            it <br />with the best deals.
          </p>
          <button className="order-button">
            Proceed to Order <span className="arrow-icon">→</span>
          </button>
        </div>
        <div className="image-right">
          <img src={img3} alt="Best Menus" />
        </div>
      </div>
    </section>
  );
};

export default Best;
