const { Schema, model } = require("mongoose");

const ServiceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
    },
    duration: {
      type: String,
    },
    media: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      default: "ID DE QUIEN CREO EL SERVICIO",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Service', ServiceSchema);
