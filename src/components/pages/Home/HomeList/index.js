import React, { Component } from 'react';
import "./index.scss";
import HomeListItem from "./HomeListItem";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../../../store/home/actionCreater'
import { ListView ,Toast} from 'antd-mobile';

class HomeList extends Component{

    constructor(props) {
        super(props);
        //准备存放数据的对象
        const dataSource = new ListView.DataSource({
            //这个是在当数据变化之后，判断不允许出现重复数据
          rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.goods = [];
        this.state = {
          dataSource,
          isLoading: false,
          page:0
        };
      }
   cb(res){  //这里用componentWillReceiveProps 也可以监听到
        this.goods = this.goods.concat(res.data.data)
        this.setState({
            //将获取到的数据放入到dataSource
            dataSource: this.state.dataSource.cloneWithRows(this.goods),
            isLoading: false
        })
   }
   componentWillMount(){
       this.props.gethomelist(0,this.cb.bind(this));
   }
   onEndReached(){
       if(this.state.isLoading) return false;
       this.setState({page: ++this.state.page,isLoading:true});
       if(this.state.page>this.props.home.allp){
            Toast.info("没有更多了",2);
            this.setState({isLoading:false});
       }else{
            this.props.gethomelist(this.state.page,this.cb.bind(this));
       }
       console.log("到底部了 加载");
   }
   watchScroll(){
       var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
       if(scrollTop>200){
        this.props.changeShow(true);
       }else{
        this.props.changeShow(false);
       }
   }
    render(){
        const row = (rowData, sectionID, rowID) => {
            return (
              <HomeListItem info = { rowData } key = { rowData.id } />
            );
        };
        return (
            <div  className="homelist">
                {/* {
                    this.props.home.homeList.map(item=>{
                        return <HomeListItem info = { item } key = { item.id } />
                    })
                } */}
                
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    renderRow={row}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    onScroll={this.watchScroll.bind(this) }
                    scrollRenderAheadDistance={500}
                    onEndReached={this.onEndReached.bind(this)}
                    onEndReachedThreshold={10}
                />

            
            </div>
        )
    }
}
export default connect(state=>state,dispatch=>{
    return bindActionCreators(actionCreator,dispatch);
})(HomeList);