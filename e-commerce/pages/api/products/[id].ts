import { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../models/Product";
import dbConnect from "../../../util/dbConnet";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // connect to mongodb
  dbConnect();
  const {
    method,
    query,
  } = req;
  console.log(query)

  if (method == "GET") {
    try {
      const product = await Product.findById(query.id);
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
  }
};
