import { combineReducers } from "redux";
import { adminAuthenticationReducer } from "./adminAuthenticationReducer";
import { customerAuthenticationReducer } from "./customerAuthenticationReducer";
import { customerDataReducer } from "./customerDataReducer";
import { customerPaymentsFormReducer } from "./customerPaymentsFormReducer";
import { customerUiStateReducer } from "./customerUiStateReducer";

export const rootReducer = combineReducers({
	adminAuthentication: adminAuthenticationReducer,
	customerAuthentication: customerAuthenticationReducer,
	customerData: customerDataReducer,
	customerPaymentsForm: customerPaymentsFormReducer,
	customerUiState: customerUiStateReducer,
});
