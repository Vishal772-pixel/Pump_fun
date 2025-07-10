import mogoose from "mongoose";

const pricePointSchema = new mongoose.Schema({
    tokenAddress:String,
    price:Number,
    timestamp:{
        type:Date,
        default:Date.now
    },
});


export default mongoose.model('PricePoint',pricePointSchema); 