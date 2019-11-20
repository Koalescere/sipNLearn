module.exports = function (app){

// home with user
app.get('/dashboard', (req, res) => {
    res.render('index', { layout: 'landing' })
});

};