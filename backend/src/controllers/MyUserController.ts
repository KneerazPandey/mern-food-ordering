import { NextFunction, Request, Response } from "express";
import User from "../models/user";


const createCurrentUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    // 1. Check if the user exists
    // 2. create the user if doesn't exists
    // 3. return the user object to the calling client
    try {
        const { auth0Id, email } = req.body;
        const existingUser = await User.findOne({ auth0Id });
        if (existingUser) {
            return res.status(200).send(existingUser.toObject());
        }
        const newUser = new User({auth0Id, email});
        await newUser.save();
        res.status(201).send(newUser.toObject());
    }catch(error) {
        console.log(error);
        res.status(500).json({message: 'Error creating user'});
    }
}


export default {
    createCurrentUser,
};