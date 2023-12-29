import Express from "express";
import homeController from "../controllers/homeController"
let router = Express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);

    app.get('/about', (req, res) => {
        res.send(`I'm Eric!`);
    });

    return app.use('/', router)

}

module.exports = initWebRoute;