import { getUser } from "../api/getUser";
import { listUsers } from "../api/listUsers";

export const getInitalData = () => async dispatch => {
    try {
      var data=await listUsers();
      dispatch({type:"DATA_INIT",data,isDataInitialised:true});
    } catch (error) {
      console.log(error);
    }
  };

  export const updateCard = (id) => async dispatch => {
    try {
      dispatch({type:"LOADING_CARD"});
      var data=await getUser(id);
      var payload=data.data;
      dispatch({type:"CARD_UPDATE",payload});
    } catch (error) {
      console.log(error);
    }
  };

