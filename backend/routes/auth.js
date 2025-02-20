const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "darshan is good body";
const Fetchuser=require("../middleware/Fetchuser");




//**Route 1
// create a user using :post "/api/auth/creatuser". doesnt require authorization
router.post('/creatuser', [

    body('name', 'enter the valid email').isLength({ min: 4 }),
    body('email', 'enter the valid name').isEmail(),
    body('password', 'enter the password with have minimum 5 character').isLength({ min: 5 })  //validation for the input

], async (req, res) => {

    // console.log(req.body);
    //const user=User(req.body);
    //user.save();
 let sucess=true;
    //requesting for the input
    //if there are errors,return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        sucess =false;
        return res.status(400).json({sucess:sucess, errors: errors.array() });
    }

    try {
        //check whether the user already exit are not 
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            sucess=false;
            return res.status(400).json({sucess:sucess, errors: "sorry a user with email alresd exit" })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        //creating the json of the user in databases
        user = await User.create(
            {
                name: req.body.name,
                email: req.body.email,
                password: secPass
            }
        )
   // or const {name,email}=req.body;

        //.then(user=>res.json(user))
        //.catch(err=>{console.log(err)
        //res.json({errors:"pleease enter unique value for email",message:err.message})

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        // res.json(user)
         sucess=true;
        res.json({sucess,authToken });



    } catch (error) {
        console.error(error.message)
        res.status(500).send("some error occured")
    }

})

//** Route 2
//authenticate a user using:post"/api/auth/login"-no login required
router.post('/login', [
    body('email', 'enter the valid name').isEmail(),
    body('password', 'password cannot be blank').exists() //validation for the input

], async (req, res) => {
    const errors = validationResult(req);
    let sucess=true;
    if (!errors.isEmpty()) {
        sucess=false;
        return res.status(400).json({sucess:sucess,errors: errors.array() });
        
    }
    const {email,password}=req.body;
    try{
    
        let user=await User.findOne({email});
        if(!user)
            {
                sucess=false;
                return res.status(400).json({sucess:sucess,error:"please try to login with correct credentials"});
            }
            const passordCompare=await bcrypt.compare(password,user.password);
            if(!passordCompare)
                {
                    sucess=false;
                    return res.status(400).json({sucess:sucess,error:"please try to login with correct credentials"});
                }
                const data = {
                    user: {
                        id: user.id
                    }
                }
                sucess=true;
        
                const authToken = jwt.sign(data, JWT_SECRET);
                // res.json(user)
                res.json({sucess:sucess, authToken:authToken });

    }
    catch(error)
    {
        console.error(error.message)
        res.status(500).send("some error occured in program")
    }
});

//** Route 3 :GEt logged in user details post:/api/auth/getuser : login required
router.post('/getuser',Fetchuser, async (req, res) => {

try {
    const userId=req.user.id;
    const user=await User.findById(userId).select("-password");
    res.json(user);


} catch (error) {
     console.error(error.message)
        res.status(500).send("some error occured in program")
}
})







module.exports = router