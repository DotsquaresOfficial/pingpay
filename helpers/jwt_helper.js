const JWT = require('jsonwebtoken');
const { unauthorizedError } = require('./errors');

module.exports={
    signAccessToken:(userId)=>{
       return new Promise((resolve,reject)=>{
        const payload={
          userId:userId
        };
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const options={
            expiresIn:'24hr',
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
                return unauthorizedError(res);
            }
            req.payload=payload;
            next();
        })
    }
}