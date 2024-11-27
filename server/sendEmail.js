const express = require('express');
const nodemailer = require('nodemailer');


const sendEmail = (req, res) => {
    const { to, subject, message } = req.body;
   
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
        to: to,
        subject: subject,
        text: message
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

module.exports = sendEmail