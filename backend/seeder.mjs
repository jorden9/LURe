import mongooes from "mongoose"
import dotenv from "dotenv"
import colors from "colors"
import users from "./data/user.mjs"
import products from "./data/products.mjs"
import User from "./models/usermodel.mjs"
import Product from "./models/productModel.mjs"
import Order from "./models/orderModel.mjs"
import connectDB from "./config/db.mjs"


dotenv.config();
connectDB();

const importData = async() =>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();;
        const createUser = await User.insertMany(users);

        const adminUser = createUser[0,1]._id;
        const sampleProduct = products.map((product) =>{
            return{ ...product , user: adminUser}
        }) 

        await Product.insertMany(sampleProduct);
        console.log("Data imported".green.inverse);
        process.exit();
    } catch(err){
      console.error(`${err}`.red.inverse);
      process.exit(1);
    }
}
const destoryData = async() =>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
         console.log( "Data destroyed". red.inverse)
         process.exit();
    }
catch(err){
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }}

  if(process.argv[2]==='-d'){
    destoryData()
  }else{
    importData();
  }