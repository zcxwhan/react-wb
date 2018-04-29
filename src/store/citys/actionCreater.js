

import axios from "axios";
import {GET_PROVICE,GET_CITY,TO_MINE} from "./const";
export default{
    getProvice(provice,id,fn){
        return dispatch=>{
            setTimeout(() => {
                dispatch({
                    type:GET_PROVICE,
                    provice,     
                }); 
                fn(); 
            }, 200);
         }
    },
    getcity(city,proID,i,fn){
        return dispatch=>{
            setTimeout(() => {
                dispatch({
                    type:GET_CITY,
                    city,     
                }); 
                fn(); 
            }, 200);
         }
    },
    tomine(dist,fn){
        return dispatch=>{
            setTimeout(() => {
                dispatch({
                    type:TO_MINE,
                    dist,     
                }); 
                fn(); 
            }, 200);
         }
    }
    
    
}