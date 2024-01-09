import React from "react";
import "./Home.css";
import homeImage from "../../Images/Registration Image.png";

const Home = () => {
  return (
    <div className="">
      {/*  FIRST SECTION */}
      <div className="parent1">
        <div>
          <p id="p1">We one the world best IT Company </p>
          {/* <br /> */}
          <h2 className="heading1">Welcome to Hassan Nadeem</h2>
          {/* <br /> */}
          <p id="p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            animi dolorem, <br /> quibusdam cupiditate rerum porro, voluptates
            error unde libero doloribus fugiat <br /> suscipit enim corrupti.
            Tenetur unde optio minus quisquam eligendi minus?
          </p>
          <br />
          <button className="btn1">Connect Now</button>
          {/* <br/> */}
          <button className="btn2">Learn More</button>
        </div>
        <br />
        <div>
          <img
            src={homeImage}
            alt="Home-img"
            width={"300px"}
            height={"150px"}
          ></img>
        </div>
      </div>

      {/*  SECOND SECTION */}
      <div className="parent2">
        <div className="child1">
          <p className="paragraph2">50+</p> 
          <p className="Lorem1">lorem ipsum</p>
        </div>

        <div className="child2">
          <p className="paragraph3">100.00+</p>
          <p className="Lorem2"> Lorem ipsum </p>
        </div>
        <div className="child3">
          <p className="paragraph4">500+</p>
          <p className="Lorem3">Lorem ipsum</p>
        </div>
        <div className="child4">
          <p className="paragraph5">24/7</p>
          <p className="Lorem4">Lorem ipsum</p>
        </div>
      </div>
     <br/>
     <br/>
     <br/>
     <div>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi
      dolorem, quibusdam cupiditate rerum porro, voluptates error unde libero
      doloribus fugiat suscipit enim corrupti. Tenetur unde optio minus quisquam
      eligendi?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi
      dolorem, quibusdam cupiditate rerum porro, voluptates error unde libero
      doloribus fugiat suscipit enim corrupti. Tenetur unde optio minus quisquam
      eligendi?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima animi
      dolorem, quibusdam cupiditate rerum porro, voluptates error unde libero
      doloribus fugiat suscipit enim corrupti. Tenetur unde optio minus quisquam
      eligendi?
      </p>
     </div>











    </div>
  );
};

export default Home;
