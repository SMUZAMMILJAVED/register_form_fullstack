const express=require('express')
const{ registerStudent } =require("../controllers/studentController.js") ;

const router = express.Router();

router.post("/", registerStudent);

module.exports=  router;