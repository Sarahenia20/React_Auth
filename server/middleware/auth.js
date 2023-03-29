import jwt from 'jsonwebtoken';
//import ENV from '../config.js'

/** auth middleware */
export default async function Auth(req, res, next){
    let JWT_SECRET  ="cd56abad4582792fad4fbc375fa899e036d36df1190cab4334c6dba1c5ff0271"
    try {
        
        // access authorize header to validate request
        const token = req.headers.authorization.split("")[1];

        // retrive the user details fo the logged in user
        const decodedToken = await jwt.verify(token, JWT_SECRET);

        req.user = decodedToken;

        next()

    } catch (error) {
        res.status(401).json({ error : "Authentication Failed!"})
    }
}


export function localVariables(req, res, next){
    req.app.locals = {
        OTP : null,
        resetSession : false
    }
    next()
}
