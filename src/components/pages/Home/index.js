import React, { Component } from 'react';
import "./index.scss";
import {connect} from "react-redux";
import Banners from "./Banners";
import HomeList from "./HomeList";
import BackTop from "./backTop";
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            isBackShow:false
        }
    }
    changeBackShow(flag){
        if(flag){
            this.setState({isBackShow:true});
        }else{
            this.setState({isBackShow:false});
        }
        
    }
    render(){
        return (
            <div>
                <Banners/>
                <HomeList changeShow={this.changeBackShow.bind(this)} />
              {this.state.isBackShow? <BackTop  /> :""}  
            </div>
        )
    }
}
export default connect(state=>state)(Home);