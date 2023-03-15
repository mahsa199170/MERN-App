https://www.restapitutorial.com/httpstatuscodes.html --> the http requests codes

MERN:
MONGODB
EXPRESS
REACT
NODEJS

-NodeJs allows javascript to run outside the browser in places like a  webserver.
-Express for making the webservers

to start the project we need:

First set up mongodb in mongodb website and create a database in our acount


(A) CREATE BACKEND, EXPRESS/NODEJS:

dependencies we need to install in backend:
npm install cors express mongodb nodemon


///////////////////////////////////////////////////////////////////////////////////////////
cors :


CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to prevent web pages from making requests to a different domain than the one that served the page. When a web page tries to access resources from a different domain, the browser sends a CORS request to the domain that hosts the resource to check whether the request is allowed or not.

 When you are building a web application with Node.js, you may need to allow other web applications or servers to access your resources. CORS is a mechanism that allows you to specify which origins are allowed to access your resources. You can use a middleware like cors in Node.js to enable CORS for your server. This will add the necessary headers to your HTTP responses to allow cross-origin requests from other browsers or servers.

In Node.js, CORS is a middleware that allows or blocks cross-origin requests based on the configuration set by the developer. It can be used to enable CORS for all routes or only for specific routes.

For example, let's say you have a Node.js server running on http://localhost:3000 and a frontend running on http://localhost:8000. If your frontend code tries to make an HTTP request to http://localhost:3000/api/users, the browser will block the request since it's coming from a different domain. To allow this request, you can configure the CORS middleware on the server to accept requests from http://localhost:8000.


Browsers restrict cross-origin requests by default for security reasons. However, sometimes it is necessary for web applications to make cross-origin requests to access resources from different domains. 

///////////////////////////////////////////////////////////////////////////////////////////

dotenv:

load environmental variables form a doten file in the process of dotenv. this makes developer simpler, so instead of setting environemtn variable son our development machine, they can be sorted in a .env file

Using dotenv allows you to create a .env file to store your sensitive information, which can be accessed by your Node.js application via process.env. This allows you to easily manage environment-specific configuration options, such as database connection strings, API keys, and other settings, without hardcoding them in your application code.



///////////////////////////////////////////////////////////////////////////////////////////

now lets jum to set the backend:

in server.js do the basic express codes

"update the package.json file and  add type:"module" to it to use ES6 import statement."


BODY-PARSER:

body-parser is a middleware for handling HTTP POST request body data in Express.js. It extracts the entire body portion of an incoming request stream and exposes it on req.body. The extracted data can be in JSON, raw text, URL-encoded, or in any other format.

bodyParser.json() is used to parse incoming JSON payloads, and bodyParser.urlencoded() is used to parse incoming URL-encoded payloads.

The bodyParser.json() middleware function parses the incoming request body as JSON and exposes the resulting object on req.body.
The resulting req.body object can then be accessed by subsequent middleware functions or route handlers in the application.

**** we need to put:
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
before app.use("/api",userRotes) otherwise we will get error in posting to databse
****

HTTP POST request:

HTTP POST is one of the methods used to send data to a server to create or update a resource identified by a URI (Uniform Resource Identifier).
When a client (such as a web browser or a mobile app) sends a POST request to a server, the server typically responds with a confirmation or a status code indicating whether the request was successful. The server can then use the data sent in the POST request to create or update a resource, such as a database record or a file on the server.


typically a POST request is sent from a client (e.g. a web browser or a mobile app) to a server. It is used to submit data to a server to create or update a resource. The server can then process the data and send a response back to the client.


(B)FRONT PART:

install dependencies: axios


(C)
Backend: install mongoose, nodemon,express,body-parser

***************************************
the code defines a CONNECTION_URL which points to a MongoDB instance.:

const CONNECTION_URL = "mongodb+srv://mjavadi:8241@easy-meet.kdqgdfa.mongodb.net/?
retryWrites=true&w=majority"   

***************************************
The value of the PORT constant is determined by the process.env.PORT environment variable, which is commonly used in cloud hosting platforms to dynamically assign a port for the server to listen on. If process.env.PORT is not defined, the PORT constant defaults to 5000.
So, when the server is started using app.listen(), it will listen for incoming requests on the port specified by the PORT constant:

