import React from "react";
import "../../styles/home.scss";

const Home = () => {
  return (
    <>
      <div className="header-container">
        <h1 className="header">Hello World!</h1>
      </div>

      <div className="content-section">
        <div className="content-box-one">
          <div className="image-box">
            <img src="https://example.com/example-image.jpg" alt="Example" />
          </div>
          <div className="text-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
              magna vitae lacus scelerisque efficitur eget ac nisl.
            </p>
          </div>
        </div>

        <div className="content-box-two">
          <div className="image-box">
            <img src="https://example.com/example-image.jpg" alt="Example" />
          </div>
          <div className="text-box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
              magna vitae lacus scelerisque efficitur eget ac nisl.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
