import dbConnect from "../../../util/dbConnet";
import Order from "../../../models/Order";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    method,
    query: { id },
  } = req;
  await dbConnect();
  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  } else if (method === "PUT") {
    const order = await Order.findByIdAndUpdate(id, req.body,{
      new: true
    })
    res.status(200).json(order)
  } else if (method === "DELETE") {
  }
};

export default handler;