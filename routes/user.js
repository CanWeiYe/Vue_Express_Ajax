var express = require('express');
var router = express.Router();
var User = require("../mongo/user.js");

/* GET home page. */
router.get('/register', function (req, res, next) {
  res.json({ title: '用户注册', message: "注册成功！" });
});

router.post("/register", function (req, res, next) {

  //接收页面post过来的注册信息；
  //拿到这些数据，我需要验证下，合法性；
  ///存在数据库中。
  //怎么拿到submit提交的数据；
  //把数据存储到mongodb中；
  //需要判断该用户名时候已经存在！
  User.find({ uAcc: req.body["uAcc"] }, function (err, result) {
    if (err) {
      res.json({ title: '用户注册', message: "发生错误" });
    } else {
      var userinfo = new User({
        uAcc: req.body["uAcc"],
        uPass: req.body["uPass"],
        uName: req.body["uName"],
        uAddress: req.body["uAddress"],
        uTel: req.body["uTel"]
      });
      if (result.length > 0 && req.body["uAcc"].length>0) {
        //在数据库里面查到当前这个用户名
        res.json({ title: '用户注册', message: "该用户名已存在！无法注册" });
      } else {console.log(result.length)
          if(userinfo.uAcc.length==0||userinfo.uPass.length==0||userinfo.uName.length==0||userinfo.uAddress.length==0||userinfo.uTel.length==0)
            res.json({title: '用户注册',message: '请填写完整！'});
            else{
        userinfo.save(function (err, result) {
          if (err) {
            console.log("Error:" + err);
            res.json({ title: '用户注册', message: "注册失败" });
          } else {
            res.json({ title: '用户注册', message: "注册成功！" });
          }
        });}
      }
    }
  })
})

router.get('/login', function (req, res, next) {
  res.json({ title: '用户登陆', message: "登陆成功！"});
});
router.post("/login", function (req, res, next) {
  //也可以拿到submit的数据；
  //用提交的数据跟数据库中的数据做对比；
  var uAcc = req.body["uAcc"];
  var uPass = req.body["uPass"];
  //判断post提交到服务器的数据，是否跟数据库中的匹配；

  //mongoose中的查询方法！
  User.find({ uAcc: req.body["uAcc"] }, function (err, result) {
    if (err) {
      res.json({ title: '用户登陆', message: "查询出错！！"});
    } else {
      //查询没有报错
      console.log(result);
      if (result.length > 0) {
        console.log("查到记录")
        //查到记录 ,比对一下密码？
        if (result[0].uPass == req.body["uPass"]) {
          res.json({ title: '用户登陆', message: "登陆成功！"});
        } else {
          //密码不对
          res.json({ title: '用户登陆', message: "密码错误！"});
        }
      } else {
        //没有查到记录
        res.json({ title: '用户登陆', message: "用户名不存在！"});
      }
    }
  })
})

router.get('/getData', function (req, res, next){
    User.find({},function(err,result){
        if(err){
          console.log(err);
          res.json({message:"error!"});
        }
        else{
          res.json({results:result});
        }
    })
})

module.exports = router;
