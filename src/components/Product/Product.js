import React from "react";
import {
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Typography,
	IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./ProductStyles";

const Product = ({ product, onAddToCart }) => {
	// styles hooks of material UI
	const classes = useStyles();

	// console.log(product);

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={product.media.source}
				title={product.name}
			/>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant="h5" gutterBottom>
						{product.name}
					</Typography>
					<Typography variant="body2" gutterBottom>
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
				<Typography
					dangerouslySetInnerHTML={{ __html: product.description }}
					variant="h6"
					color={"textSecondary"}
					gutterBottom
				/>
			</CardContent>
			<CardActions disableSpacing className={classes.cardActions}>
				<IconButton
					aria-label="Add to Cart"
					onClick={() => onAddToCart(product.id, 1)}
				>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Product;
