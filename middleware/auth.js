const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req,res,next){
  const token = req.cookies.token || '';
   if(!token) return res.status(401).send("Access Denied");
   try{
    const decoded = jwt.verify(token,config.get('jwtPrivateKey'))
    req.user = decoded;
    next();
}
   catch(ex)
   {
       res.status(400).send("invalid token");// you must login first page
   }
}