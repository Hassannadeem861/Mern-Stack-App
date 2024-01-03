import React, { useState } from "react";
import "./Contact.css";
import contactImage from "../../Images/Registration Image.png";

const Contact = () => {
  //State Local variable
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  // console.log("contact: ", contact);

  const changeHandler = (e) => {
    // console.log("event: ", e);
    const name = e.target.name;
    const value = e.target.value;
    // console.log("name: ", name)
    // console.log("value: ", value)

    // setContact({
    //   ...user,
    //   [name]: value,
    // });
    // console.log("changeHandler: ", changeHandler);

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submithandler = (e) => {
    e.preventDefault();
    // console.log("event: ", e);
    console.log("contact: ", contact);

  };

  return (
    <div>
      <section>
        <main>
          <div className="contact-section">
            <h1 className="main-heading">Contact Form</h1>
            <div className="container grid grid-two-cols">
              {/* Contact Image div */}
              <div className="contact-img">
                <img
                  src={contactImage}
                  alt="img"
                  width="300px"
                  height="150px"
                />
              </div>
              {/* Form Section Start */}
              <div className="form-section">
                <form onSubmit={submithandler}>
                  <div>
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      required
                      placeholder="Enter your username"
                      onChange={changeHandler}
                      minLength={5}
                      maxLength={10}
                      value={contact.username}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      required
                      placeholder="Enter your username"
                      onChange={changeHandler}
                      minLength={5}
                      maxLength={10}
                      value={contact.email}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Enter your message"
                      required
                      onChange={changeHandler}
                      minLength={5}
                      maxLength={50}
                      value={contact.message}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn">
                    Submit
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

export default Contact;
