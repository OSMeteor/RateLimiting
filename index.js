/**
 * Created by osmeteor on 2/21/17.
 */
var RateLimit = require('express-rate-limit');
var express = require('express');
var app = express();
app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
var limitoptions={
    windowMs: 60*1000, // 1 minutes
    delayAfter:0,
    max: 300, // limit each IP to 100 requests per windowMs
    delayMs: 0, // disable delaying - full speed until the max limit is reached
    message: 'Too many requests, please try again later.',
    headers: true,
    statusCode: 429
}
var limiter = new RateLimit(limitoptions);
//  apply to all requests
app.use(limiter);
var i=0;
app.get('/api',function(req, res){
    if(i<=limitoptions.max) {
        i++;
        console.log(i,"api no  limiting",new Date());
    }else i=0;

    res.json({status: 200, msg: "success", result:{}})
});
module.exports=app.listen(3000,function() {
    console.log('Express server on  http://localhost:3000');
});
