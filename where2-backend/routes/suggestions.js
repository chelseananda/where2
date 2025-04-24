// integrated OpenAI API to suggest hangout points based on user vibe

//import the express framework to build web server routes easily
const express = require('express');

//creates the express router instance to define toute handlers separately
const router = express.Router();

//importing required classes from the OpenaPI Node.js SDK
const { Configuration, OpenAPI, default: OpenAI } = require('openai') 

//creating new openapi 
const Configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
});
//initializinf new openapi client
const openai = new OpenAIApi(configuration); 

router.post('/', async (req, res) => {
    const {vibe} = req.body
    try{
        const response = await openai.createChatCompleton({
            model: "gpt-4",
            messages: [
                {role : "system", content: "You suggest fun places for social meetups."},
                {role : "user", content: 'Suggest 5 hangout spots based on rhis vibe: ${vibe}'}
            ],
        });
        res.json({suggestions :response.data.choices[0].message.content });
    } catch (err) {
        resizeTo.status(500).json({error: err.message});
    }
})

module.exports = router;