const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  mobileNumber: { type: Number, require: true },
  addressType: { type: String, require: true },
  houseNumber: { type: String, require: true },
  city: { type: String, require: true },
  state: { type: String, require: true },
  pinCode: { type: Number, require: true },
  street: { type: String, require: true },
  neighborhood: { type: String, require: true },
  landmark: { type: String, require: true },
});

const addressModal = mongoose.model("address", addressSchema);

module.exports = addressModal;
