import React, { useState, useEffect } from "react";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./library/commerce";

function App() {
	// hooks to store products from commercejs api
	const [products, setProducts] = useState([]);

	// hooks to fetch products from commercejs api on app load
	const fetchProducts = async () => {
		// fetch products and destucture it on app load, it return promise
		const { data } = await commerce.products.list();
		// setting state as fetched products
		setProducts(data);
	};

	// hooks to be called when the components mount
	// its called component did mount in class based components
	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Products products={products} />
		</div>
	);
}

export default App;
