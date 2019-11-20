var getblogs = require('../../models/Blog');

var getmeetups = require('../../models/Meetups');



module.exports = function(app){
    // root aka home route
    app.get('/', (req, res) =>
    getblogs.findAll()
    .then(blogs =>
    {
        console.log('im here');
        res.render('index', { layout: 'landing',
        blogs
     });
    //  .then(meetups => 
    //     {
    //         console.log("im here at meets");
    //         res.render('index', {
    //             layout: "landing",
    //             meetups
    //         });
    //     })
    //     console.log('im here now');
    })
    .catch(err => console.log(err)));


}
