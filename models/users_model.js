const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
    },
    name:{
        type:String,
        required:false,
        lowercase:true
    },
    walletAddress:{
        type:String,
        required:true,
        unique:true
    },
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

const User=mongoose.model('user',UserSchema);
module.exports=User;