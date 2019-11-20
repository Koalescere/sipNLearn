// var express = require('express');
// var router = express.Router();
// var db = require('../config/database');
// var Book = require('../models/BoozyBooks');

// // Get Sign Up
// router.get('/', (req, res) => 
// Book.findAll()
//     .then(signups => { 
//         res.render('signups', {
//             signups
//         });
//     })
//     .catch(err => console.log(err)));

// // Get Chapterbooks List
// router.get('/', (req, res) => 
// Book.findAll()
//     .then(chapterbooks => { 
//         // console.log(chapterbooks);
//         // res.sendStatus(200);

//         res.render('chapterbooks', {
//             chapterbooks
//     });
//  })
//     .catch(err => console.log(err)));

// // Get sitewords List
// router.get('/', (req, res) => 
// Book.findAll()
//     .then(sitewords => { 
//         res.render('sitewords', {
//             sitewords

// });
// })
//     .catch(err => console.log(err)));




// // Add a new book
// router.get('/add', (req, res) => {
// var data = {
//     firstName: "joseph",
//     lastName: "henry",
//     email: "j.henry@gmail.com",
//     readingLevel: "CB",
//     bookTitle:  "the engine",
//     bookAuthor:  "veger sinuhe",
//     genre: "historical fiction",
//     readingStatus: "soon_to_complete"
// }

// let { firstName, lastName, email, readingLevel, bookTitle, bookAuthor, genre, readingStatus} = data;


// // Insert INTO TABLE
// Book.create({
//     firstName, 
//     lastName, 
//     email, 
//     readingLevel, 
//     bookTitle, 
//     bookAuthor, 
//     genre, 
//     readingStatus

// })
// .then(chapterbooks => res.redirect('/chapterbooks'))
// .catch(err => console.log(err));
// });


// router.get('/', (req, res) => 
// Book.findAll()
// .then(sitewordsDB => { 
//     console.log(sitewordsDB);
// res.sendStatus(200);
// })
// .catch(err => console.log(err)));

// module.exports = router;