const PORT = process.env.PORT || 5000;

 If the process.env.PORT environment variable is defined (which may happen if you're running the server on a cloud hosting platform like Heroku), the PORT constant will be set to its value. Otherwise, the PORT constant defaults to 5000.


 In a development environment, the process.env.PORT environment variable may not be defined, in which case the PORT constant will default to 5000. You can specify a different port number in the PORT constant if needed.

In a production environment, you would typically specify the port number as an environment variable when starting the server. This would allow you to use a different port number without modifying the source code of your application. For example, you could start the server with the following command to use port 8080:

PORT=8080 node app.js

This would set the PORT environment variable to 8080 for the duration of the node process, causing the server to listen on that port instead of the default 5000.


In a development environment, you may not need to use process.env.PORT to specify the port number that your server should listen on. Instead, you might hard-code a port number into your code, like const PORT = 3000.

However, in a production environment (i.e., when your application is deployed to a cloud hosting platform), the port number that your server should listen on might be assigned dynamically by the hosting platform. In this case, you would typically use process.env.PORT to access the port number that has been assigned to your server by the hosting platform.

By using process.env.PORT instead of hard-coding the port number in your code, you can ensure that your application can run on any port assigned by the hosting platform without requiring any modifications to your code.

***************************************
A development environment is a setup that allows software developers to write, test, and debug code for an application or system.

In the context of web development, a typical development environment might include a local computer running an operating system like Windows or macOS, a code editor or integrated development environment (IDE) like Visual Studio Code or Atom, and a local web server like Apache or Node.js.

Developers use this environment to write and test code locally before deploying it to a production environment, which is the live version of the application or system that end-users interact with.
***************************************

mongoose.connect() method is used to establish a connection to the MongoDB instance specified by the CONNECTION_URL. If the connection is successful, the server is started by calling app.listen() on the PORT. If there is an error connecting to the MongoDB instance, an error message is logged to the console:

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT,()=> console.log(`server running on port ${PORT}`)))
.catch((error) => console.log(error.message));


***************************************
MIDDLEWARE:

Middleware functions are executed sequentially in the order they are declared in the application code. They can be used to perform tasks such as logging, parsing request bodies, checking authentication, error handling, and more.

In our code, bodyParser.json() and bodyParser.urlencoded() are middleware functions that are used to parse incoming request bodies. cors() is another middleware function that is used to enable CORS. The app.use() method is used to apply these middleware functions to the application.

***************************************
 The limit option is used to limit the size of the request body to 30 megabytes, and the extended option allows for parsing of nested objects:

 app.use(bodyParser.json({limit: "30mb", extended: true}));
***************************************


(D):
 we connected our applixation to MongoDB database using mongoose.connect, now we can start creating routes for our backend application.(forexample for getting data from database and posting(creating) data tp database) in server folder, we create routes folder, inside that we create files such as users.js and inside this file we are going to have all the routes that have to do something with POST, 

***************************************
 QUESTION:

 IN THIS PART OF CODE:

 import express from "express" 

const router = express.Router();


 could we write :
import express from "express" 
 const app = express()  
 const router = app.Router()
 ?

No, we cannot use app.Router() to create a new router instance.

The Router() method is a method of the express module itself, not the app instance that is created using express(). When you create a new app instance using const app = express(), you can use the app instance to define routes and middleware for your application.

To create a new router instance, you should use the Router() method provided by the express module directly, as in const route = express.Router(). This creates a new router instance that you can use to define specific routes for handling requests in your application.
***************************************


till now the code in our routes/users.js for is:

import express from "express" ;

const router = express.Router();



// now we can start adding our routes

router.get("/ret", (req, res)=> {
    res.send("this works");


});


export default router;

When the server receives a GET request to the root URL path, it will execute the callback function passed as the second argument to router.get(). In this case, the callback function simply sends the string "this works" as the response to the client.

To clarify further, the req and res parameters in the callback function are short for "request" and "response", respectively. The req parameter represents the incoming HTTP request from the client, while the res parameter represents the server's response to send back to the client.

So in this case, res.send("this works") is sending the string "this works" as the HTTP response to the client that made the GET request.

*******************************
router.get("/ret", (req, res)=> {
    res.send("this works");


});

this line of code: the path is "/ret" and the function will be executed once someone visits localhost:5000/api/ret     
*******************************

now after create the router in users.js then we need to import it in our server.js
so in server.js we have :
import userRoutes from  "./routes/users.js";

now we need to use express middleware to connect this to our application

app.use("/api",userRoutes);

in this line of code we are setting the start path for all the routes inside users.js and that is /api

