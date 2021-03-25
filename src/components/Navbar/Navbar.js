import React from "react";
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/logo.png";
import useStyles from "./NavbarStyles";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ totalItems }) => {
	// hooks
	const classes = useStyles();
	const location = useLocation();

	return (
		<div>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography
						component={Link}
						to="/"
						variant="h6"
						className={classes.title}
						color="inherit"
					>
						<img
							src={logo}
							alt="E-commerce"
							height="25px"
							className={classes.image}
						></img>
						E-commerce
					</Typography>
					<div className="classes.grow" />
					{/* if we're at cart path, we wont display cart icon */}
					{location.pathname === "/" ? (
						<div className={classes.button}>
							<IconButton
								component={Link}
								to="/cart"
								aria-label="show cart"
								color="inherit"
							>
								<Badge badgeContent={totalItems} color="secondary">
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>
					) : null}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Navbar;
