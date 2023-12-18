// Express.js mein "controllers" ka istemal aapke application ki logic ko tarteeb dene aur handle karne ke liye hota
// hai. Controllers incoming requests ko handle karte hain, data ko process karte hain,
// aur client ko appropriate response bhejne ke liye zimmedar hote hain.
// Yahan do aam tareeqay hain controllers ko Express.js mein organize karne ke liye:
// functional approach aur class-based approach.

// ++++++++++++++++++++++++++++
// Home Controller
// ++++++++++++++++++++++++++++

let home = async (req, res) => {
  try {
    res.status(200).send("This is auth page");
  } catch (error) {
    console.log("error: ", error);
  }
};

// ++++++++++++++++++++++++++++
// Register Controller
// ++++++++++++++++++++++++++++

let register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send({
      message: req.body,
    });
  } catch (error) {
    res.status(400).send("404 page not found");
  }
};

export { home, register };
