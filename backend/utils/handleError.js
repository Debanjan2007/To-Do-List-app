import { Apierror } from "./apiError.js"
export const errorhandler = (statcode , message) => {
    (req , res) => {
        return res
        .status(statcode)
        .json(
            new Apierror(statcode , null , message) 
        )
    }
}