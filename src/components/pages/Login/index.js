import React, { Component } from 'react';
import "./index.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import actionCreater from "../../../store/mine/actionCreater";
class Login extends Component{
    constructor(props){
        super(props);
        this.sub=this.sub.bind(this);
    }
    sub(e){
        e.preventDefault();
        this.props.login(this.lv.value,this.lm.value,function(){
            window.location.reload();
        });
    }
    componentWillReceiveProps(props,state){
       
       this.props.history.push("/mine");
    }
    render(){
        return (
            <div>
                <form className="loginForm" onSubmit={this.sub}>
                    <p>用户名：<input ref={el=>{this.lv=el}}  type="text"/ ></p> 
                    <p>密码：<input ref={el=>{this.lm=el}} type="password"/></p>
                    <button>登录</button>
                </form>
            </div>
        )
    }
}
export default withRouter(connect(state=>state,
    dispatch=>{
        return bindActionCreators(actionCreater,dispatch)
    }
)(Login));