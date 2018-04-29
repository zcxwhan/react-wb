import React, { Component } from 'react';
import "./index.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import actionCreater from "../../../store/citys/actionCreater";
import axios from "axios";
class Dist extends Component{
    constructor(props){
        super(props);
        this.state={
            datas:[]
        }
    }
    componentWillMount(){
        let proID=this.props.match.params.id;
        let temp1=this.props.location.search.indexOf("=")+1;
        let cityID=this.props.location.search.substring(temp1);
        let id=this.props.match.params.id;
        var that=this;
        axios.get("/json/city.json").then(res=>{
            that.setState({
                datas:res.data[proID]["city"][cityID]["area"]
            });
        })

    }
    toMine(dist){
        var that=this;
        this.props.tomine(dist,function(){
            that.props.history.replace("/mine");
        });
        
    }
    render(){
        return (
            <ul className="dist">
              {
                    this.state.datas.map((item,i)=>{
                        return (
                            <li key={i} onClick={this.toMine.bind(this,item)}>
                                {item}
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
)(Dist));