import contactModel from "../models/contactSchema.mjs";

const contactForm = async (req, res, next) => {
  try {
    const responce = req.body;
    console.log("responce: ", responce);
    await contactModel.create(responce);
    return res.status(200).json({ message: "Message send Successful" });
  } catch (error) {
    return res.status(500).json({ message: "Message not delivered" });
  }
};
console.log("contactForm :", contactForm);

export default contactForm;
