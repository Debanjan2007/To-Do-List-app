import compression from 'compression';
import express from 'express';
import { router } from './routes/index.route.js';


const app = express() ;


app.use(compression())
app.use(express.json({
    limit: '10mb'
}))

app.use(express.urlencoded({extended: true }))

app.use("/api/todos" , router )

export {
    app
}