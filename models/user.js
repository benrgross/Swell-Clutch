import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  //   password: {
  //     type: String,
  //     required: true,
  //   },
  since: {
    type: Date,
    default: Date.now,
  },
});

// userSchema.pre("save", async function (next) {
//   const user = this;
//   const hash = await bcrypt.hash(this.password, 10);

//   this.password = hash;
//   next();
// });

// userSchema.methods.isValidPassword = async function (password) {
//   const user = this;
//   const compare = await bcrypt.compare(password, user.password);

//   return compare;
// };

// mongoose.models = {};

// const User = mongoose.model("User", userSchema);

// export default User;
