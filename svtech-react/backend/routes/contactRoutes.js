const express = require("express");

const router = express.Router();

const {
  createContact,
  getContacts,
  deleteContact,
  getContactCount,
} = require("../controllers/contactControllers");

// Create Contact
router.post("/", createContact);

// Get All Contacts
router.get("/", getContacts);

// Contact Count
router.get("/count", getContactCount);

// Delete Contact
router.delete("/:id", deleteContact);

module.exports = router;