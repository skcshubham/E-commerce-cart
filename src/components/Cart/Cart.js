import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./CartStyles";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

function Cart({
	cart,
	handleUpdateCartQty,
	handleEmptyCart,
	handleRemoveFromCart,
}) {
	const classes = useStyles();

	const emptyCart = () => (
		<Typography variant="subtitle1">
			You have no items in your cart, start shopping {"=>"}
			<Link to="/" className={classes.link}>
				Start adding some items
			</Link>
		</Typography>
	);

	const filledCart = () => {
		return (
			<React.Fragment>
				<Grid container spacing={3}>
					{cart.line_items.map((item) => (
						<Grid item xs={12} sm={6} md={3} key={item.id}>
							<CartItem
								item={item}
								handleUpdateCartQty={handleUpdateCartQty}
								handleRemoveFromCart={handleRemoveFromCart}
							/>
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
							onClick={handleEmptyCart}
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
			<Typography className={classes.title} variant="h3" gutterBottom>
				Your Shopping Cart
			</Typography>
			{cart.line_items.length === 0 ? emptyCart() : filledCart()}
		</Container>
	);
}

export default Cart;
