import React, { Component } from 'react';
import "./index.scss";
import {
	NavLink
} from 'react-router-dom'
let FooterItem=props=>{
    let {title,icon,path}=props.info;
    return (
        <NavLink exact activeClassName={"active"} to = { path }>
            {/* activeStyle={{
                fontWeight: 'bold',
                color: 'red'
           }} */}
            <i className = {`fa fa-${icon}`}></i>
            <span>{title}</span>
        </NavLink>
    )
}
class Footer extends Component{
    render(){
        let {footerList}=this.props;
        return (
            <ul className="footer">
                {
                    footerList.map(item=>{
                        return  <FooterItem key={item.id} info={item}/>
                    })
                }
            </ul>
        )
    }
}
Footer.defaultProps={
    footerList:[
        {id:1,title:"主页",path:"/",icon:"home"},
        {id:2,title:"列表",path:"/list",icon:"list"},
        {id:3,title:"购物车",path:"/shopcar",icon:"shopping-cart"},
        {id:4,title:"我的",path:"/mine",icon:"user"},        
    ]
}
export default Footer;