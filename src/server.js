import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
const app = express();

const PORT = process.env.PORT || 3333;

mongoose.connect('mongodb://localhost:27017/login', {useNewUrlParser: true, useUnifiedTopology: true }).then(() =>{
    console.log('Database connection started')
})

app.use(express.json())
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on URL: http://localhost:${PORT}`);
});