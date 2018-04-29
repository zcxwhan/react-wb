import React, { Component } from 'react';
import "./index.scss";
import BannerRight from "./BannerRight";
import BannerLeft from "./BannerLeft";
class List extends Component{
    constructor(props){
        super(props);
        this.state={
            nowType:'tuijian'
        }
        
    }
    change(type){
        this.setState({
            nowType:type
        })
    }
    render(){
        return (
            <div className="list">
                <BannerLeft nowType={this.state.nowType} changeType={this.change.bind(this)}/>
                <BannerRight nowType={this.state.nowType} />
            </div>
        )
    }
}
export default List;