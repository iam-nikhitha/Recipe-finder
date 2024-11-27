const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Auth = require('../Models/authModel');
const {body} = require('express-validator');

const registerModule = asyncHandler( async (req,res) => {
    const {name,email,password,file} = req.body;

    body("name").isString().withMessage("Name is Not Valid");
    body("email").isEmail().withMessage("Email is Not Valid");
    body("password").isString().withMessage("Password is Not Valid");
    body("file").isString().withMessage("File is Not Valid");

    try {
        const user = await Auth.findOne({email});

        if(user){
            res.status(400)
            throw new Error('User Already Exists');
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const createUser = await Auth.create({
            name,
            email,
            file,
            password : hashedPassword,
        });

        console.log(createUser);
        res.status(201).json({message : "User Registered SuccessFully"})
    } catch (error) {
        res.status(404).json({message : "User Already Exists"})
        console.log(error);
        process.exit(1);
    }
});



const loginModule = asyncHandler( async (req,res) => {
    const {email,password} = req.body;

    body("name").isString().withMessage("Name is Not Valid");
    body("email").isEmail().withMessage("Email is Not Valid");
    body("password").isString().withMessage("Password is Not Valid");

    try {
        const user = await Auth.findOne({email});

        if(!user){
            res.status(400)
            throw new Error('User Not Found');
        }

        if(user && await bcrypt.compare(password,user.password)){
            let accessToken = jwt.sign(
            {
                user : email
            },
            process.env.JWT_TOKEN_SECRET,
            {expiresIn : '1d'}
        )

        console.log("Token : ", accessToken);
        res.status(200).json({accessToken,email});
        }
    } catch (error) {
        res.status(404).json({message : "User Not Found"})
        console.log(error);
        process.exit(1);
    }
});


module.exports = {registerModule,loginModule};