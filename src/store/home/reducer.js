import _state from "./state";
import {GET_BANNER,GET_HOMELIST} from  "./const";

const reducer =(state=_state,action)=>{
    let newstate=Object.assign({},state);

    switch(action.type){
        case GET_BANNER:
            newstate.banners = action.banners;
            break;
        case GET_HOMELIST:
            newstate.homeList = action.homeList.data;
            newstate.allp=action.homeList.allp;
            break;
        default:break;
    }

    return newstate;
}

export default reducer;