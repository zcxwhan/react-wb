import React, { Component } from 'react';
import "./index.scss";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import actionCreater from "../../../store/cars/actionCreater";
class ShopCar extends Component{
    add(username,id,src,price,num){
        this.props.addCar(username,id,src,price,num)
    }
    reduce(username,id,src,price,num){
        this.props.reducing(username,id,src,price,num)
    }
    showCarList(username,shopcars){
        if(username && shopcars.length){
            return(
                <ul>
                {
                    shopcars.map(item=>{ 
                        return (
                            <li key={item.id}>编号：{item.id}<img src={item.src} width="50px" />价格：{item.price}
                                <button onClick={this.reduce.bind(this,localStorage.getItem("uid"),item.id,item.src,item.price,1)}>-</button>
                                <span>{item.num}</span><button onClick={this.add.bind(this,localStorage.getItem("uid"),item.id,item.src,item.price,1)}>+</button>
                            </li>
                        )
                    })
                }
                    <p>数量{this.props.total.totalNum} 总价：{this.props.total.totalMoney}</p>
                </ul>
            )
        }else if(username){
            return (
                "暂无商品，快去购买吧"
            )
        }else{
            return (
                "请先登录啊"
            )
        }
        
    }
    render(){
        console.log(this.props)
       let {username}=this.props.state.mine.userinfo;
       var shopcars;
          username? shopcars=this.props.state.cars.shopcars:shopcars="";
       
        return (
            <ul className="carlist">
                {/* {
                    username?
                        (shopcars.map(item=>{
                            return (
                                <li key={item.id}>编号：{item.id}<img src={item.src} width="50px" />价格：{item.price}
                                    <button>-</button><span>{item.num}</span><button>+</button>
                                </li>
                            )
                        })):"请先登录吧"
                } */}
                {this.showCarList(username,shopcars)}
              
            </ul>
        )
    }
}
export default withRouter(connect(state=>
    {
    let total={
        totalNum:0,
        totalMoney:0
    }
    state.cars.shopcars.forEach(item=>{
        total.totalNum+=item.num;
        total.totalMoney+=item.price*item.num;
    })
    return{
        state,
        total:total
    }
},
    dispatch=>{
        return bindActionCreators(actionCreater,dispatch)
    }
)(ShopCar));