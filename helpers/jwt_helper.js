const JWT = require('jsonwebtoken');

module.exports={
    signAccessToken:(userId)=>{
       return new Promise((resolve,reject)=>{
        const payload={
          userId:userId
        };
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const options={
            expiresIn:'1h',
            issuer:"pingpay.com",
            audience:userId
        };
        JWT.sign(payload,secret,options,(error,token)=>{
            if(error){
                reject(Error('Unauthorized'));
            }else{
                resolve(token);
            }
        });
       })
    },
    verifyAccessToken:(req,res,next)=>{
        if(!req.headers['authorization']) return Error('Unauthorized');
        const authToken=req.headers['authorization'].split(' ')[1];
        JWT.verify(authToken,process.env.ACCESS_TOKEN_SECRET,(error,payload)=>{
            if(error){
                next(Error('Unauthorized'));
            }
            req.payload=payload;
            next();
        })
    }
}