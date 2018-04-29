import _state from "./state";
import {ADD_CAR,ADD_CAR_SOME,REDUCE} from "./const";
const reducer =(state=_state,action)=>{
    let newstate=Object.assign({},state);
    switch(action.type){
        case ADD_CAR:
            var hasGood=newstate.shopcars.some(item=>{
                if(item.id==action.options.id){
                    item.num++;
                    return true;
                }
                return false;
            });
            if(!hasGood){
                newstate.shopcars.push({...action.options});
            }
            localStorage[action.username+"cars"]=JSON.stringify(newstate.shopcars);
            break;
        case ADD_CAR_SOME:
            var hasGood=newstate.shopcars.some(item=>{
                if(item.id==action.options.id){
                    item.num+=action.options.num;
                    return true;
                }
                return false;
            });
            if(!hasGood){
                newstate.shopcars.push({...action.options});
            }
            localStorage[action.username+"cars"]=JSON.stringify(newstate.shopcars);
            break;
        case REDUCE:
            newstate.shopcars.forEach((element,key) => {
                if(element.id==action.options.id){
                    if(element.num==1){
                        newstate.shopcars.splice(key,1);
                    }else{
                        --element.num;
                    }
                    
                }
            });
            localStorage[action.username+"cars"]=JSON.stringify(newstate.shopcars);
            break;
    }

    return newstate;
}

export default reducer;