import multer from "multer";
import path from "path";

const storage = multer.diskStorage({});

//    destination: function (req, file, cb) {
//     cb(null, 'uploads/'); // make sure 'uploads/' folder exists
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
  





const upload = multer({storage:storage})

export default upload;