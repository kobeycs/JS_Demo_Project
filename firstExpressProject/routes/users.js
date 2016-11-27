var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
var UserUtil=require("../UserUtil.js");
var users=UserUtil.users;
/*get myuser list */
router.get('/index',function(req,res){
  console.log("acess myuser list");
  console.log(users);
  res.render("userlist",{title:'users list',users:users});
})

/*get form to add new users */
router.get("/new",function(req,res){
  res.render("usernew",{title:"user new opt"});
})

/* Get detail of a new user */
router.get('/detail/:name', function(req, res, next) {
   var user = users[req.params.name] 
   if(user){
      res.render('userdetail', { title: 'User Profile', user:user});
   }else{
      next();
   }   
});
//delete user
router.get('/delete/:name', function(req, res, next) {
   var user = users[req.params.name] 
   if(user){
      var returnJson= UserUtil.deleteUser(req.params.name);
    console.log(returnJson);
    res.redirect('/users/index');
   }else{
      next();
   }   
});
//update user
router.get('/update/:name', function(req, res, next) {
   var user = users[req.params.name] 
   if(user){
      res.render('updateuser', { title: 'User Profile', user:user});
   }else{
      next();
   }   
});

/* post the form to add new user */
router.post('/addUser', function(req, res, next) {   
   console.log(req.body);
   if(users[req.body.name]){
      res.send('Conflict', 409);
   }else{
     //users[req.body.name] = req.body;
    var returnJson= UserUtil.AddUser(req.body.name,req.body);
    console.log(returnJson);
	 res.redirect('/users/index');
   }   
});

/* post the form to add new user */
router.post('/updateUser', function(req, res, next) {   
   console.log(req.body);
   if(!users[req.body.hidname]){
      res.send('Conflict', 409);
   }else{
     //users[req.body.name] = req.body;
    var returnJson= UserUtil.UpdateUser(req.body.hidname,req.body);
    console.log(returnJson);
	 res.redirect('/users/index');
   }   
});

module.exports = router;
