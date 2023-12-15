// ++++++++++++++++++++++++++++
// Home Controller
// ++++++++++++++++++++++++++++

let home = async (req, res) => {
  try {
    res.status(200).send("This is home page");
  } catch (error) {
    console.log("error: ", error);
  }
};


// ++++++++++++++++++++++++++++
// Register Controller
// ++++++++++++++++++++++++++++

let register = async (req, res) => {
  try {
    res.status(200).send("This is register page");
  } catch (error) {
    res.status(400).send("404 page not found");
  }
};

export {home, register};
