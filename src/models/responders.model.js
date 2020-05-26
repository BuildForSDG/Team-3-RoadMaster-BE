import mongoose from '../database/mongoose.db';

const { Schema } = mongoose;

const RespondersModel = {};

const responderSchema = new Schema({
  nameOfUnit: { type: String, unique: true, required: true },
  designation: String,
  state: String,
  city: String,
  emegencyNumber: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true }
});

const Responder = mongoose.model('Responders', responderSchema);

RespondersModel.createResponder = (responderData) => {
  const responder = new Responder(responderData);
  return responder.save();
};

RespondersModel.getRespondersByLocation = (location) => new Promise((resolve) => {
  Responder.findOne({ location }).then((result) => {
    resolve(result);
  });
});

export default RespondersModel;
