
module.exports = function (app){

//sign up
app.get('/signups', (req, res) => {
    res.render('signups', { layout: 'landing' })
});

};
