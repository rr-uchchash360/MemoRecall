import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './routes/postRoutes.js'

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '30MB', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30MB', extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://user:password@memorecall.yr2ftga.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true, // Corrected key name
    useUnifiedTopology: true, // Corrected key name
  })
  .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
  .catch((error) => console.error(error.message));
