
module.exports = (req, res, next) => {
    console.log("---------------Entering cors----------------")

    res.set({
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Methods': 'OPTIONS,GET,POST,PUT,HEAD,DELETE',
      'Access-Control-Allow-Headers': 'Authorization,Content-Type,Accept,Accept-Language,Content-Encoding,X-Requested-With',
    });
    return next();
  };
