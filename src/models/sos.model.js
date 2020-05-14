import mongoose from '../database/mongoose.db';

const { Schema } = mongoose;

const SosModel = {};

const sosSchema = new Schema({
  location: String,
  userId: Number
});

const Sos = mongoose.model('Sos', sosSchema);

sosSchema.set('toJSON', { virtuals: true })
