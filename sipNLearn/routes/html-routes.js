

module.exports = function(app){
    console.log('im here 1');
// home root route
require('./html-routes/home-route')
(app)

// sign route
require('./html-routes/signup')
(app)

// home with user route
require('./html-routes/userHome')
(app)

//blog route
require('./html-routes/blog')
(app)

//meetup route
require('./html-routes/meetup')
(app)


};