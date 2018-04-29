import React, { Component } from 'react';
import "./index.scss";
import {withRouter,Link} from "react-router-dom";
class Header extends Component{
    getHeaderName(){
       let {pathname}=this.props.location;        
        if(pathname.startsWith("/list")){
            return "列表";
        }else if(pathname.startsWith("/shopcar")){
            return "购物车";
        }else if(pathname.startsWith("/mine")){
            return "我的";
        }else if(pathname==="/"){
            return "主页";
        }else if(pathname.startsWith("/detail")){
            return (
                <div><Link to="/" style={{position:"absolute",left:"10px"}}>返回</Link>  详情页</div>
            )
        }else if(pathname==="/login"){
            return "欢迎登录";
        }else if(pathname==="/address"){
            return "请选择收货地址";
        }
    }
    render(){       
        return (
            <div className="header">
                {
                    this.getHeaderName()
                }
            </div>
        )
    }
}
export default withRouter(Header);