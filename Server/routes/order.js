const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")
const Order = require("../models/Order")
const router = require("express").Router()
//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})
//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json(err)
    }
})
//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("order has been deleted")
    } catch (err) {
        res.status(500).json(err)
    }
})
//GET USER ORDERS
router.get("/find/:id",verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.find(req.params.id)
        res.status(200).json(orders)
    } catch (err) {
        res.status(500).json(err)
    }
})
//GET ALL ORDERS
router.get("/",verifyTokenAndAdmin ,async (req,res)=>{
    try{
        const orders =  await Order.find()
        res.status(200).json(orders)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router