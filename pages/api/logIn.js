import connectDB from "../../middleware/mongodb";
import User from "../../models/user";

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Check if name, email or password is provided
    const { email, password } = req.body;
    if (email && password) {
      try {
        const user = await User.findOne({ email });
        console.log(user);

        if (!user) {
          return res.status(422).send(error);
        }

        const validate = await user.isValidPassword(password);
        console.log(validate);
        if (!validate) {
          return res.status(422).send("password valid user");
        }
        res.status(200).send("logged In");
      } catch (error) {
        return res.status(500).send(error.message);
      }
    } else {
      res.status(422).send("data_incomplete");
    }
  } else {
    res.status(422).send("req_method_not_supported");
  }
};

export default connectDB(handler);
