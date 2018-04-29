import React, { Component } from 'react';
import "./index.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import actionCreater from "../../../store/citys/actionCreater";
import axios from "axios";
class Address extends Component{
    constructor(props){
        super(props);
        this.state={
            datas:[]
        }
    }
    componentWillMount(){
        var that=this;
        axios.get("/json/city.json").then(res=>{
           // console.log(res.data);
            that.setState({
                datas:res.data
            });
        })
    }
    toCity(provice,i){
        let that=this;
        this.props.getProvice(provice,i,function(){
            that.props.history.push("/city/"+i);
        });
    }
    render(){
        return (
            <ul className="address">
                {
                    this.state.datas.map((item,i)=>{
                        return (
                            <li key={i} onClick={this.toCity.bind(this,item.name,i)}>
                                {item.name}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
export default withRouter(connect(state=>state,
    dispatch=>{
        return bindActionCreators(actionCreater,dispatch)
    }
)(Address));