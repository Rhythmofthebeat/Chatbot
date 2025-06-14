import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";

export const createToken = (id: string, email:string, expiresIn: string) =>{
    const payload = {id, email};
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(payload, process.env.JWT_SECRET, { 
        expiresIn : "7d",

    });
    return token;
};
export const verifyToken =  async (
    req: Request, 
    res:Response, 
    next: NextFunction) => {
        const token = req.signedCookies[`${COOKIE_NAME}`];
        if(!token || token.trim() === " "){
            return res.status(401).json ({message: "Token Not Receieved"});
        }
        return new Promise <void>((resolve,reject) => {
            return jwt.verify(token, process.env.JWT_SECRET, (err, success) =>{
                if(err){
                    reject(err.message);
                    return res.status(401).json({message: "Token Expired"})

                }else{
                    console.log("Token Verification Successful");
                    resolve();
                    //send data and move on to next middleware
                    res.locals.jwtData =  success;
                    return next();


                }

         });

    });
};