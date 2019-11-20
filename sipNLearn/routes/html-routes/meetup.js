



var meetUP = require('../../models/meetups');


module.exports = function (app) {

// Get blog 
app.get('/meetups', (req, res) => 
meetUP.findAll()
    .then(meetups => { 
        console.log(meetups)
        res.render('meetups',  { layout: 'landing', 
        meetups

        });
    })
    .catch(err => console.log(err)));


// Add a new meetup
app.get('/addmeet', (req, res) => {
var data = {
   firstName: "joey",
   lastName: "jame",
   email: "yoyoyo@yuurrrr.com",
   readingLevel: "SW",
   bookTitle: "Hello there",
   bookAuthor: "Sting",
   genre: "realistic-fiction",
   readingStatus: "soon_to_complete"
   
}

let { firstName, lastName, email, readingLevel, bookTitle, bookAuthor, genre, readingStatus }  = data;


// Insert INTO TABLE
meetUP.create({
    firstName, 
    lastName, 
    email, 
    readingLevel,
    bookTitle, 
    bookAuthor, 
    genre, 
    readingStatus
})
.then(meetups => res.redirect('/meetups'))
.catch(err => console.log(err));
});

}