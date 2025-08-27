import express from 'express'; //import express
import dotenv from 'dotenv';
import router from './routes/chat-route';
const port = process.env.PORT || 4000; //port
dotenv.config();

// app
const app = express();

// parse data in json
app.use(express.json());
app.use(router);

// server running on port 4000
app.listen(port, () => {
   console.log(`Server is running on http://localhost:${port}`);
});
