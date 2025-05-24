import { asyncHandler } from "../utils/asynchandler.js";
import { Apierror } from "../utils/apiError.js";
import { Apiresponce } from "../utils/apiRespose.js";
import { client } from "../db/redis.db.js";

const addTodo = asyncHandler(async (req , res) => {
    const { index , todo } = req.body ;
    if([index , todo].some((item) => item.trim() === "")){
        throw new Apierror(400 , "Enter a todo please!")
    }

    const todoList = await client.set(`todo: ${index}` , JSON.stringify(todo)) ; 
    
    if(!todoList){
        throw new Apierror(500 , "Internal Server Error") ;
    }

    return res
    .status(200)
    .json(
        new Apiresponce(200 , todoList , "Todo added successfully!")
    )
    
})

export {
    addTodo 
}