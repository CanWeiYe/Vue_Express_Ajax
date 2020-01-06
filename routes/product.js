var express = require('express');
var router = express.Router();
var Product=require("../mongo/product");

router.get("/add",function(req,res,next){
    res.render("productadd",{title:"添加商品",message:""});
})
router.post("/add",function(req,res,next){
    //第一步：拿到post过来的数据‘；
    console.log(req.body["pid"])
    console.log(req.body["pname"])
    console.log(req.body["pdisc"])
    console.log(req.body["ptype"])
    console.log(req.body["pprice"])
    console.log(req.body["pimgsrc"])
    //第二步：把数据放到mongodb中；
    var product=new Product({
        id:req.body["pid"],
        name:req.body["pname"],
        disc:req.body["pdisc"],
        type:req.body["ptype"],
        price:req.body["pprice"],
        imgsrc:req.body["pimgsrc"]
    })
    product.save(function(err,result){
        if(err){
            res.render("productadd",{title:"添加商品",message:"添加商品失败"});
        }else{
            console.log(result);
            res.render("productadd",{title:"添加商品",message:"添加商品成功"});
        }
    })
})

module.exports=router;