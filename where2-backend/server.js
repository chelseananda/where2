const express = require("express"); //web framework for building API
const mongoose = require("mongoose"); //ODM for mongoose(letting us to interact with DB easily)
const dotenv = require("dotenv"); //tp load environment variables from .env file
const cors = require("cors");

dotenv.config(); //Load variables from .env 

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware to parse JSON bodies from requests
app.use(express.json());

//Middleware to allow cross-origin requests
app.use(cors());

//Basic test route to check if server is working
app.get("/", (req, res) => {
    res.send("Where2  backend is running");
    });

// Connect to MongoDB Atlas using MONGO_URI from .env
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB Connected Successfully");
        //start the server and listen on the specified port (5000)
        app.listen(PORT, () =>
        console.log(`Server is running on port ${PORT}`)
        );
    })
    .catch((err) => {
        console.error("MangodB connection failed:", err);
});

const suggestionsRoutes = require("./routes/suggestions");
app.use("/api/suggestions", suggestionsRoutes);

