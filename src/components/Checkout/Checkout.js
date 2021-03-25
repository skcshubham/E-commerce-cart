import React from "react";
import {
	Paper,
	Stepper,
	Step,
	StepLabel,
	Typography,
	CircularProgress,
	Divider,
	Button,
} from "@material-ui/core";
import useStyles from "./CheckoutStyles";

const Checkout = () => {
	// calling style hook
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.toolbar} />
		</React.Fragment>
	);
};

export default Checkout;
