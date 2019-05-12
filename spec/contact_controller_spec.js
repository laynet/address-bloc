const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {
  beforeEach(done => {
    this.book = new ContactController();

    //#1
    sequelize
      .sync({ force: true })
      .then(res => {
        done();
      })
      .catch(err => {
        done();
      });
  });

  //#2
  describe("#addContact()", () => {
    it("should add a single contact into the book", () => {
      expect(this.book.contact.length).toBe(0);
      this.book.addContact("Alice", "001-101-1010");
      expect(this.book.contact.length).toBe(1);
    });
  });
  it("should be defined", () => {
    expect(ContactController).toBeDefined();
  });
});
