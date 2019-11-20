var Blog = require('../../models/Blog');


module.exports = function (app) {

// Get blog 
app.get('/blogs', (req, res) => 
Blog.findAll()
    .then(blogs => { 
        console.log(blogs)
        res.render('blogs',  { layout: 'landing', 
        blogs

        });
    })
    .catch(err => console.log(err)));


// Add a new blog
app.get('/addblog', (req, res) => {
var data = {
    bookTitle:  "GAVIN",
    bookAuthor:  "veger sinuhe",
    genre: "historical fiction",
    firstName: "joseph",
    lastName: "henry",
    readingLevel: "SW",
    blogging: "HEY! I read this book entirely and from begin to end, I LOVED IT! I recommend this book to anyone! CHOW!"
   
}

let { bookTitle, bookAuthor, genre,firstName, lastName, readingLevel, blogging }  = data;


// Insert INTO TABLE
Blog.create({
    bookTitle, 
    bookAuthor, 
    genre,
    firstName, 
    lastName, 
    readingLevel,
    blogging
})
.then(blogs => res.redirect('/index'))
.catch(err => console.log(err));
});

}