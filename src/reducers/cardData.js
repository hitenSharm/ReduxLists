const INIT_CARD = {
  email: "Email Here",
  first_name: "Hello",
  last_name: "World",
  avatar: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  loadingState:true,
  initState:true
};

export const cardInfo = (state = INIT_CARD, action) => {
  switch (action.type) {
    case "CARD_UPDATE":
      return {
        ...state,
        email: action.payload.email,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        avatar: action.payload.avatar,
        loadingState:false,
        initState:false
      };
    case "LOADING_CARD":
      return {
        ...state,
        loadingState:true,
        initState:false
      }
    default:
      return state;
  }
};
