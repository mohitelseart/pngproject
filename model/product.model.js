const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
   image:String,
   header:String,
   description:String,
},{
    versionKey:false
})

const ProductModel = mongoose.model("ProductData", ProductSchema)

module.exports = {
    ProductModel
}