var express = require('express');
var router = express.Router();
var Product=require("../mongo/product")

router.post('/add',function(req,res,next){

})

/* GET home page. */
router.get('/getproduct', function(req, res, next) {
  //从数据库中获取
  Product.find({},function(err,result){
      if(err){
        res.json({ title: '出错了', arr:arr });
      }else{
        //从result中获取倒数的6个产品，给页面传过去；       
        //js 数组操作； arr 可就是从result中截取了最后6个数；
        res.json({ title: '首页', arr:result });
      }
  }) 
});
module.exports = router;
