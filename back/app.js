const express= require('express');

const ViewReport=require('./api/router/ViewReport.js')
var bodyParser = require('body-parser')
const app=express();

const morgan = require('morgan');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return res.status(200).json({});
    }
    next();
});



app.use('/viewreport',ViewReport);



//ROUTE NOT FOUND
// app.use((req, res, next) => {
//     var error = new Error('Not Found');
//     error.status = 404;
//     next(error);
// });
    
// //ERROR HANGLING
// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: error.message
//     });
// });


module.exports=app;