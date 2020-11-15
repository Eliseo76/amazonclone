export const initialState = {
  basket: [],
  total: 0,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
        total: state.total + action.item.price,
      };
    default:
      return state;
  }
};
export default reducer;
