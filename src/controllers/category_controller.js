const categoryModel = require('./../models/category_model');
const categoryController = {
    createCategory: async function(req,res){
        try{
            const categoryData = req.body;
            const newCategory = new categoryModel(categoryData);
            await newCategory.save();
            return res.json({success:true ,data : newCategory, message:"Category created"});
        }
        catch(ex){
            return res.json({success : false ,message: ex});
        }
    },
    fetchAllCategories: async function(req,res){
        try{
            const categories =await categoryModel.find();
            return res.json({success:true ,data : categories});
        }
        catch(ex){
            return res.json({success : false ,message: ex});
        }
    },
    fetchById : async function(req,res){
        try{
            const id = req.params.id;
            const category = await categoryModel.findById(id);
            if(!category){
                return res.json({success : false ,message: "Category not found"});
            }
        return res.json({success:true , data:category});}
        catch(ex){
            return res.json({success : false ,message: ex});
        }
    }
};

module.exports = categoryController;