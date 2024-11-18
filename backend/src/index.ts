import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', (req: Request, res: Response) => {
    res.json({message: 'This is simple message'});
});

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