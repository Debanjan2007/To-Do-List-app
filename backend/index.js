
import { app } from "./app.js"

app.listen(5500 , () => {
    console.log(`Server is running on http://localhost:5500`); 
})

export {
    app
}