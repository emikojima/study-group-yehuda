import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
	Button,
	Paper,
	Typography,
	TextField,
	Grid,
	FormControlLabel,
	Switch,
	Theme,
	createStyles,
	withStyles,
} from "@material-ui/core";
import ApplesButton from "./ApplesButton";

const styles = (theme: Theme) =>
	createStyles({
		paper: {
			margin: theme.spacing.unit * 6,
			padding: theme.spacing.unit * 6,
			[theme.breakpoints.up("sm")]: {
				width: 600,
				marginRight: "auto",
				marginLeft: "auto",
			},
		},
	});

export class StudyGroup extends Component<any, any> {
	state = {
		value: "Fruit?",
		tastyMode: false,
		customFruitInput: "",
	};

	// add tasty mode (check if fruit is one of three before allowed to submit)
	// disable submit button unless tasty. only in tasty mode

	// put into separate components
	// -- actions instead of state updates
	// --

	handleClick = (fruit: string) => {
		this.setState({
			value: fruit,
		});
	};

	handleTasty = (event: any) => {
		this.setState({
			tastyMode: event.target.checked,
		});
	};

	onSubmit = () => {
		const { customFruitInput } = this.state;
		this.setState({
			value: customFruitInput,
			customFruitInput: "",
		});
	};

	onChange = (event: any) => {
		const customFruitInput = event.target.value;
		this.setState({
			customFruitInput,
		});
	};

	disabledForTastyMode = () => {
		//   what do we need here?
		// tastyMode, customFruitInput, return true or false
		const { tastyMode, customFruitInput } = this.state;
		if (tastyMode === true) {
			if (customFruitInput !== "pear") {
				return true;
			}
		}
		return false;
	};

	render() {
		const { value, tastyMode, customFruitInput } = this.state;
		const { classes, fruitChoice } = this.props;
		return (
			<Paper className={classes.paper}>
				<Grid container direction="column" spacing={40} alignItems="center">
					<Grid item>
						<Typography variant="h3">{fruitChoice}</Typography>
					</Grid>
					<Grid item>
						<FormControlLabel
							control={<Switch color="primary" checked={tastyMode} onChange={this.handleTasty} />}
							label="Tasty Mode"
						/>
					</Grid>
					<Grid container item direction="column" spacing={16} alignItems="flex-start">
						<ApplesButton />
						<Grid item>
							<Button onClick={() => this.handleClick("Oranges")} color="primary" variant="contained">
								Oranges
							</Button>
						</Grid>
						<Grid item>
							<Button onClick={() => this.handleClick("Bananas")} color="primary" variant="contained">
								Bananas
							</Button>
						</Grid>
						<Grid item container direction="row" spacing={32} justify="flex-start">
							<Grid item>
								<TextField
									value={customFruitInput}
									onChange={this.onChange}
									placeholder="Enter a custom fruit"
								/>
							</Grid>
							<Grid item>
								<Button
									disabled={this.disabledForTastyMode()}
									onClick={this.onSubmit}
									variant="contained"
									color="primary">
									Submit "custom" fruit
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

const mapStateToProps = (state: any) => ({
	fruitChoice: state.applicationState.fruit,
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(withStyles(styles)(StudyGroup));
