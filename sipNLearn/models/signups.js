var Sequelize = require("sequelize");
var db = require("../config/database");
/////////////////////////////////////
// Sign up
// //////////////////////////////////

var Signups = db.define("Signups", {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    readingLevel: {
      type: Sequelize.STRING
    },
    bookTitle: {
      type: Sequelize.STRING
    },
    bookAuthor: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    },
    readingStatus: {
      type: Sequelize.STRING
    }
  });


module.exports = Signups;