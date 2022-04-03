const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    services: [
      {
        serviceId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      }
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Cart', CartSchema);
