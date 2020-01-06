var express = require('express');
var router = express.Router();
var Product=require("../mongo/product")


/* GET home page. */
router.get('/', function(req, res, next) {
  //从数据库中获取
  Product.find({type:"1"},function(err,result){
      if(err){
        res.render('index', { title: '出错了', arr:arr });
      }else{
        //从result中获取倒数的6个产品，给页面传过去；
        if(result.length>6){
          result=result.slice(result.length-3);
        }
        //js 数组操作； arr 可就是从result中截取了最后6个数；
        res.render('index', { title: '首页', arr:result });
      }
  }) 
});
module.exports = router;
