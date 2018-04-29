import React, { Component } from 'react';
import "./index.scss";
import { Toast} from 'antd-mobile';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import actionCreater from "../../../store/cars/actionCreater";
class DetailInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            num:1
        }
    }
    reduce(){
        if(this.state.num===0){
            alert("不能再少了");
            return ;
        }
        this.setState({num:--this.state.num});
    }
    add(){
        this.setState({num:++this.state.num});
    }
    addIncar(username,id,src,price,num){
        this.props.addCarSom(username,id,src,price,num)
    }
    render(){
        let {num}=this.state;
        let {info}=this.props
        return (
            <div className={this.props.isshow? 'detailInfo isshow':'detailInfo'}>
                <p>
                    <button onClick={this.reduce.bind(this)}>-</button>
                    <span>{num}</span>
                    <button onClick={this.add.bind(this)}>+</button>
                </p>
                <button className="addCar" onClick={this.addIncar.bind(this,this.props.mine.userinfo.username,info.id,info.src,info.price,num)}>加入购物车</button>
                
            </div>
        )
    }
}

export default withRouter(connect(state=>state,
    dispatch=>{
        return bindActionCreators(actionCreater,dispatch)
    }
)(DetailInfo));