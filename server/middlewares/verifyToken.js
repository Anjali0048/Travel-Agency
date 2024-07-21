import jwt from "jsonwebtoken";
import { createError } from "./error.js";

// Middleware to verify the token
export const verifyToken = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(`This is the cookie of login: ${req.cookies.jwt}`);
    
    if (!token) {
        return next(createError(401, "You are not authenticated"));
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        if (err) {
            return next(createError(403, "Token is not valid"));
        }
        req.user = user;
        console.log("Decoded user from token:", user);
        next();
    });
};

// Middleware to verify if the user is authorized
export const verifyUser = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if (err) return next(err);

        if (req.user.id === req.params.id || req.user.isAdmin) {
            console.log("User is authorized:", req.user);
            next();
        } else {
            return next(createError(403, "You are not authorized user"));
        }
    });
};

// Middleware to verify if the user is an admin
export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if (err) return next(err);
        if (req.user.isAdmin) {
            console.log("User is admin:", req.user);
            next();
        } else {
            return next(createError(403, "You are not authorized admin"));
        }
    });
};
