// require db
var Blog = require("../models/Blog")
var Signups = require("../models/Signups")

module.exports = function(app){
    
    //sign up
    app.post("/signups", (req, res) => {

    // Take the request...
    var form = req.body;
    console.log(req.body);

                        // Create a routeName

                        // Using a RegEx Pattern to remove spaces from character.name
                        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
                        // var routeName = form.name.replace(/\s+/g, "").toLowerCase();

                        // Then add the character to the database using sequelize
    Signups.create({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      readingLevel: form.readingLevel,
      bookTitle: form.bookTitle,
      bookAuthor: form.bookAuthor,
      genre: form.genre,
      readingStatus: form.readingStatus,
    });

    res.status(204).end();
  });

    // home with user
    app.get('/dashboard', (req, res) => {
        res.render('index', { layout: 'landing' })
    });

    //user books
    app.get('/api/user-book', (req, res) => {
        // render index with user data
        res.render('dashboard', { layout: 'landing' })
    });

    // // blog
    // app.get('/user-blog', (req, res) => {
    //     res.render('index', { layout: 'landing' })
    // });

    // meetups
    app.get('/meetup', (req, res) => {
        res.render('index', { layout: 'landing' })
    });
    



}