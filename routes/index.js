var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  //let userName = req.session.username || ''
  res.render('index', {title: 'Express' });
});


//登录路由配置
router.get('/login',function(req,res){
  res.render('login',{})
})
//注册路由配置
router.get('/zhuce',function(req,res){
  res.render('zhuce',{})
})
//详情页路由配置
router.get('/xiangq',function(req,res){
  res.render('xiangq',{})
})
//write页路由配置
router.get('/write',function(req,res){
  res.render('write',{})
})
module.exports = router;