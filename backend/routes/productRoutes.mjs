import  express  from "express";
import asyncHandler from "../middleware/asyncHandler.mjs";
import Product from "../models/productModel.mjs";
const router = express.Router();

router.get('/product', asyncHandler(async(req, res) => {
 const products = await Product.find({})
  res.json(products);
}));

router.get('/product/:id',asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if(product){
    res.json(product);
  }else{
  res.send(404)
  throw new Error("Prodcuct not found")
  }
}));

export default router;