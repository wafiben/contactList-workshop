import { GET_All_USERS ,GET_ONE_USER,ADD_USER,DELETE_USER} from "../Types"
const initState={users:[],user:{},message:""}
const UserReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_All_USERS: return {...state,users:action.payload}
        case GET_ONE_USER:return {...state,user:action.payload}
        case ADD_USER:return {...state,msg:action.payload}
        case DELETE_USER:return {...state,msg:action.payload}
        default: return state
    }
}
export default  UserReducer