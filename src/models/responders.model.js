import mongoose from '../database/mongoose.db';

const { Schema } = mongoose;

const RespondersModel = {};

const responderSchema = new Schema({
  nameOfUnit: String,
  designation: String,
  state: String,
  city: String,
  location: String,
  emegencyNumber: String,
  email: String,
  password: String,
  passwordcheck: String,
  lat: String,
  lon: String
});

const Responder = mongoose.model('Responders', responderSchema);

RespondersModel.createResponder = (responderData) => {
  const responder = new Responder(responderData);
  return responder.save();
};

RespondersModel.getRespondersByLocation = (location) => {
  return Responder.find({location: location});
};

export default RespondersModel;