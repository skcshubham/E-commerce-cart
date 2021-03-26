import React, { useState, useEffect } from "react";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { commerce } from "./library/commerce";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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

	// event handler to add products to cart on click of icon
	const handleAddToCart = async (productId, quantity) => {
		const item = await commerce.cart.add(productId, quantity);
		setCart(item.cart);
	};

	// to handle increment and decrement in cart items
	const handleUpdateCartQty = async (productId, quantity) => {
		const response = await commerce.cart.update(productId, { quantity });
		setCart(response.cart);
	};

	// to handle the remove button from the cart
	const handleRemoveFromCart = async (productId) => {
		const response = await commerce.cart.remove(productId);
		setCart(response.cart);
	};

	// to handle the empty cart button in cart route
	const handleEmptyCart = async () => {
		const response = await commerce.cart.empty();
		setCart(response.cart);
	};

	return (
		<BrowserRouter>
			<div className="App">
				<Navbar totalItems={cart.total_items} />
				<Switch>
					<Route exact path="/">
						<Products products={products} onAddToCart={handleAddToCart} />
					</Route>

					<Route exact path="/cart">
						<Cart
							cart={cart}
							handleUpdateCartQty={handleUpdateCartQty}
							handleEmptyCart={handleEmptyCart}
							handleRemoveFromCart={handleRemoveFromCart}
						/>
					</Route>
					<Route exact path="/checkout">
						<Checkout />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
