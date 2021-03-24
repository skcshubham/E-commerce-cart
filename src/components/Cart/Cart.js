import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./CartStyles";
import CartItem from "../CartItem/CartItem";

function Cart({ cart }) {
	const classes = useStyles();

	const emptyCart = () => (
		<Typography variant="subtitle1">
			You have no items in your shopping cart, start Shopping!!
		</Typography>
	);

	const filledCart = () => {
		return (
			<React.Fragment>
				<Grid container spacing={3}>
					{cart.line_items.map((item) => (
						<Grid item xs={12} sm={4} key={item.id}>
							<CartItem item={item} />
						</Grid>
					))}
				</Grid>
				<div className={classes.cardDetails}>
					<Typography variant="h4">
						Subtotal : {cart.subtotal.formatted_with_symbol}
					</Typography>
					<div>
						<Button
							className={classes.emptyButton}
							size="large"
							type="button"
							variant="contained"
							color="secondary"
						>
							Empty Cart
						</Button>

						<Button
							className={classes.checkoutButton}
							size="large"
							type="button"
							variant="contained"
							color="primary"
						>
							Check out to Payment
						</Button>
					</div>
				</div>
			</React.Fragment>
		);
	};

	// if cart is undefined because API is still loading
	if (cart.line_items === undefined) return "LOADING";

	return (
		<Container>
			<div className={classes.toolbar} gutterBottom />
			<Typography className={classes.title} variant="h3">
				Your Shopping Cart
			</Typography>
			{cart.line_items.length === 0 ? <EmptyCart /> : <FilledCart />}
		</Container>
	);
}

export default Cart;
