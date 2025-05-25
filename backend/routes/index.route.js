import { Router } from "express";
import multer from "multer";
import { addTodo , getTodo } from "../controller/addTodo.controller.js";
import { delTodo , updatetodo } from "../controller/delTodo.controller.js";


const router = Router() ;


const upload = multer() ; 

// adding any to-do thropugh this route 
router.post("/add-todo" , 
    upload.none() ,
    addTodo 
)

// get todo by index
router.get("/get-todo/:index" ,
    getTodo
)

// update a todo by index
router.delete("/del-todo/:index" ,
    delTodo 
)

// update a todo by index
router.patch("/update-todo/:index" ,
    upload.none() ,
    updatetodo
)
export {
    router 
}