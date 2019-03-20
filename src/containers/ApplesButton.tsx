import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { updateFruit } from "../store/actions/applicationStateActions";

export class ApplesButton extends Component<any, any> {
	//   need action

	// map action to props

	// make the reducer respond to the action - (every time we dispatch an action we need to update the store)

	render() {
		const { updateFruit } = this.props;
		return (
			<Grid item>
				<Button onClick={() => updateFruit("Apples")} color="primary" variant="contained">
					Apples
				</Button>
			</Grid>
		);
	}
}

const mapStateToProps = (state: any) => ({});

export default connect(
	mapStateToProps,
	{
		updateFruit,
	},
)(ApplesButton);
