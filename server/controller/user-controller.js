import User from "../model/user-schema.js";

export const userLogIn = async (request, response) => {
  try {
    console.log(request.body);
    let user = await User.findOne({
      email: request.body.email,
      password: request.body.password,
    });
    if (user) {
      console.log('user found in db');
      return response.status(200).json({ data: user });
    } else {
      console.log('user NOT found in db');
      return response.status(401).json("Invalid Login");
    }
  } catch (error) {
    console.log('Error found in db while checking login');
    response.status(500).json("Error: ", error.message);
  }
};

export const userSignup = async (request, response) => {
  try {
    const exist = await User.findOne({ email: request.body.email });
    if (exist) {
      return response.status(401).json({ message: "User already exist" });
    }
    const user = request.body;
    const newUser = new User(user);
    await newUser.save();
    response.status(200).json({ message: user });
    console.log("new user created, inside user-controler.js");
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export default userSignup;
