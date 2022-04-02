import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
import dbConnect from "../../../util/dbConnet";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // connect to mongodb
  await dbConnect();
  const {
    method,
    query: { id },
  } = req;
  // console.log(id + 'yeah we got it')

  if (method == "GET") {
    try {
      const product = await Product.findById(id);
      // console.log(product)
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  } else if (method == "PUT") {
    try {
      //   console.log(req.body);
      //   const newProduct = new Product(req.body);
      //   const product = await newProduct.save(newProduct);

      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json("there is some error occurs!\n" + err);
    }
  } else if (method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("product has been deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
