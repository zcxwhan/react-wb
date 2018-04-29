import React, { Component } from 'react';
import "./index.scss";
import Swiper from "swiper"; 
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../../../store/home/actionCreater'
let ItemBanner=props=>{
    return (
            <div className="swiper-slide img-loading">
                <img src={props.info.image} alt="" width="100%"/>
            </div>
    )
}
class Banner extends Component{
    componentWillMount(){
       // console.log(this.props.home.bannerUpdate)
        //console.log("willmount")
       if(!this.props.home.banners.length){
            this.props.getbanners();
       }  
    }

    render(){
        //console.log("render");  //render会执行两次  上来一次  获取完ajax后又一次
        let {banners} =this.props.home;
        return (
            <div className="swiper-container banner" ref={el=>this.el=el}>
                <div className="swiper-wrapper">
                    {
                        banners.map(item=>{
                            return <ItemBanner info={item} key={item.id}/>
                        })
                    }
                    
                </div>
                <div className="swiper-pagination">
                    
                </div>
            </div>
        )
    }
    componentDidMount(){
        if(this.props.home.banners.length){
            new Swiper(this.el,{
                loop:true,
                pagination: {
                    el: '.swiper-pagination'
                },
                autoplay: true
            });
        }
    }
    componentDidUpdate(){
       if (!this.props.home.bannerUpdate) return;
        new Swiper(this.el,{
            loop:true,
            pagination: {
                el: '.swiper-pagination'
            },
            autoplay: true
        });
        this.props.home.bannerUpdate=false;
    }
}
export default connect(state=>state,dispatch=>{
    return bindActionCreators(actionCreator,dispatch);
})(Banner);