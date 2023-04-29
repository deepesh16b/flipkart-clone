import User from '../model/user-schema.js';

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}

export const userSignup = async (request, response) => {
    try {
      console.log("before find, inside user control");
        const exist = await User.findOne({ email: request.body.email });
        if(exist) {
          console.log("before find, inside user control");
            return response.status(401).json({ message: 'User already exist'});
        }
        console.log(" not exist user, inside user control");
        const user = request.body;
        const newUser = new User(user);
        console.log("new user created, inside user control");
        await newUser.save();
        response.status(200).json({ message: user });
        console.log("saved ,  inside user control");
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export default userSignup;
