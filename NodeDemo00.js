
var f=function(){
    console.log('this is node test');
    return '返回值';
}

var apptest=module.exports=exports={"name":"ye cun song",
                "sex":"男",
                fn:f,
                display:function(){
                    console.log("module.exports 测试");
                }}
//exports.fn=f;
apptest.fn01=function(){
    console.log("test");
}

