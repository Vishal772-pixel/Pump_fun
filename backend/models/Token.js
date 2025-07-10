import mongoose from "mongoose"


const tokenSchema = new mongoose.Schema({

   name:{
    type:String,
    required:true,
   },
   symbol:{
    type:String,
    required:true,
   },
   address:{
    type:String,
    unique:true
   },
   creator:{
    type:String,

   },
   launchTime:{
    type:Date,
    default:Date.now
   },
   currentSupply:{
    type:Number,
    
   },
   totalBuys:{
    type:Number,
    default:0,
   },
   totalVolume:{
    type:Number,
    default:0

   },
   lastPrice:
{
    type:Number
}
   
    
});

export default mongoose.model('Token',tokenSchema);