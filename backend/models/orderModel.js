const mongoose =require("mongoose");

const orderSchema = new mongoose.Schema({

    orderItems: [
        {
          name: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
          image: {
            type: String,
            required: true,
          },
          product: {
            type: mongoose.Schema.ObjectId,
            required: true,
          },
        },
      ],


})