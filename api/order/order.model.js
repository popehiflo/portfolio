const { Schema, model } = require("mongoose");

const OrderSchema = new Schema(
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
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: Object,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Order', OrderSchema);
