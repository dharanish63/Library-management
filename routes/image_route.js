const express =require('express')
const control_image =require('../Controllers/control_image')
const router  = express.Router()
const multer=require('multer')
const storage = multer.diskStorage({
  destination:function(rea,file,cb){
    cb(null,'uploads/')
  }
})
const upload = multer({storage:storage})
//create the image data
router.post('/images',upload.single('file'),control_image.create)

module.exports = router