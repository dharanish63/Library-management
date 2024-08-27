const image_schema = require('../Model/db_image_schema')

const create = async(req,res)=>{
   console.log(req.file)
 try {
  const image = await image_schema({
    filename:req.file.originalname,
    path:req.file.path,
    contentType:req.file.mimetype,
    size: req.file.size ,
    uploadDate:Date.now(),
    originalName:req.file.originalname
  })
  const new_image = await image.save()
  res.status(201).json(new_image)
 } catch (error) {
  console.log(error)
  res.status(401).json({message:"Not uploaded"})
 }  



}






module.exports={create}