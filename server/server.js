import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from  "./routes/users.js";
// import a module userRoutes from the ./routes/users.js file, which defines routes that can be used to handle HTTP POST requests to the /api URL path.
const app =express();

// app.use(express.json());
// app.use(cors());


app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// In our application, the posts.js module is defining routes that can be
//  used to handle HTTP POST requests to the /posts URL path. 
//  When a POST request is received at this URL path, the server 
//  will use the appropriate route defined in the posts.js module to 
//  process the request and send a response back to the client.

app.get("/", (req,res)=> {
    res.status(201).json("home get request");
})

app.use("/api",userRoutes);   //every route starts with /api endpoint


const CONNECTION_URL = "mongodb+srv://mjavadi:8241@easy-meet.kdqgdfa.mongodb.net/?retryWrites=true&w=majority"

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT,()=> console.log(`server running on port ${PORT}`)))
.catch((error) => console.log(error.message));

