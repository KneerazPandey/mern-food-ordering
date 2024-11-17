import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', (req: Request, res: Response) => {
    res.json({message: 'This is simple message'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is started on http://localhost:${PORT}`);
});