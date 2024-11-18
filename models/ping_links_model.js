const mongoose=require('mongoose');

const pingLinkSchema=new mongoose.Schema({
    userId:{
     type:String,
     required:true,
    },
    name:{
        type:String,
        required:true,
        lowercase:true,
    },
    description:{
        type:String,
        required:false,
        lowercase:true
    },
    includedContent:{
        type:String,
        required:true,
    },
    contentType:{
        type:String,
        required:false,
    },
    paymentStatus:{
        type:String,
        required:false,
    },
    transactionId:{
        type:String,
        required:false,
    },
    text:{
        type:String,
        required:false,
    },
    paymentType:{
        type:String,
        required:true,
    },
    priceType:{
        type:String,
        required:true,
    },
    priceAmount:{
        type:Number,
        required:true,
    },
    priceCurrency:{
        type:String,
        required:true,
    },
    network:{
        type:String,
        required:true,
    },
    receiveAmount:{
        type:String,
        required:true,
    },
    receiveCurrency:{
        type:String,
        required:true,
    },
    receiveType:{
        type:String,
        required:true,
    },
    receiverWallet:{
        type:String,
        required:true,
    },
    receiverWalletNetwork:{
        type:String,
        required:true,
    }
});


// UserSchema.pre('save',async function (next) {
//     try{
//      const salt =await bcrypt.genSalt(10);
//      const hashedPassword=await bcrypt.hash(this.password,salt);
//      this.password=hashedPassword;
//      next();
//     }catch(exception){
//         next(exception);
//     }
// });

// UserSchema.post('save',async function (next) {
//     try{
//      console.log("Called after saving the user");
//     }catch(exception){
//         next(exception);
//     }
// });

const pingLink=mongoose.model('pingLink',pingLinkSchema);
module.exports=pingLink;