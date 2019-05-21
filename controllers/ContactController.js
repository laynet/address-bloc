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

  binarySearch(contacts, target) {
    let min = 0;
    let max = contacts.length - 1;
    let mid;

    while (min <= max) {
      // #1
      mid = Math.floor((min + max) / 2);
      let currentContact = contacts[mid];
      //#2
      if (currentContact.name > target) {
        max = mid - 1;
      } else if (currentContact.name < target) {
        min = mid - 1;
      } else {
        return contacts[mid];
      }
    }

    return null;
  }
  search(name) {
    return Contact.findOne({
      where: { name }
    });
  }
};
