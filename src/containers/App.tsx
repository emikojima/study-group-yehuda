import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CustomerPayments from "./customerpayments/CustomerPayments";
import Admin from "./admin/Admin";
import Home from "../presentationals/Home";
import AdminLogin from "../presentationals/AdminLogin";
import PrivateRouteAdmin from "../presentationals/PrivateRouteAdmin";
import PrivateRouteUser from "../presentationals/PrivateRouteUser";
import UserAuthenticating from "../presentationals/UserAuthenticating";

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Switch>
						<Route exact path={"/"} component={Home} />
						<Route path="/authenticatingPaymentInformation" component={UserAuthenticating} />
						<PrivateRouteUser path="/customerpayments/:hashId" component={CustomerPayments} />
						<Route path="/admin/login" component={AdminLogin} />
						<PrivateRouteAdmin path="/admin" component={Admin} />
					</Switch>
				</Fragment>
			</Router>
		);
	}
}

const mapStateToProps = (state: any) => ({});

export default connect(
	mapStateToProps,
	{},
)(App);
