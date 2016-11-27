var fs=require("fs");
var users=require("./user.json");
var getUsers=function(){
    return users;
}
var deleteUser=function(username){
    if(users[username])
    {
        delete users[username];
        var ws=fs.createWriteStream('./user.json');
        ws.write(JSON.stringify(users));
        ws.end();

        ws.on("error",function(err){
            console.log("删除数据出错");
        });

        return {status:1,msg:"删除成功"};
    }
    else
    {
        return {status:0,msg:"不存在该人员信息，无法删除"};
    }
}

var AddUser=function(username,user){
    if(!users[username])
    {
        users[username]=user;
        var ws=fs.createWriteStream('./user.json');
        console.log(JSON.stringify(users));
        ws.write(JSON.stringify(users));
        ws.end();

        ws.on("error",function(err){
            console.log("保存数据失败");
        });

            return {status:1,msg:"保存成功"};
    }
    else
    {
        return {status:0,msg:"存在该人员信息，无法添加"};
    }
}

var UpdateUser=function(username,user){
    
    if(users[username])
    {
        users[username]=user;
        var ws=fs.createWriteStream('./user.json');
        ws.write(JSON.stringify(users));
        ws.end();

        ws.on("error",function(err){
            console.log("更新数据失败");
        });

            return {status:1,msg:"保存成功"};
    }
    else
    {
        return {status:0,msg:"不存在该人员信息，无法更新"};
    }
}

var convertJsonToArray=function(Json){
    var ArrayUsers=[];
    for(var user in Json)
    {
        ArrayUsers.push(user);
    }

    return ArrayUsers;
}

module.exports={"users":users,
                "AddUser":AddUser,
                "UpdateUser":UpdateUser,
                "deleteUser":deleteUser
                }