const express = require('express');
const nodemailer = require('nodemailer');


const Email = (req, res) => {
    const { userEmail } = req.body;
   
    const transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port : 465,
        secure : true,
        auth : {
            user : process.env.from,
            pass : process.env.pass
        }
    });


    const mailOptions = {
        from: process.env.from,
        to: userEmail.email,
        subject: "New Recipe Details - Happy Cooking",
        text: `Dish Name: ${userEmail.recipe.dishname}\n
               Calories: ${userEmail.recipe.calories}\n
               Prep Time: ${userEmail.recipe.preptime}\n
               Cook Time: ${userEmail.recipe.cooktime}\n
               Servings: ${userEmail.recipe.servings}\n
               Ingredient 1: ${userEmail.recipe.ingredient1}\n
               Ingredient 2: ${userEmail.recipe.ingredient2}\n
               Ingredient 3: ${userEmail.recipe.ingredient3}\n
               Ingredient 4: ${userEmail.recipe.ingredient4}\n
               Ingredient 5: ${userEmail.recipe.ingredient5}\n
               Instructions: ${userEmail.recipe.instructions}\n
               Cuisine: ${userEmail.recipe.cuisine}\n
               Dietary: ${userEmail.recipe.dietary}\n
               Notes: ${userEmail.recipe.notes}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent');
        }
    });
};

module.exports = Email