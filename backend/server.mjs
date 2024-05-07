
import express from 'express';
import dotenv from "dotenv"
dotenv.config();
import cookieParser from 'cookie-parser';
import connectDB from './config/db.mjs';
import { errorHandler, notFound } from './middleware/errorMiiddleware.mjs';
import router from "./routes/productRoutes.mjs"
import userRoute from './routes/userRoutes.mjs'
import orderRoute from "./routes/orderRoutes.mjs"
//import productRoutes from './routes/productRoutes.mjs'
// import products from './data/products.mjs';
const port =  4000;

connectDB();  //connect to mongodb
const app = express();

// cookie parse middleware
app.use(cookieParser())
//body paser middleware
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

app.use('/user', userRoute)
app.get('/', (req, res) => {

  res.send('aur bhai');

});
app.use('/orders', orderRoute);
app.use(router);
app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`));