const express=require("express")
const {ProductModel}=require("../model/product.model")

const ProductRouter=express.Router()

ProductRouter.get("/",async(req,res)=>{
    const data=await ProductModel.find()
    res.send(data)
})

ProductRouter.post("/send",async(req,res)=>{
    const payload=req.body
    const client=new ProductModel(payload)
    await client.save()
    res.send({"msg":"enquiry request submitted"})
})

ProductRouter.patch('/update/:id',async(req,res)=>{
    const payload=req.body
    const data=req.params.id
    await ProductModel.findByIdAndUpdate({_id:data},payload)
    res.send({"msg":`requirement with id :${data} has been updated`})

})

ProductRouter.delete('/delete/:id',async(req,res)=>{
    const data=req.params.id
    await ProductModel.findByIdAndDelete({_id:data})
    res.send({"msg":`Note with id:${data} has been deleted`})
})

module.exports={
    ProductRouter
}