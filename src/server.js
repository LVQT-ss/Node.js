const express = require('express');
const configViewEngine = require('./configs/viewEngine');
import initWebRoute from './routes/web';

// import connection from './configs/connectDB';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up view engine 

configViewEngine(app);
initWebRoute(app)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
