export const updateFruit = (fruit: string) => {
	console.log("action Worked", fruit);
	return { type: "updateFruit", payload: fruit };
};
