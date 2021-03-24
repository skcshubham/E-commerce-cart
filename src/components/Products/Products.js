import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import useStyles from "./ProductsStyles";

const products = [
	{
		id: 1,
		name: "Shoes",
		description: "Running Shoes",
		price: "Rs 200",
		image: "https://dummyimage.com/600x400/000/fff",
	},
	{
		id: 2,
		name: "MacBook",
		description: "Apple Laptop",
		price: "Rs 200",
		image: "https://dummyimage.com/600x400/000/fff",
	},
	{
		id: 3,
		name: "Mobile",
		description: "Apple iPhone",
		price: "Rs 200",
		image: "https://dummyimage.com/600x400/000/fff",
	},
];

const Products = ({ products }) => {
	const classes = useStyles();
	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justify="center" spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
