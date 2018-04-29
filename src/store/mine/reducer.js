import _state from "./state";
import {LOGIN,LOGIN_OUT} from "./const";
const reducer =(state=_state,action)=>{
    let newstate=Object.assign({},state);
    switch(action.type){
        case LOGIN:
            newstate.userinfo.username=action.username;
            if(!localStorage[action.username+"cars"])localStorage[action.username+"cars"]="[]";
            break;
        case LOGIN_OUT:
            newstate.userinfo.username=action.username;
            break;
        default:break;
    }
   

    return newstate;
}

export default reducer;