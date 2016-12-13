import 'core-js/shim'
import 'babel-polyfill'

function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        var imgae=new Image();
        image.onload=function(){
            resolve(imgage);
        }
        iamge.onerror=function(){
            reject(new Error('could not load image at '+url));
        }
    })
}

loadImageAsync("http://www.baidu.com/1.jpg").then(function(){
    console.log("加载成功");
},function(err){
    console.log("加载失败");
    console.log(err);
})