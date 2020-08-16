import authenticationReducer from "./authentication.reducer";
import { initialState as authenticationState } from "./authentication.reducer";
import { combineReducers } from "redux";

// Combine all reducers you may have here
export default combineReducers({
    authenticationState: authenticationReducer
});

export const initialStates = {
    authenticationState
};