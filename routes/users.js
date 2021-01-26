var express = require('express');
var router = express.Router();


//将用户模板导入
let User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
 

  res.send('respond with a resource');
});






//实现用户提交信息，注册事项
//Response   相应
//Request    请求
router.post('/addUser', (req, res, next) => {
  console.log(req.body);
   //console.log(req.body);
  //用户填写的表单信息可以通过req.body.userName获取
  //res.send('点击注册了')



  //向用户数据库添加用户信息
  let userInfo = {
    userName: req.body.userName,
    password: req.body.password,
    passwordC: req.body.passwordC,
  }


 //页面表单数据，放入模型
  let userI = new User(userInfo)


  //保存
  userI.save((err, result)=> {
    if (!err) {
      res.send(result)
    }
  })

})

//验证
// const schema = Joi.object({
//   userName:Joi.string().min(12).max(12).required().error(new Error('用户名不符合验证规则')),
//   password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码错误')),
//   passwordC:Joi.ref('password'),

// }).with('password','passwordC');








//登录
router.post('/login',(req,res,next) =>{
//从表单获取数据
  let userinfo ={
    userName: req.body.username,
    password: req.body.password,
  
  }
 console.log(userinfo);
  User.findOne(userinfo,function(err,result){
    //错误处理
    if(err){
      return console.log(err);     
    }
    if(result == null){
     console.log('登录失败');
      res.redirect('/zhuce');
    }else{
     // req.session.username = userinfo.userName
    console.log('登录成功');
      res.redirect('/')
    }
  })
})

module.exports = router;



