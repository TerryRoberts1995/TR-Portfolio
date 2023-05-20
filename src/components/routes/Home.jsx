import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
import DronePhoto from "../../images/drone-1.jpg";
import DronePhoto2 from "../../images/drone-4.jpg";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="header-container">
        <h1 className="header">Let me Introduce myself.</h1>
      </div>

      <div className={`content-section one`}>
        <div
          className={`content-box-one ${
            animate ? "animate-slide-from-left" : ""
          }`}
        >
          <div className="image-box">
            <img src={DronePhoto} alt="Description of the image" />
          </div>

          <p className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur magnam omnis dolorem culpa veritatis natus asperiores
            ducimus repellat, rem non vel neque numquam aliquam quam amet soluta
            consequuntur, ipsa sapiente voluptatem? Explicabo dolore neque vel,
            veritatis nihil nam dignissimos natus numquam quae quia, molestias,
            facilis magni accusamus culpa voluptatibus dolores aliquid.
            Consequatur reprehenderit perferendis, blanditiis perspiciatis animi
            voluptate, quod laborum rem eos, neque accusamus. Doloremque animi
            dolores dolore corrupti dignissimos labore, officiis expedita quod
            cupiditate?
          </p>
        </div>

        <div
          className={`content-box-two ${
            animate ? "animate-slide-from-right" : ""
          }`}
        >
          <p className="borderless">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            beatae fugit, facere, aspernatur neque cupiditate unde fuga ullam
            quidem quasi maxime voluptatum. Dolores, iure ad?
          </p>
        </div>
      </div>

      <div className={`parallax-section`}>
        <div className="parallax-bg"></div>
        <div className="parallax-content">
          <p className="parallax-text">Toast-R</p>
        </div>
      </div>

      <div className={`content-section two`}>
        <div
          className={`content-box-two ${
            animate ? "animate-slide-from-left" : ""
          }`}
        >
          <p className="borderless">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            beatae fugit, facere, aspernatur neque cupiditate unde fuga ullam
            quidem quasi maxime voluptatum. Dolores, iure ad?
          </p>
        </div>

        <div
          className={`content-box-one ${
            animate ? "animate-slide-from-right" : ""
          }`}
        >
          <p className="content-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            exercitationem voluptas perferendis fugit laboriosam dolore qui
            reiciendis? Molestiae saepe ducimus dignissimos impedit aliquid quis
            iure corporis repellendus ipsa perferendis dicta repellat, hic quos
            maiores adipisci, illo suscipit necessitatibus dolor iusto, quod
            ipsam distinctio. Eaque facilis dolorem suscipit ipsa. Eum illum
            cum, veritatis cumque quisquam ea aliquid voluptates, odio ex,
            magnam dicta minus nemo. Et dolore ea vitae doloremque adipisci,
            incidunt sunt dolores necessitatibus illo quos!
          </p>

          <div className="image-box">
            <img src={DronePhoto2} alt="Description of the image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
