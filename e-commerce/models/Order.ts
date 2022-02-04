import { Schema, model, models } from "mongoose";

export enum METHOD {
  PAYPAL,
  CASH,
}

export interface PRODUCT {
  customer: string;
  address: string;
  total: number;
  status: number;
  method: METHOD;
}

const OrderSchema = new Schema<PRODUCT>(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    method: {
      enum: METHOD,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.Order || model("Order", OrderSchema);
