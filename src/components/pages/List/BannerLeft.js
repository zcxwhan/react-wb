import React, { Component } from 'react';
import "./index.scss";
class BannerLeft extends Component{
    changeMyType(type){
        this.props.changeType(type);
    }
    render(){
        let {lists,nowType}=this.props;
        return (
            <ul className="list-left">
               {
                   lists.map(item=>{
                       return <li key={ item.id} onClick={this.changeMyType.bind(this,item.type)}  className={nowType===item.type?"activecolor":""} >{item.title}</li>
                   })
               }
            </ul>
        )
    }
}
export default BannerLeft;
BannerLeft.defaultProps={
    lists:[
        {id:1,title:"推荐",type:"tuijian"},
        {id:2,title:"顶级品牌",type:"ding"},
        {id:3,title:"奢华品牌",type:"she"},
        {id:4,title:"表带",type:"biao"},
        {id:5,title:"衣服",type:"yi"}
    ]
}