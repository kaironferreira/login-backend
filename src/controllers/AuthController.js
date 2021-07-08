import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import User from '../schemes/User';

export default class AuthController {
    async authenticate (req, res){
        const {username, password} = req.body;

        const user = await User.findOne({username});

        if(!user){
            return res.status(401).json({Error:"User not found"})
        }

        const passwordIsCorrect = await compare(password, user.password);

        if(!passwordIsCorrect){
            return res.status(401).json({Error:"Password incorrect"})
        }

        const token = jwt.sign({}, "cd4eb1cc4bafa36187638f15edebb68c", {
            subject: new String(user._id), 
            expiresIn: "1d"
        });

        return res.json({
            token,
            user,
        });

    }
}