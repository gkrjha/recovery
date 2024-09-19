import { ActionType } from "../Contants/ActionTypes"


const initialState = {
  product: [
    {
      id: 1,
      name: 'Laptop',
      price: 10000,
      description: 'This is a good laptop'
    }
  ]
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_PRODUCTS:
      return {
        ...state,
        product: action.payload // This assumes action.payload is an array of products
      };
    default:
      return state;
  }
};