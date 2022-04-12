import React, { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getAllUsers } from './../Redux/Actions/UserActions';
import CardUser from './CardUser';

function Home() {
  const {users}=useSelector(state=>state.UserReducer)
    const dispatch = useDispatch();
    useEffect(() =>{ 
     dispatch(getAllUsers())
    },[dispatch])
  return (
   <div>
     {users.length>0 ? users.map((user)=>(<CardUser key={user._id} user={user}/>)) : "loading"}
   </div>
  )
}

export default Home;
