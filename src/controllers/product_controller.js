const productModel = require('./../models/product_model');
const productController = {
    createProduct: async function(req,res){
        try{
            const productData = req.body;
            const newProduct = new productModel(productData);
            await newProduct.save();
            return res.json({success:true ,data : newProduct, message:"Product created"});
        }
        catch(ex){
            return res.json({success : false ,message: ex});
        }
    },
    fetchAllProducts: async function(req,res){
        try{
            const products =await productModel.find();
            return res.json({success:true ,data : products});
        }
        catch(ex){
            return res.json({success : false ,message: ex});
        }
    },
    fetchById : async function(req,res){
        try{
            const id = req.params.id;
           
            const product = await productModel.find({category:id});
            if(!product){
                return res.json({success : false ,message: "Product not found"});
            }
                return res.json({success:true , data:product});}
            catch(ex){
                return res.json({success : false ,message: ex});
        }
    }
};

module.exports = productController;