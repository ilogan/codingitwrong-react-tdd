import { ADD_DISH } from "./actions";

export default function dishes(state = {}, action) {
  switch (action.type) {
    case ADD_DISH:
      const { restaurantName, dishName } = action;
      return {
        ...state,
        [restaurantName]: [dishName, ...(state[restaurantName] || [])]
      };
    default:
      return state;
  }
}
