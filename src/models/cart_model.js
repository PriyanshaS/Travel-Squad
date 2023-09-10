const {Schema,model} = require('mongoose');
const itemSchema = new Schema({
    product :{type:Schema.Types.ObjectId , ref:'Product'},
    quantity:{type:Number ,default:1},
})
const cartSchema = new Schema({
    updatedOn :{type:Date},
    createdOn : {type:Date},
    user:{type:Schema.Types.ObjectId , ref:'User'},
    items:{type:[itemSchema] , default:[]},
});

cartSchema.pre('save' , function(next){
    this.updatedOn = new Date();
    this.createdOn = new Date();
    next();
    
});

cartSchema.pre(['update' , 'updateOne' , 'findOneAndUpdate'] , function(next){
    const update = this.getUpdate();
    delete update._id;
    this.updatedOn = new Date();
    next();
});
const cartModel = model('Cart' , cartSchema);
module.exports = cartModel;