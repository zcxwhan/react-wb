import _state from "./state";
import {GET_PROVICE,GET_CITY,TO_MINE} from "./const";
const reducer =(state=_state,action)=>{
    let newstate=Object.assign({},state);
    
    switch (action.type){
        case GET_PROVICE:
            newstate.provice=action.provice;
            break;
        case GET_CITY:
            newstate.city=action.city;
            break;
        case TO_MINE:
            newstate.dist=action.dist;
            break;
    }

    return newstate;
}

export default reducer;