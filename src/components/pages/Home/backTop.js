import React from "react";
import{backk} from "../../../modules/tool";
let BackTop=props=>{
    function toTop(){
        var timer=setInterval(function(){
            backk(timer);
        },50);  
    }
    return (
        <div className="backtop" onClick={toTop}>
            <span className="fa fa-arrow-up"></span>
        </div>
    )
}

export default BackTop;