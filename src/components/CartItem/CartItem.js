import React from "react";
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardMedia,
} from "@material-ui/core";
import useStyles from "./CartItemStyles";

const CartItem = ({ item }) => {
	const classes = useStyles();
	return (
		<Card>
			<CardMedia
				image={image.media.source}
				alt={item.name}
				className={classes.name}
			/>
			<CardContent className={classes.cardContent}>
				<Typography variant="h4">{item.name}</Typography>
				<Typography variant="h5">
					{item.line_total.formatted_with_symbol}
				</Typography>
				<CardActions className={classes.cardActions}>
					<div className={classes.buttons}>
						<button type="button" size="small">
							-
						</button>
						<Typography>{item.quantity}</Typography>
						<button type="button" size="small">
							+
						</button>
					</div>
					<Button variant="contained" type="button" colo="secondary">
						Remove
					</Button>
				</CardActions>
			</CardContent>
		</Card>
	);
};

export default CartItem;
