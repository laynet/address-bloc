const inquirer = require("inquirer");
const dateFormat = require("dateformat");
const day = dateFormat(new Date(), "dd.mm.yyyy h:mm:s:ss");
const ContactController = require("./ContactController");

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: ["Add new contact", "Get Date", "Exit"]
      }
    ];
    this.book = new ContactController();
  }

  main() {
    console.log(`Welcom to AddressBloc!`);
    inquirer
      .prompt(this.mainMenuQuestions)
      .then(response => {
        switch (response.mainMenuChoice) {
          case "Add new contact":
            this.addContact();
            break;
          case "Get Date":
            this.getDate();
            break;
          case "Exit":
            this.exit();

          default:
            console.log("Invalid input");
            this.main();
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  clear() {
    console.log("\x1Bc");
  }

  addContact() {
    this.clear();
    console.log("addContact called");
    this.main();
  }

  getDate() {
    console.log(day);
    this.main();
  }

  exit() {
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  getContactCount() {
    return this.contacts.length;
  }

  remindMe() {
    return "Learning is a life-long pursuit";
  }
};
