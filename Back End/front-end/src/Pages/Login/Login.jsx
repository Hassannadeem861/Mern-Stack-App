import React, { useState } from "react";
import "./Login.css";
import loginImage from "../../Images/Registration Image.png";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    // console.log("e", e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      // Default Value
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("e", e);
    console.log("Login User: ", user);
  };

  return (
    <div className="">
      <section>
        <main>
          <div className="login-section">
            <div className="container grid grid-two-cols">
              {/* Login Image  div  */}
              <div className="login-image">
                <img
                  src={loginImage}
                  alt="Login-image"
                  width="300px"
                  height="150px"
                />
              </div>
              {/* Form Section */}
              <div className="form-section">
                <h1 className="login-heading">L ogin Form</h1>
                <br />
                <form onSubmit={submitHandler}>
                  <div>
                    <input
                      type="text"
                      name="email"
                      className="emailInput"
                      placeholder="Enter your login"
                      required
                      value={user.email}
                      // defaultValue={name.email}
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      className="passwordInput"
                      placeholder="Enter your login"
                      required
                      value={user.password}
                      // defaultValue={name.password}
                      onChange={changeHandler}
                    ></input>
                  </div>
                  <button type="submit" className="btn">
                    Login Now
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

export default Login;
