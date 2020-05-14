import mongoose from '../database/mongoose.db'

const { Schema } = mongoose;

const UserModel = {}

const userSchema = new Schema({
  userId: String,
  age: Number,
  bloodType: String,
  genotype: String,
  nextofkinNum: String,
  emergencyNum: String,
  knownIllnesses: [{type: String}],
  state: String,
  city: String,
  lga: String,
  residentialAdd: String

});

const User = mongoose.model('Users', userSchema);

userSchema.set('toJSON', { virtuals:true })

UserModel.createUser = (userData) => {
  const user = new User(userData);
  return user.save();
};