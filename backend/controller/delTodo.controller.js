import { asyncHandler } from "../utils/asynchandler.js";
import { Apierror } from "../utils/apiError.js";
import { Apiresponce } from "../utils/apiRespose.js";
import { client } from "../db/redis.db.js";
import { errorhandler } from "../utils/handleError.js";

// delte a todo by index
const delTodo = asyncHandler(async (req , res) => {
    const { index} = req.params ;
    if(!index){
        errorhandler(400 , "Todo not found! enter a index")
    }
    try {

        const delTodo = await client.del(`todo: ${index}`) ;
        if(delTodo === 0){
            errorhandler(400 , "Todo not found! enter a valid index")
        }

        return res
        .status(200)
        .json(
            new Apiresponce(200 , {success: true} , "Todo deleted successfully!")
        )
        
    } catch (error) {
        errorhandler(500 , "Something went wrong! please try again later") ;
    }
})

// update a todo by index
const updatetodo = asyncHandler(async (req , res) => {
    
    const { index }= req.params ;
    const { todo } = req.body ; 
    try {
        if(!index){
            errorhandler(400 , "Todo not found! enter a index")
        }
        const delTodo = await client.del(`todo: ${index}`) ;
        if(delTodo === 0){
            return res
            .status(400)
            .json(
                new Apierror(400 , null , "Todo not found! enter a valid index")
            )
        }
        if(!todo || todo.trim() === ""){
            errorhandler(400 , "Enter a todo please!") ;
        }
        const updatedTodo = await client.set(`todo: ${index}` , JSON.stringify(todo)) ;
        if(!updatedTodo){
            errorhandler(500 , "Internal Server Error") 
        }

        return res
        .status(200)
        .json(
            new Apiresponce(200 , updatedTodo , "Todo updated successfully!")
        )

    } catch (error) {
        errorhandler(500 , "Something went wrong! please try again later") ;
    }
})

export {
    delTodo ,
    updatetodo
}