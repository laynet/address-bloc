const Contact = require("../db/models").Contact;

module.exports = class ContactController {
  constructor() {
    this.contacts = [];
    this.addContactQuestions = [
      {
        type: "input",
        name: "name",
        message: "contact's name -",
        validate(val) {
          return val !== "";
        }
      },
      {
        type: "input",
        name: "name",
        message: "contact's phone -",
        validate(val) {
          return val !== "";
        }
      },
      {
        type: "input",
        name: "name",
        message: "contact's email -",
        validate(val) {
          return val !== "";
        }
      }
    ];
  }

  addContact(name, phone, email) {
    return Contact.create({ name, phone, email });
  }
  getContacts() {
    return Contact.findAll();
  }
  iterativeSearch(contacts, target) {
    for (let contact of contacts) {
      if (contact.name.toLowerCase() === target.toLowerCase()) {
        return contact;
      }
    }
    return null;
  }
};
