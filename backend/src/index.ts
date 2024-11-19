import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';
import myUserRoute from './routes/MyUserRoutes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/my/user', myUserRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () =>{
    try{

        await mongoose.connect(process.env.DATABASE_URL as string);
        console.log('Connected successfully to the database');
    }catch(error) {
        console.log('Error occured while connecting to the database');
        process.exit(1);
    }
    console.log(`Server is started on http://localhost:${PORT}`);
});