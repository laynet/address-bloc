const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {
  beforeEach(done => {
    this.book = new ContactController();

    sequelize
      .sync({ force: true })
      .then(res => {
        done();
      })
      .catch(err => {
        done();
      });
  });

  describe("#addContact()", () => {
    // #1
    it("should add a single contact into the book", done => {
      //#2
      this.book
        .addContact("Alice", "001-101-1010", "email@email.com")
        .then(contact => {
          //#3
          expect(contact.name).toBe("Alice");
          expect(contact.phone).toBe("001-101-1010");
          expect(contact.email).toBe("email@email.com");
          done();
        })
        .catch(err => {
          done();
        });
    });
  });
  it("should be defined", () => {
    expect(ContactController).toBeDefined();
  });
});

describe("#getContacts()", () => {
  it("should return an epty array when no contacts are available", done => {
    this.book
      .getContacts()
      .then(contacts => {
        expect(contacts.length).toBe(0);
        done();
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });

  it("should return an empty array of contacts when contacts are available", done => {
    this.book
      .addContact("Alice", "001-101-1010", "alice@example.com")
      .then(() => {
        this.book.getContacts().then(contacts => {
          expect(contacts.length).toBe(1);
          done();
        });
      })
      .catch(err => {
        console.log(err);
        done();
      });
  });
});
