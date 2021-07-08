import User from '../schemes/User';
import bcrypt from 'bcryptjs';

export default class UserController{
    async create(req, res){
        const {name, email, username, password} = req.body;

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            username,
            password:passwordHash,
        });

        return res.json(user);
    }

    async index (req, res) {
        const users = await User.find();

        res.json(users);
    }
}