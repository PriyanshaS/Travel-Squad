const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Admin:ps1234@cluster0.jqtg3ou.mongodb.net/?retryWrites=true&w=majority");

app.get("/" , function(req,res){
    res.json({success: true , message: "hello world"});
});

const userRoutes = require('./routes/user_routes');
app.use('/api/user' , userRoutes);
const categoryRoutes = require('./routes/category_routes');
app.use('/api/category' , categoryRoutes);
const productRoutes = require('./routes/product_routes');
app.use('/api/product' , productRoutes);
const cartRoutes = require('./routes/cart_routes');
app.use('/api/cart' , cartRoutes);
const PORT = 5000;
app.listen(PORT, ()=> console.log("Server started at PORT: 5000"));

//users-> models , routes and controllers