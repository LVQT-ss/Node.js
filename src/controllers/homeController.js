const getHomepage = (req, res) => {
    //process data 
    //call model
    res.send('Hello World! this is quoc thinh mới tải nodemon');
}
const getABC = (req, res) => {
    res.render('sample.ejs');
};
const getFullname = (req, res) => {
    res.send('<h1>thinh le viet quoc</h1>');
};
module.exports = {
    getHomepage,
    getABC,
    getFullname,
}