import axios from "axios";
import { GET_All_USERS, GET_ONE_USER, ADD_USER ,DELETE_USER,MODIFY_USER} from "../Types";
export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:5000/user");
    dispatch({ type: GET_All_USERS, payload: response.data.users });
  } catch (error) {
    alert(error);
  }
};
export const getOneUser = (id, navigate) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/user/${id}`);
    navigate(`/${id}`);
    dispatch({ type: GET_ONE_USER, payload: response.data.user });
  } catch (error) {
    alert(error);
  }
};
export const addUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/user", user);
    dispatch({ type: ADD_USER, payload: response.data.msg });
  } catch (error) {
    alert(error);
  }
};
export const deleteUser=(id,navigate)=>async(dispatch)=>{
  
  try {
    const response=await axios.delete( `http://localhost:5000/user/${id}`)
    navigate('/')
    dispatch({type:DELETE_USER,payload:response.data.msg})
  } catch (error) {
    alert(error)
  }
}
export const modifyUser=(user,id,nav)=>async(dispatch)=>{
  try {
    const response=await axios.put(`http://localhost:5000/user/${id}`,user)
  nav('/')
    dispatch({type:MODIFY_USER})
  } catch (error) {
    alert(error)
  }
}