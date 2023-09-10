const {Schema,model} = require('mongoose');
const productSchema = new Schema({
    category :{
        type: Schema.Types.ObjectId , 
        ref: 'Category',
        required: true
    },
    price:{type: Number , required:true},
    images:{type: Array ,default:[]},
    updatedOn :{type:Date},
    createdOn : {type:Date},
    title:{type:String , unique:true},
    description :{type:String , default:""}
});
productSchema.pre('save' , function(next){
    this.updatedOn = new Date();
    this.createdOn = new Date();
    next();
    
});

productSchema.pre(['update' , 'updateOne' , 'findOneAndUpdate'] , function(next){
    const update = this.getUpdate();
    delete update._id;
    this.updatedOn = new Date();
    next();
});
const productModel = model('Product' , productSchema);
module.exports = productModel;