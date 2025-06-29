import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
// import { inngest } from './inngest/index.js';
import { serve } from "inngest/express";
import {inngest,functions} from './inngest/index.js';

const app = express();
const port = 3000;

// MiddleWare
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())
app.use("/api/inngest",serve({client:inngest,functions}))

await connectDB();

//API Routes
app.get('/', (req, res) => res.send("Server is live"))

app.listen(port, () => console.log(`servere listening at http://localhost:${port}`))