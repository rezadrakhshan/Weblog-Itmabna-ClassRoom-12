import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import { checkFileType } from "../utils/fileFilter.js";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public"));
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function(req, file, cb) {
    checkFileType(file, cb);
  }
});
