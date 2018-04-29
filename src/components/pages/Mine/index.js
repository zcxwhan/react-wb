import React, { Component } from 'react';
import "./index.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actionCreater from "../../../store/mine/actionCreater";
import {withRouter} from "react-router-dom";
class Mine extends Component{
    renderUser(){
        if(this.props.mine.userinfo.username){
            return (
                "欢迎"+this.props.mine.userinfo.username
            )
        }else{
           this.props.history.replace("/login")
        }
    }
    exit(){
        this.props.loginOut();
    }
    toAddress(){
        this.props.history.push("/address");
    }
    showCity(provice,city,dist){
        if(provice && city && dist){
            return (
                <p>
                    {provice+city+dist}
                    <span className="kongge">修改</span>
                </p>
            )
        }else{
            return (
                <p>
                   请选择收货地址
                </p>
            )
        }
    }
    render(){
        let {provice,city,dist}=this.props.citys;
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                {this.renderUser()}
                <div onClick={this.toAddress.bind(this)} className="huo">
                    {this.showCity(provice,city,dist)}
                </div>
                <p><button className="exit" onClick={this.exit.bind(this)}>退出</button></p>
            </div>
        )
    }
}
export default withRouter(connect(state=>state,
    dispatch=>{
        return bindActionCreators(actionCreater,dispatch)
    }
)(Mine));