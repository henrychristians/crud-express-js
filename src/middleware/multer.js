const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img'); 
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const fileName = file.originalname;
        cb(null, `${timestamp}-${fileName}`) 
    }
})

const upload = multer({
    storage: storage,
    limits: {
        // Bytes | Kb | Mb
        fileSize: 3 * 1000 * 1000
    }
});

module.exports = upload;