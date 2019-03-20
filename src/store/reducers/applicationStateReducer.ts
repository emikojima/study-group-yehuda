const INITIAL_STATE = {
	fruit: "fruit?",
};

export const applicationStateReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case "updateFruit":
			console.log("payload: ", action.payload);
			return {
				fruit: action.payload,
			};

		default:
			return state;
	}
};
