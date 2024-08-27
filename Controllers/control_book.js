const book_schema = require("../Model/db_book_schema");

//read the books
const read = async(req, res) => {
   try {
    const books = await book_schema.find();
    return res.status(201).json(books)
   } catch (error) {
    res.status(401).json({message:"Not Found"})
   }
};
//create the new book
const create = async (req, res) => {
  const book = new book_schema({
    book_name: req.body.book_name,
    published_year: req.body.published_year,
    book_edition: req.body.book_edition,
    author: req.body.author
  });
  try {
    const new_book = await book.save();
    res.status(201).json(new_book);
  } catch (error) {
    res.json({ message: "Not stored in the database" });
  }
};
const update = async (req,res)=>{
 try {
  const updated_book = await book_schema.findOneAndUpdate(
   {
    _id:req.params.id
   },
   {
    book_name: req.body.book_name,
    published_year: req.body.published_year,
    book_edition: req.body.book_edition,
    author: req.body.author
   },
   {
    new:true
   }) 
   console.log(updated_book)
   res.status(201).json(updated_book)
 } catch (error) {
  console.log("error",error.message)
  res.status(401).json({
    message:"not updated"
  })
 }
}

const deleted = async(req,res)=>{

try {
  await book_schema.deleteOne({_id:req.params.id})
  res.status(201).json({message:"The data was removed in the database"})
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
