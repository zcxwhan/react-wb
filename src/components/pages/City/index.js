import React, { Component } from 'react';
import "./index.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import actionCreater from "../../../store/citys/actionCreater";
import axios from "axios";
class City extends Component{
    constructor(props){
        super(props);
        this.state={
            datas:[],
            proID:""
        }
    }
    componentWillMount(){
        let proID=this.props.match.params.id;
        this.setState({
            proID
        });
        var that=this;
        axios.get("/json/city.json").then(res=>{
            that.setState({
                datas:res.data[proID]["city"]
            });
        })
    }
    toDist(city,proID,i){
        let that=this;
        this.props.getcity(city,proID,i,function(){
            that.props.history.push({
                pathname:"/dist/"+proID,
                search: '?id='+i
            });

        });
    }
    render(){
        let {proID}=this.state;
        return (
            <ul className="citys">
               {
                    this.state.datas.map((item,i)=>{
                        return (
                            <li key={i} onClick={this.toDist.bind(this,item.name,proID,i)}>
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
)(City));