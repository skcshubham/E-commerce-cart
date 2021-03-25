import React from "react";
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from "@material-ui/core";
import useStyles from "./CartItemStyles";

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty }) => {
	const classes = useStyles();

	// console.log(item.media.source);

	return (
		<Card className="cart-item">
			<CardMedia
				image={item.media.source}
				alt={item.name}
				className={classes.media}
			/>
			<CardContent className={classes.cardContent}>
				<Typography variant="h4">{item.name}</Typography>
				<Typography variant="h5">
					{item.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div className={classes.buttons}>
					<button
						type="button"
						size="small"
						onClick={() => {
							handleUpdateCartQty(item.id, item.quantity - 1);
						}}
					>
						-
					</button>
					<Typography>&nbsp;{item.quantity}&nbsp;</Typography>
					<button
						type="button"
						size="small"
						onClick={() => {
							handleUpdateCartQty(item.id, item.quantity + 1);
						}}
					>
						+
					</button>
				</div>
				<Button
					variant="contained"
					type="button"
					color="secondary"
					onClick={() => {
						handleRemoveFromCart(item.id);
					}}
				>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
