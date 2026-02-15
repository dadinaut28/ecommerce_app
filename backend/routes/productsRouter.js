const { Router } = require("express");
const multer = require("multer");
const isAdmin = require("../controllers/isAdmin");
const {
  getProducts,
  postNewProduct,
  getProduct,
  deleteProduct,
  patchProduct,
} = require("../controllers/productsController");

const productsRouter = new Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

productsRouter.get("/", getProducts);
productsRouter.post("/", isAdmin, upload.single("image"), postNewProduct);
productsRouter.get("/:id", getProduct);
productsRouter.delete("/:id", isAdmin, deleteProduct);
productsRouter.patch("/:id", isAdmin, upload.single("image"), patchProduct);

module.exports = productsRouter;
