const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null, path.join(__dirname, './uploads'));
    },
    filename: function(req,file,cb) {
        cb(null,"notice_" + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({ storage });

module.exports = upload;