import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App";
import axios from "axios";
import { store } from "./store/storeConfig";
import { Provider } from "react-redux";
import { configureAxios } from "./config/axiosConfig";
import { createMuiTheme, MuiThemeProvider, Theme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

configureAxios(axios);

const theme: Theme = createMuiTheme({
	typography: {
		useNextVariants: true,
	},

	palette: {
		primary: {
			light: "#ff695a",
			main: "#cd3530",
			dark: "#950008",
			contrastText: "#fff",
		},
		secondary: {
			light: "#e2f1f8",
			main: "#b0bec5",
			dark: "#808e95",
			contrastText: "#000",
		},
		error: {
			main: "#ffab00",
			contrastText: "#000000",
		},
	},
});

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<Provider store={store}>
			<Fragment>
				<CssBaseline />
				<App />
			</Fragment>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
