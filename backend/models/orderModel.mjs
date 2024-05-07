import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
   user:{
    type:String,
    required: true,
    ref:"User"
   },
   orderItems:[
    {
        name:{ type: String, required: true},
        quantity:{ type: String, required: true},
        image:{ type: String, required: true},
        price:{ type: String, required: true},
          product:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Product"
          }
    }
   ],
   shippingAddress:{
    address:{ type: String, required: true},
    city:{ type: String, required: true},
    PinCode:{ type: String, required: true},
    State:{ type: String, required: true},
   },
   paymentResult:{
    id:{ type: String},
    status:{ type: String},
    update_time:{ type: String},
    email_address:{ type: String},
   },
   itemPrice:{
    type: Number,
    required: true,
    defalut: 0, 
   },
   shippingCost:{
    type: Number,
    required: true,
    default:0
   },
   totalCost:{ type: Number, required: true, default: 0},
   Paid:{ type: Boolean, required: true, default: false},
   paymentdate:{ type: Date },
   deliverDate: {type: Date },
   productDeliverd:{ type: Boolean, reuired: true}
}
,{
tiemstamps: true,
}
)
const Order = mongoose.model("Order", orderSchema)
export default Order;