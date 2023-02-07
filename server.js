import  express  from "express";
import connection from "./DB/mongo.js";
import baseroute from './routes/baseroute.js'
const app = express()

//DB connection
// connection()
const PORT = 3001

//to access json from request
app.use(express.json())

app.use('/api/v1/basename',baseroute);

app.listen(PORT,()=>{
    console.log("server started")
})

