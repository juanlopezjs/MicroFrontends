module.exports = (app) => {
    console.log(app , "test")
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });
};