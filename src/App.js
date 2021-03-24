import React, { useState, useEffect } from "react";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./library/commerce";

function App() {
	// hooks to store products from commercejs API
	const [products, setProducts] = useState([]);

	// hooks to store cart items from commercejs API
	const [cart, setCart] = useState({});

	// function to fetch products from commercejs
	const fetchProducts = async () => {
		// fetch products and destucture it on app load, it return promise
		const { data } = await commerce.products.list();
		// setting state as fetched products
		setProducts(data);
	};

	// function to fetch cart items from commercejs API
	const fetchCart = async () => {
		const cart = await commerce.cart.retrieve();
		setCart(cart);
	};

	// hooks to be called when the components mount
	// its called component did mount in class based components
	useEffect(() => {
		fetchProducts();
		fetchCart();
	}, []);

	// event handler to add products to cart on lick of icon
	const handleAddToCart = async (productId, quantity) => {
		const item = await commerce.cart.add(productId, quantity);
		setCart(item.cart);
	};

	return (
		<div className="App">
			<Navbar totalItems={cart.total_items} />
			<Products products={products} onAddToCart={handleAddToCart} />
		</div>
	);
}

export default App;
