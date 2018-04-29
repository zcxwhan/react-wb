
let uid=localStorage.getItem("uid");
let shopcars=JSON.parse(localStorage.getItem(uid+"cars")||"[]");
// ！！！！！！！！！！！！！！！！！！！难点。。。。。。。。
//如果 退出了  刷新 上面逻辑  则shopcars为空了 再登录还是空  需要解决登录后触发（更新shopcars数据）  
//这里采用  登录成功后用户名更新了 location.reload() 等于重新执行了一次这里更新 shopcars
export default{
   shopcars,
}