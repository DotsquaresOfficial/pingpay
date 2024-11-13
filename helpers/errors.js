const fieldDoesNotExistsError=(res,field)=>{
   return res.status(400).send({
        success:false,
        message:`Your request does not contains any ${field}.`,
        reason:`${field} does not exists!.`
    });
}

const userDoesNotExistsError=(res,field)=>{
    return res.status(400).send({
         success:false,
         message:`No such ${user} found.`,
         reason:`${field} does not exists!.`
     });
 }

const fieldIsInvalidError=(res,field,suggestion)=>{
   return res.status(400).send({
        success:false,
        message:`Your request does not contains a valid ${field}.`,
        reason:`${field} is not valid!.${suggestion||''}`
    });
}

const unauthorizedError=(res)=>{
    return res.status(400).send({
         success:false,
         message:`Your request does is unauthorized.`,
         reason:`unauthorized Request`
     });
 }

const feildAlreadyExistsError=(res,field)=>{
    return res.status(400).send({
         success:false,
         message:`${field} already exists.`,
         reason:`${field} is already used by other account.`
     });
 }

module.exports={fieldDoesNotExistsError,fieldIsInvalidError,feildAlreadyExistsError,userDoesNotExistsError,unauthorizedError};