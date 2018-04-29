

     //返回顶部
function backk(timer){
    var hei=document.body.scrollTop || document.documentElement.scrollTop;
    var speed=-Math.floor(hei/2);
    if(hei>1){
        document.documentElement.scrollTop=hei+speed;
        document.body.scrollTop=hei+speed;
    }else{                  
        clearInterval(timer);
        document.body.scrollTop = 0;  //移动端支持body
        document.documentElement.scrollTop=0;
    }
}

 //删除cookie
 function unsetCookie(name){
    document.cookie=name+'=;expires='+new Date(0);
}

export {
    backk,unsetCookie
}
