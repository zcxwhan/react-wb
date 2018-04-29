import React, { Component } from 'react';
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import actionCreater from "./store/mine/actionCreater";
import { Route,Switch,Redirect,withRouter } from "react-router-dom";
import { Home,List,ShopCar,Mine,NotFound ,Detail,Login,Address,City,Dist} from "./components/pages"
let routes=[
      {id:1,path:"/",component:Home},
      {id:2,path:"/list",component:List},
      {id:3,path:"/shopcar",component:ShopCar},
      {id:4,path:"/mine",component:Mine},
      {id:5,path:"/detail/:id",component:Detail},
      {id:6,path:"/login",component:Login},
      {id:7,path:"/address",component:Address},
      {id:8,path:"/city/:id",component:City},
      {id:9,path:"/dist/:id",component:Dist},
      {id:10,path:"/notfound",component:NotFound}
]


class App extends Component {
  // hasHeader(){
  //   let noHas=["/detail"];
  //   var flag=noHas.some(item=>{
  //     if(this.props.location.pathname.startsWith(item)){
  //       return true;
  //     }
  //     return false;
  //   });
  //   return flag;
  // }

  componentWillMount(){
    this.props.loginConfirm();
  }
  render() {
    return (
      <div className="box">
        {/* {
          this.hasHeader()?"":<Header />
        }   */}
        <Header />
            <Switch>
              {
                routes.map(item=>{
                  return <Route  exact key={item.id} component={item.component} path={item.path}/>
                })
              }
              <Redirect from="**" to="/notfound" />
            </Switch>  
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(state=>state,
  dispatch=>{
      return bindActionCreators(actionCreater,dispatch)
  }
)(App));