what this code does say that every route inside the users.js is going to start with /api
that means that this rout "/ret" inside our users.js [router.get("/ret", (req, res)=> {
    res.send("this works");] is not going to reach by localhost:5000/
it is reached by going to localhost:5000/api/ret , cause in our server.js  we added the prefic /api for all of routes  in our server.js

In the given code, puserRoutes is a middleware that is defined in a separate module/file called users.js in the routes folder. This middleware is responsible for handling the POST requests to the /api URL path.

When you use app.use("/api", userRoutes) in the main server.js file, it means that you are mounting this userRoutes middleware at the /api path in your application. This allows you to access the routes defined in the userRoutes middleware when a POST request is received at the /api URL path.

So, when a POST request is received at the /api path, the middleware will be triggered and it will handle the request by executing the appropriate route defined in the postRoutes module.

*******************************
QUESTION: what is handling post request
Handling a POST request means that the server receives data sent by the client, typically from a form submission, and then performs an action based on that data. For example, if a user submits a form with their name and email address, the server could take that data and store it in a database.

In web development, handling POST requests is one of the most common ways to create, update, or delete data on the server. This is typically done using a server-side programming language like Node.js or PHP, which can process the data sent by the client and interact with a database or other storage system.


*******************************
EXAMPLE TO UNDERSTAND BETTER:

a general flow of what happens when a user submits a form with input data:

The user inputs data into the form and submits it.
The browser sends a POST request to the server with the input data in the request body.
The server receives the POST request at the specified URL path, which is defined in the client-side code that sent the request.
The server checks if there is any middleware registered to handle requests at this URL path.
In our case, the middleware registered to handle requests at the "/api" URL path is the userRoutes module. The server forwards the request to this middleware.
The userRoutes middleware checks the HTTP method of the request, in this case, it's a POST request. Since the router defined in the userRoutes module doesn't have any routes defined for POST requests, it won't be able to handle the request. Instead, the request will be forwarded to the next middleware registered at the "/api" URL path, or an error will be thrown.
If there was no error, the bodyParser middleware will parse the request body and add it to the request object.
The next middleware registered at the "/api" URL path will handle the request. In this case, it's the router defined in the userRoutes module.
The router checks the URL path and HTTP method of the request to determine which route to use to handle the request. In this example, the router will match the request to the route defined as router.get("/ret", (req, res)=> { res.send("this works"); }); since it's a GET request to the "/api" URL path.
The router will execute the callback function defined for the matched route, which will send the response "this works" back to the client.
The server sends the response back to the client, and the client receives the response.


###double hek the first followng paragraph at the end to see if it is compatible with our code:

userRoutes router only handles GET requests to the "/ret" path and not POST requests. Therefore, if a POST request is sent to the "/api" path, it won't be able to handle it and the request will be forwarded to the next middleware in the chain, which in this case would be the bodyParser middleware. If there are no errors, the bodyParser middleware will parse the request body and add it to the request object. Then the request will be forwarded to the postRoutes router again, which will then be able to handle the request because it now has access to the request body.

#######

*****************************
POST AND GET REQUESTS:


GET request:

GET requests are used to retrieve data from a server.
They are typically used to retrieve web pages, images, and other resources from a server.
In a GET request, the parameters are passed in the URL query string. For example, if you wanted to search for a book with the title "The Great Gatsby", you would use a GET request with the URL: https://example.com/search?title=The%20Great%20Gatsby.
GET requests are considered "safe" because they do not modify data on the server.
POST request:

POST requests are used to submit data to a server to be processed.
They are typically used to submit forms or other data to a server.
In a POST request, the parameters are passed in the request body, rather than in the URL.
POST requests can modify data on the server, so they are considered "unsafe".
In general, you would use a GET request to retrieve data from a server, and a POST request to submit data to a server. However, there may be other cases where you would use one or the other depending on the specific requirements of your application.

**The server receives the request and passes it to the appropriate middleware. If the request is a POST request, the server may use middleware such as body-parser to extract the data from the request body and store it in a JavaScript object.

(E):

till now in our server folder we have server.js and the folder routes,
now we create another folder called controllers, inside the controllers we craete a file called users.js inside thsi we are going to create all the handlers for our routes. cause inside our routes folder  we dont want to have logics, cause if we keep adding more routes and more logics  our file for our routes will be complex and large and hard to see which routes we have acces to, so to simplify we will create controllers, we can extract all the fubctions or logic from routes and then take inside the posts.js in controller folder.

inside the posts.js of controller we declare th function for the router.get that we have till now in our project.

[[[  our code in routes/users.js till now:
import express from "express" ;

const router = express.Router();

// now we can start adding our routes

router.get("/ret", (req, res)=> {
    res.send("this works");

});


export default router; ]]]

so in our controllers/posts.js

export const getUsers = (req, res) =>{
  res.send("This Works);
}

then we go to our routes/users.js and import the functions we created in controllers/users.js 


so now in our routes/users.js our code will be :

import express from "express" ;

import { getUsers } from "../controllers/users.js";
const router = express.Router();



// now we can start adding our routes

router.get("/ret", getPosts);


now we set routes folder and controller folder, its time to create models folder
and inside that we craete file called Users.js and inside of this we are going to utilize the possibilities of mongoose
so import mongose from mongoose here.

so first we have to craete amongoose schema

const UserSchema = mongoose.schema({

})

what is a schema:

with mongodb we can create documnets that look absolutely diffrenet, one can have the title and message, another one can have just the message and so on..
mongoose allows us to get some uniformity to our documents.

forexample we have users in our website, and we are going to specify each user has these things:

so our code till now in models/Users.js

import mongoose from "mongoose"; 


const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      username: {
        type: String,
        required: true,
        unique: true
      },

      
    });

//now we have a schema and we want to turn it to a model
const UserModel = mongoose.model("users", UserSchema);

export default UserModel; //we are exporting a mongoose model from the postMessage file, and later on we will be able to run commands suh as Find, Create, Delete and update.

The schema is used to create a Mongoose model called "UserModel", which can be used to interact with the MongoDB database. The model can be imported into other parts of the application to perform CRUD (create, read, update, delete) operations on posts.

(F)

now we need to go to the router/users.js to create router for post requests, to post from server to database:

so our code in routes/users.js till now after making a model will be like this:

import express from "express" ;

import { getUsers } from "../controllers/users.js";
const router = express.Router();



// now we can start adding our routes

router.get("/ret", getPosts);
router.post("/add",createPost);




export default router;








now we need to go to controllers/users.js to craete  craetePost function and write logic for that, also we need to import craetePost to our routes/users.js 

import {getUser, createUser} from "../controllers/user.js


so till now our controller/posts.js is :

export const getUser =(req,res) => {
    res.send("This works")
}

export const createUser = (req,res) => {
    res.send("post Creation");
}

ß

now its time that we have to start implementing real logic for getting post and for creating post:

in our controllers/users.js

so we import postMessage 

import PostMessage from "../models/Users.js";

this gives us access to our real model.

in our controllers/users.js every callback function must have try and catch block.

so ti ll now our code in contrllers/posts.js is like:

import UserModel from "../models/Users.js";


// this function is for retreieving data from database using .find() method
export const getUser = async (req,res) => {
    try { 

        const userdata = await UserModel.find();

        // now we need our function return something
        res.status(200).json(userdata);

    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

// implement logic for adding different posts ( creation of new posts in the database.)

export const createUser = (req,res) => {
    try {
        res.send("post Creation");
    } catch (error) {
        
    }
}

*********************************

The await keyword is used to wait for the Promise returned by the UserModel.find() method to be resolved before assigning the result to the userdata variable.

In other words, this code is fetching all the posts stored in the database and storing them in the  userdata variable as an array of objects. Each object represents a post in the database with its respective fields defined in the Mongoose schema. The  userdata array can then be used to manipulate or display the data on the client-side.

In this code, the getUsers function is defined as an async function with two parameters, req and res. This function is an asynchronous function because it interacts with the MongoDB database using Mongoose's find() method, which is an asynchronous operation that returns a Promise.

The await keyword is used to pause the execution of the function until the Promise returned by UserModel.find() is resolved, and the result is stored in the userdata variable.

If the Promise is resolved successfully, the userdata variable is returned as a response in JSON format with a 200 status code using res.status(200).json(userdata).

If there is an error during the Promise resolution, the catch block is executed, and a JSON response with a 404 status code and an error message is sent back to the client.

By using async/await, the code is much easier to read and write compared to using callback functions or .then() methods


WHAT IS ASyNC & AWAIT:

Async/await is a feature introduced in ES2017 (also known as ES8) in JavaScript that simplifies the handling of asynchronous code.

Async functions are defined using the async keyword. An async function always returns a promise. Within an async function, we can use the await keyword to pause the execution of the function until a promise is resolved. When the promise is resolved, the value is returned and the execution continues.

This makes the code look like synchronous code and makes it easier to read and write asynchronous code. Async/await works with promises under the hood, but it removes the need for callbacks and chaining .then() methods.

************************

now it is time to iimplement the logic for adding different posts.

we know that with post request we have access to something called : req.body



export const createUser = (req,res) => {
    const user = req.body;

    
    try {
        
    } catch (error) {
       
    }
}

so till now we wont be able to consloe.log thisright now, cause we dont have  a way to send post request yet. that is teh exact reason why me immediately aftre we craete this creaeteUser we go to frontside to craete a form and basic layout for making different posts.

we we will have the code in controllers/posts.js as:

import UserModel from "../models/Users.js";


// this function is for retreieving data from database using .find() method
export const getUser = async (req,res) => {
    try { 

        const userdata = await UserModel.find();

        // now we need our function return something
        res.status(200).json(userdata);

    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

// implement logic for adding different users ( creation of new users in the database.)

export const createUser = async (req,res) => {
    const user = req.body;

    const newUser = new UserModel(user);
    try {
        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({message: error.message});
        
    }
}
// successful creation code: 201
//not successful creation: 409 

nowits time to focus more on frontent side, lets go to clinet side,
we will now craete the whole skleton for the frontend application

