const express = require('express');
const router = express.Router();


router.get('/product', (req, res) => {
    res.send('hello product GET');
})

router.get('/product/:productId', (req, res) => {
    const { productId } = req.params
    res.send('hello GET ID Product');
})

router.post('/product', (req, res) => {
    res.send('hello POST Product');
})

router.put('/product/:productId',(req,res)=>{
    const { productId } = req.params
    res.send('hello PUT ID Product');
})

router.delete('/product/:productId',(req,res)=>{
    const { productId } = req.params
    res.send('hello DELETE ID Product');
})



module.exports = router