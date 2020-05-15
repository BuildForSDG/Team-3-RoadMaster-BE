import mongoose from '../database/mongoose.db';

const { Schema } = mongoose;

const SosModel = {};

const sosSchema = new Schema({
  location: String,
  userId: Number,
  updated: { type: Date, default: Date.now() }
});

const Sos = mongoose.model('Sos', sosSchema);

sosSchema.set('toJSON', { virtuals: true })

SosModel.createSos = (sosDetails) => {
  const sos = new Sos(sosDetails);
  return sos.save();
};

SosModel.list = (perPage, page) => new Promise((resolve, reject) => {
  Sos.find().limit(perPage).skip(perPage * page).exec((err, sos) => {
    if (err) {
      reject(err);
    } else {
      resolve(sos);
    }
  });
});

export default SosModel;
