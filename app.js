import express from 'express'
import bodyParser from "body-parser"
import cors from "cors"
import {db_start} from "./Services/db_start.js"
import userRouter from "./Routers/userRouter.js"
import investmentRouter from "./Routers/investmentRouter.js"

const app = express()
const port = 3000

db_start()

app.use(bodyParser)

app.use('/user', userRouter)
app.use('investment', investmentRouter)



app.listen(port, () => {
    console.log("Server started on port 3000")
})
