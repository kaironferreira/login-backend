import { verify } from "jsonwebtoken";


export default async (req,res, next) => {
        const authHeader = req.headers.authorization;

        if(!authHeader){
            return res.status(401).json({Erro:"User not authorizated"})
        }

        const [, token] = authHeader.split(" ");

        try {
            const decoded = verify(token, "cd4eb1cc4bafa36187638f15edebb68c")
            return next();
        } catch (error) {
            return res.status(401).json({Erro:"Invalid token"})
        }
    }
