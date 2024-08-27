const staff_schema= require('../Model/db_staff_schema');

//read the staffs data
const read = async(req, res) => {
  try {
    const staffs = await staff_schema.find();
    return res.status(201).json(staffs)
    console.log(req.parms.id)
   } catch (error) {
    res.status(401).json({message:"Not Found"})
   }
};
//create the new staff data
const create = async (req, res) => {
  const staff = new staff_schema({
   staff_name: req.body.staff_name,
    email: req.body.email,
    age: req.body.age,
    designation: req.body.designation,
    address:req.body.address,
    experience:req.body.experience ,
    city:req.body.city,
    pincode:req.body.pincode
  });
  try {
    const new_staff = await staff.save();
    res.status(201).json(new_staff);
  } catch (error) {
    res.json({ message: "Not stored in the database" });
  }
};
//update the staff data 
const update = async (req,res)=>{
  try {
   const updated_staff = await staff_schema.findOneAndUpdate(
    {
     _id:req.params.id
    },
    {
      staff_name: req.body.staff_name,
      email: req.body.email,
      age: req.body.age,
      designation: req.body.designation,
      address:req.body.address,
      experience:req.body.experience ,
      city:req.body.city,
      pincode:req.body.pincode
    },
    {
     new:true
    }) 
    res.status(201).json(updated_staff)
  } catch (error) {
   console.log("error",error.message)
   res.status(401).json({
     message:"not updated"
   })
  }
 }
//delete the staff data 
const deleted = async(req,res)=>{
  try {
    await staff_schema.deleteOne({_id:req.params.id})
    res.status(201).json({message:"The data was romoved in the database"})
  } catch (error) {
    res.status(401).send(error)
  }

}
//exports the objects
module.exports = {
  read,
  create,
  update,
  deleted
};
