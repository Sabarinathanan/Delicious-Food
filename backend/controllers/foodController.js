const foodModel =require( "../models/foodModels")
const fs =require('fs') //file system

//add food item
const addFood =async(req,res)=>{
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await food.save() //save the database
        res.json({success:true,message:'food added'})
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:'error adding food item'})
    }
}

//all list food
const listfood = async(req,res)=>{
    try{
        const foods = await foodModel.find()
        res.json({success:true,data:foods})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:err})
    }
}

//remove food list
const removeFood = async(req,res)=>{
    try{
        const food =await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:'food removed'})
        }
    catch(err){
        console.log(err)
        res.json({success:false,message:err})
    }
}

module.exports={addFood,listfood,removeFood};