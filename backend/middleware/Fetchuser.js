const jwt = require('jsonwebtoken');
const JWT_SECRET = "darshan is good body";

const Fetchuser=(req,res,next)=>
    {
       //Get the user from the jwt token and add id to req object
       const token=req.header('auth-token');
       if(!token)
        {
            res.status(401).send({error:"please authenticate using a valid token"});
        }
        try{
        const data=jwt.verify(token,JWT_SECRET);
        req.user=data.user;
        }
        catch(error)
        {
            res.send(401).send({error:"please authenticate using a valid token"});
        }
        next();
    }




module.exports=Fetchuser;