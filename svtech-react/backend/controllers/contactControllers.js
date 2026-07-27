const Contact = require("../models/Contact");

// Create Contact
const createContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      subject,
      message,
    } = req.body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const contact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      company,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message Sent Successfully",
      contact,
    });
  } catch (err) {
    console.error("Create Contact Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json(contacts);
  } catch (err) {
    console.error("Get Contacts Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete Contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.json({
      success: true,
      message: "Contact Deleted Successfully",
    });
  } catch (err) {
    console.error("Delete Contact Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Contact Count
const getContactCount = async (req, res) => {
  try {
    const totalContacts = await Contact.countDocuments();

    res.json({
      success: true,
      totalContacts,
    });
  } catch (err) {
    console.error("Count Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
  getContactCount,
};