
import {GET_BANNER,GET_HOMELIST} from "./const";
import axios from "axios";

import { Toast} from 'antd-mobile';
export default{

    getbanners(){
        return dispatch=>{
            axios.get("/json/banners.json").then(res=>{
                dispatch({
                    type:GET_BANNER,
                    banners:res.data.bannerList
                })
               
             })
        }
       
    },
    gethomelist(page,fn){
        return dispatch=>{
            Toast.loading("加载中...");
            axios.get('/wb/goods/list',{
                params:{
                    page:page
                }
            }).then(res=>{
                Toast.hide();
                dispatch({
                    type:GET_HOMELIST,
                    homeList:res.data
                });
                fn(res)
            })
        }
    }
}