import React from "react";
import useStyles from "./CheckoutStyles";

const Checkout = () => {
	// calling style hook
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.toolbar} />
			<h1>Checkout</h1>
		</React.Fragment>
	);
};

export default Checkout;
