var Sequelize = require("sequelize");
var db = require("../config/database");



// //////////////////////////////////
// Blogs
// //////////////////////////////////

var Blogs = db.define("blogs", {
  bookTitle: {
    type: Sequelize.STRING
  },
  bookAuthor: {
    type: Sequelize.STRING
  },
  genre: {
    type: Sequelize.STRING
  },
  readingLevel: {
    type: Sequelize.STRING
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  blogging: {
    type: Sequelize.STRING
  }
  
});

module.exports = Blogs;