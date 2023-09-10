const {Schema,model} = require('mongoose');
const categorySchema = new Schema({
    updatedOn :{type:Date},
    createdOn : {type:Date},
    title:{type:String , unique:true},
    description :{type:String , default:" "}
});

categorySchema.pre('save' , function(next){
    this.updatedOn = new Date();
    this.createdOn = new Date();
    next();
    
});

categorySchema.pre(['update' , 'updateOne' , 'findOneAndUpdate'] , function(next){
    const update = this.getUpdate();
    delete update._id;
    this.updatedOn = new Date();
    next();
});
const categoryModel = model('Category' , categorySchema);
module.exports = categoryModel;