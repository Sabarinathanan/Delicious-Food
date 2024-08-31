const express =require('express')
const {addFood,listfood,removeFood} =require('../controllers/foodController')
const multer =require('multer')

const foodRouter = express.Router()

//image storing
const storage = multer.diskStorage({
    destination:('uploads'),
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

//route
foodRouter.post('/add',upload.single('image'),addFood)
foodRouter.get('/list',listfood)
foodRouter.post('/remove',removeFood)

module.exports=foodRouter; 