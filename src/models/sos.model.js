import mongoose from '../database/mongoose.db';

import UserSchema from './users.model';

const { Schema } = mongoose;

const SosModel = {};

const sosSchema = new Schema({
  location: String,
  userId: { id: { type: Schema.Types.ObjectId, ref: 'Users' } },
  description: String,
  pictures: [{ type: Buffer }],
  reportType: { type: String, possibleValues: ['sos', 'eyewitness'] },
  creationTime: { type: Date, default: Date.now() }
});

const Sos = mongoose.model('Sos', sosSchema);

// SosModel.Sos = Sos;

sosSchema.set('toJSON', { virtuals: true });

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

SosModel.findById = (id) =>  new Promise((resolve, reject) => {
  UserSchema.findById(id).then((result) => {
    resolve(result);
  });
});

export default SosModel;
