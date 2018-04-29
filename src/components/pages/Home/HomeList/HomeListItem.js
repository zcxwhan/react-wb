import React, { Component } from 'react';
import { Toast} from 'antd-mobile';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import actionCreater from "../../../../store/cars/actionCreater";
class HomeListItem extends Component{

    toDetail(id,src,price){
        this.props.history.replace({
            pathname:"/detail/"+id,
            state:{
                src,
                price
            }
        });
    }
    addShop(username,id,src,price,num,e){
        e.stopPropagation();
        if(username===undefined){
            Toast.info("请先登录吧...");
            return;
        }
        this.props.addCar(username,id,src,price,1);
    }
    
    render(){
        let {src,price,sail,id}=this.props.info;
        return (
            <li className="goodList" onClick={this.toDetail.bind(this,id,src,price)}>
                <img src={src} alt=""/>
                <span>价格：{price}</span><strong>销量：{sail}</strong><em>id:{id}</em>
                <button onClick={this.addShop.bind(this,this.props.mine.userinfo.username,id,src,price,1)}>加入购物车</button>
            </li>
        )
    }
}
export default withRouter(connect(state=>state,
    dispatch=>{
        return bindActionCreators(actionCreater,dispatch)
    }
)(HomeListItem));