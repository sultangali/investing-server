import Product from "../model/Product.js";

export const all = async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
