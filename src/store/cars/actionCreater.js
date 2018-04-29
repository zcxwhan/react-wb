

import axios from "axios";
import {ADD_CAR,ADD_CAR_SOME,REDUCE} from "./const"
import { Toast} from 'antd-mobile';
import {unsetCookie} from "../../modules/tool";
export default{
    addCar(username,id,src,price,num){
        return dispatch=>{
           setTimeout(() => {
               dispatch({
                   type:ADD_CAR,
                   options:{
                       id,
                       src,
                       price,
                       num
                   },
                   username,
               });
               Toast.info("加入成功",1);       
           }, 500);
        }
    },
    addCarSom(username,id,src,price,num){
        return dispatch=>{
            setTimeout(() => {
                dispatch({
                    type:ADD_CAR_SOME,
                    options:{
                        id,
                        src,
                        price,
                        num
                    },
                    username,
                });
                Toast.info("加入成功",1);       
            }, 500);
         }
    },
    reducing(username,id,src,price,num){
        return dispatch=>{
            setTimeout(() => {
                dispatch({
                    type:REDUCE,
                    options:{
                        id,
                        src,
                        price,
                        num
                    },
                    username,
                });
                Toast.info("减少了",1);       
            }, 500);
         }
    }
    
}