import { useEffect } from "react";
import { getInitalData } from "./actions";
//import { listUsers } from "./api/listUsers";
import "./App.css";
import { Mycard } from "./components/Card/Mycard";
import { Userbutton } from "./components/UserButtons/Usersbuttons";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInitalData());
  }, []);
  
  const users=useSelector((state)=>state.allUsers.usersInfo);
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "90px",
      }}
    >
      <Mycard />

      <div
        style={{
          marginTop: "40px",
        }}
      >
        {
          users.map((user)=>{
            return <Userbutton id={user.id} key={user.id}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
