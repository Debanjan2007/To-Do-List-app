import { Router } from "express";
import multer from "multer";
import { addTodo } from "../controller/addTodo.controller.js";

const router = Router() ;


const upload = multer() ; 

// adding any to-do thropugh this route 
router.post("/add-todo" , 
    upload.none() ,
    addTodo 
)

export {
    router 
}