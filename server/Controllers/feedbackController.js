const asyncHandler = require("express-async-handler");
const Feedback = require("../Models/feedbackModel");


const userFeedback = asyncHandler( async(req,res)=>{
    const {name,feedback} = req.body;

    if(!name || !feedback){
        res.status(400);
        throw new Error("All Fields Are Not Empty")
    }

    try {
        const newFeedback = await Feedback.create({
            name,
            feedback
        })

        console.log(newFeedback);
        res.status(201).json({message : "Feedback Added"});
    } catch (error) {
        console.log(error);
        res.status(400).json("Failed To Add Feedback");
    }
})

const getAllFeedback = asyncHandler( async(req,res)=>{
    const allFeedback = await Feedback.find({});
    console.log("check",allFeedback)
    res.status(200).send(allFeedback);
})

module.exports = {userFeedback,getAllFeedback};