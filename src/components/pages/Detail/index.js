import React, { Component } from 'react';
import "./index.scss";
import DetailInfo from "./addInfo";
class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false
        }
    }
    changeShow(type){
        this.setState({
            isShow:type
        })
    }
    render(){
        let {src,price}=this.props.location.state;
        let {id}=this.props.match.params;
        let obj={src,price,id}
        return (
            <div style={{marginTop:"0.5rem"}}>
                {id}
                <img src={src} alt=""/>
                <span>{price}</span>
                <button className="addCar" onClick={this.changeShow.bind(this,true)}>走你</button>

                <div  className={this.state.isShow?"mask isshow":"mask"} onClick={this.changeShow.bind(this,false)}></div>
                <DetailInfo isshow={this.state.isShow} info={obj}/>
            </div>
        )
    }
}
export default Detail;