import express from "express"; //import express
import type { Request, Response } from "express"; //types of express

// app 
const app = express();
const port = process.env.PORT || 4000; //port


// api get response
app.get('/', (req:Request, res:Response)=>{
    res.send('Hello! Gaurav11');
})

// server running on port 4000
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})