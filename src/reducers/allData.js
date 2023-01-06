
const dataDefault = {
    usersInfo:[],
    isDataInitialised:false
};

const getUsersAll = (state=dataDefault,action)=>{
    switch(action.type){
        case "DATA_INIT":
            return {
                ...state,
                usersInfo: action.data.data,
                isDataInitialised:true
            }
        default:
            return state;
    }
}

export default getUsersAll;