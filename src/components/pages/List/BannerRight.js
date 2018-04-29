import React, { Component } from 'react';
import "./index.scss";
import axios from "axios";
class BannerRight extends Component{
    constructor(props){
        super(props);
        this.state={
            rightList:[]
        }
    }
    componentWillMount(){
        axios.get("/json/shop.json").then(res=>{
            this.setState({
                rightList:res.data["tuijian"]
            });    
        })
    }
    
    componentWillReceiveProps(props){
        if(this.props.nowType!==props.nowType){
            axios.get("/json/shop.json").then(res=>{
                this.setState({
                    rightList:res.data[props.nowType]
                });
            })
        }
        
    }

    render(){
       
        return (
            <div className="list-right">
                {
                    this.state.rightList.map(item=>{
                        return (
                            <li key={item.id}>
                                <img src={item.src} alt="" width="100%"/>
                                <span>{item.price}</span>
                            </li>
                        )
                    })
                }
            </div>
        )
    }
}
export default BannerRight;