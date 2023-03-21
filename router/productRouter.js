import express from "express";
import { deleteProducts, getProducts, updateProduct } from "../service/productService.js";
import multer from "multer";
import { nanoid } from "nanoid";
import { uploadImage } from "../service/uploadService.js";

const Product = express.Router();

Product.get("/product", async (req, res) => {
  let data = await getProducts();
  if (data) {
    res.status(200).send(data)
  }
});

const storage = multer.diskStorage({
  destination: (reg, file, cb) => {
    cb(null, "/tmp")
  },
  filename: (req, file, cb) => {
    const ext = extractExtension(file.originalname);
    const newName = nanoid() + "." + ext;
    cb(null, newName);
  },
})

const extractExtension = (name) => {
  const splitted = name.split(".");
  return splitted[splitted.length - 1]
};

const upload = multer({ storage: storage })

Product.post('/image', upload.single("image"), async (req, res) => {
  res.status(200).send(await uploadImage(req.file))
})

Product.put('/product/:_id', async (req, res) => {
  let object = { id: req.params._id, data: req.body }
  console.log("this ", req)
  let result = await updateProduct(object)
  res.status(200).send(result)
})

Product.delete('/product/:_id', async (req, res) => {
  let id = req.params._id
  let result = await deleteProducts(id)
  res.status(200).send(result)
  console.log(id)
})

export default Product;
