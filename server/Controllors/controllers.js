
const UserTable = require('../DataBase/userControllores')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.Login = async (req , res , next) => {
        const {email , password} = req.body;
        const user = await UserTable.findOne({email})
        const userDate = {
            id: user._id,
            name: user.name,
            email: user.email,
           password: user.password
        }
        const token = jwt.sign(userDate , process.env.JWT_SECRET)
       try {
        if(!user){
            res.status(403).json({message: "your email or your password inccorect"})
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({ message: "Your email or password is incorrect" });
        }
        res.status(200).json({message:"your are login is done", Data: {
            token
        }})
       
       } catch (next) {
    
       }

  
}
exports.Resgiter = async (req , res , next) => {
    const {name , email , password} = req.body ;
    const user =  UserTable({
        name,
        email,
        password: bcrypt.hashSync(password , 8)
    })
      
    
   try {
    await user.save();
    res.status(200).json({message: "The New User Registered"})
    
   } catch (next) {
  
   }
}

exports.usersData = async (req , res , next) => {
    try {
        const users = await UserTable.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users' });
    }
}

exports.Profil = async (req, res, next) => {
    try {
        // Access user information from req object set by verifyToken middleware
        const userId = req.userId;

        // Fetch user data from database using userId
        const user = await UserTable.findById(userId);

        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send({
           
            email: user.email,
            name: user.name,
            password: user.password,
            // Add other user data you want to send back
        });
    } catch (error) {
        res.status(500).send({ message: 'Failed to retrieve user data' });
    }
}
// Controller function to handle edit profile request
exports.editProfile = async (req, res, next) => {
    try {
        const userId = req.userId; // Get user ID from JWT token
        const { name, email, password } = req.body; // Updated user information

        // Update user record in the database
        await UserTable.findByIdAndUpdate(userId, { name, email, password });

        res.status(200).json({ message: 'User profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user profile' });
    }
};
