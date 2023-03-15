import express from "express" ;


import { getUsers,createUsers } from "../controllers/users.js";
const router = express.Router();



// now we can start adding our routes



router.get("/ret", getUsers);
router.post("/add",createUsers);


export default router;