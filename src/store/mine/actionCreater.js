

import axios from "axios";
import {LOGIN,LOGIN_OUT} from "./const"
import { Toast} from 'antd-mobile';
import {unsetCookie} from "../../modules/tool";
export default{
    loginConfirm(){
        return dispatch=>{
            axios.get('/wb/confirm').then(res=>{
                if(res.data.tocken){
                    dispatch({
                        type:LOGIN,
                        username:res.data.username
                    });
                }else{
                    dispatch({
                        type:LOGIN,
                        username:""
                    });
                }
            })
        }
    },
    login(username,password,fn){
        return dispatch=>{
            Toast.loading("登录中...");
            axios({
                method:"post",
                url:"/wb/login/confirm",
                data:{
                    username,
                    password,
                    tocken:true
                }
            }).then(res=>{
                Toast.hide();
                if(res.data===0){
                    throw "服务器内部错误"
                }else if(res.data===1){
                    Toast.info("用户名或密码错误",2);
                }else{
                    dispatch({
                        type:LOGIN,
                        username
                    });
                    Toast.info("登录成功",1);
                    localStorage.setItem("uid",username);
                    fn();
                }
            });
            
        }
       
    },
    loginOut(){
        unsetCookie("WBID");
        localStorage.removeItem("uid");
        return {
            type:LOGIN_OUT,
            username:""
        }
    }
    
}