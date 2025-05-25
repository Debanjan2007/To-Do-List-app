import { asyncHandler } from "../utils/asynchandler.js";
import { Apierror } from "../utils/apiError.js";
import { Apiresponce } from "../utils/apiRespose.js";
import { client } from "../db/redis.db.js";
import { errorhandler } from "../utils/handleError.js";


const addTodo = asyncHandler(async (req , res) => {
    const { index , todo } = req.body ;
    if([index , todo].some((item) => item.trim() === "")){
        errorhandler(400 , "Enter a todo please!") ;
    }

    const todoList = await client.set(`todo: ${index}` , JSON.stringify(todo)) ; 
    
    if(!todoList){
        errorhandler(500 , "Internal Server Error") 
    }

    return res
    .status(200)
    .json(
        new Apiresponce(200 , todoList , "Todo added successfully!")
    )
    
})


const getTodo = asyncHandler(async (req , res) => {
    try {
        const { index } = req.params ;
    
        if(!index){
            errorhandler(400 , "Todo not found! enter a index") 
        }
    
        const todo = await client.get(`todo: ${index}`) ;
        
        if(todo === null || todo === undefined){
            return res
            .status(400)
            .json(
                new Apierror(400 , null , "Todo not found! enter a valid index")
            )
        }

        return res
        .status(200)
        .json(
            new Apiresponce(200 , todo , "Todo fetched successfully!")
        )
    } catch (error) {
        errorhandler(500 , "Something went wrong! please try again later") ;
    }
    
})
export {
    addTodo ,
    getTodo
}