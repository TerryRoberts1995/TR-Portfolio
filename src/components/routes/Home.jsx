import React, { useEffect, useState } from "react";
import "../../styles/home.scss";
import DronePhoto from "../../images/drone-1.jpg";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="header-container">
        <h1 className="header">Hello World!</h1>
      </div>

      <div className={`content-section`}>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          beatae fugit, facere, aspernatur neque cupiditate unde fuga ullam
          quidem quasi maxime voluptatum. Dolores, iure ad?
        </div>
      </div>

      <div className={`content-section`}>
        <div
          className={`content-box-one ${
            animate ? "animate-slide-from-left" : ""
          }`}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore odit
          quo expedita rerum praesentium error fugit.
        </div>

        <div
          className={`content-box-two ${
            animate ? "animate-slide-from-right" : ""
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          exercitationem voluptas perferendis fugit laboriosam dolore qui
          reiciendis? Molestiae saepe ducimus dignissimos impedit aliquid quis
          iure corporis repellendus ipsa perferendis dicta repellat, hic quos
          maiores adipisci, illo suscipit necessitatibus dolor iusto, quod ipsam
          distinctio. Eaque facilis dolorem suscipit ipsa. Eum illum cum,
          veritatis cumque quisquam ea aliquid voluptates, odio ex, magnam dicta
          minus nemo. Et dolore ea vitae doloremque adipisci, incidunt sunt
          dolores necessitatibus illo quos!
        </div>
      </div>
    </div>
  );
};

export default Home;
