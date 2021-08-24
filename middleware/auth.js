const jwt = require('jsonwebtoken');

const authenticate = async (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1] || ""
    try{
        const verified = jwt.verified(token, process.env.JWT_SECRET);
        // const decode = jwt.decode(token, process.env.JWT_SECRET);
        req.verifiedUser = verified
        console.log("verification successfull", verified)
        next()
    }catch(err){
        console.log("verification failed!!", err);
    }
}

module.exports = {authenticate}