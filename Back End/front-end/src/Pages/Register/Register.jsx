import React, { useState } from "react";
import "./Register.css";
import registrationImage from "../../Images/Registration Image.png";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  // console.log("user: ",user)

  const handleInput = (e) => {
    // console.log("event :", e);
    let name = e.target.name;
    let value = e.target.value;
    // console.log("name: ", name);
    // console.log("value: ", value);

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log("user: ", user);
  };
  // console.log("submitHandler: ", submitHandler);

  return (
    <div>
      <section>
        <main>
          <div className="registration-section">
            <div className="container-grid grid-two-cols">
              {/* Img div */}
              <div className="img">
                <img
                  src={registrationImage}
                  alt="img"
                  width="500px"
                  height="200px"
                ></img>
              </div>
              {/* form div */}
              <div className="form-section">
                <h1 className="main-heading mb-3">Registration Form</h1>
                {/* <br /> */}
                <form onSubmit={submitHandler}>
                  <div>
                    <label htmlFor="username">username:</label>
                    <input
                      type="text"
                      name="username"
                      className="username"
                      placeholder="Enter your name"
                      // autoComplete="on"
                      minLength={2}
                      maxLength={20}
                      // defaultValue={user.username}
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email:</label>
                    <input
                      type="text"
                      name="email"
                      className="email"
                      placeholder="Enter your email"
                      autoComplete="on"
                      minLength={5}
                      maxLength={30}
                      // defaultValue={user.email}
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password:</label>
                    <input
                      type="password"
                      name="password"
                      className="password"
                      placeholder="Enter your password"
                      // autoComplete="on"
                      minLength={2}
                      maxLength={20}
                      // defaultValue={user.password}
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phonenumber">phonenumber:</label>
                    <input
                      type="number"
                      name="phonenumber"
                      className="phonenumber"
                      placeholder="Enter your phonenumber"
                      autoComplete="on"
                      minLength={11}
                      maxLength={20}
                      // defaultValue={user.phonenumber}
                      value={user.phonenumber}
                      onChange={handleInput}
                    />
                  </div>
                  {/* <br/> */}
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Register;
