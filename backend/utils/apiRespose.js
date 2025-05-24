class Apiresponce {
    constructor(statusCode , data , message){
        this.statusCode = statusCode ;
        this.data = data ;
        this.message = message ;
    }
    success() {
        return {
            statusCode : this.statusCode ,
            data : this.data ,
            message : this.message 
        }
    }
}

export {
    Apiresponce
}