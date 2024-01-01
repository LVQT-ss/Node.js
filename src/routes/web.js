import Express from "express";
import homeController from "../controllers/homeController";
import multer from 'multer';
import path from 'path';
var appRoot = require('app-root-path');
let router = Express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log('check approot:', appRoot)
        cb(null, appRoot + "/src/public/image/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });



let uploadMultipleFiles = multer({ storage: storage, fileFilter: imageFilter }).array('multiple_images', 3);


const initWebRoute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:id', homeController.getDetailPage)
    // CRUD 
    router.post('/create-new-user', homeController.createNewUser)
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.postUpdateUser);

    router.get('/upload', homeController.getUploadFilePage);
    router.post('/upload-profile-pic', upload.single('profile_pic'), homeController.handleUploadFile)
    router.post('/upload-multiple-images', (req, res, next) => {
        uploadMultipleFiles(req, res, (err) => {
            if (err instanceof multer.MulterError && err.code === "LIMIT_UNEXPECTED_FILE") {
                // handle multer file limit error here
                res.send('LIMIT_UNEXPECTED_FILE')
            } else if (err) {
                res.send(err)
            }

            else {
                // make sure to call next() if all was well
                next();
            }
        })
    }, homeController.handleUploadMultipleFiles)

    app.get('/about', (req, res) => {
        res.send(`I'm Eric!`);
    });

    return app.use('/', router)

}

module.exports = initWebRoute;