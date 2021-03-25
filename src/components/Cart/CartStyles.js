import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	title: {
		marginTop: "5%",
	},
	emptyButton: {
		marginBottom: "5px",
		minWidth: "150px",
		[theme.breakpoints.down("xs")]: {
			marginBottom: "5px",
		},
		[theme.breakpoints.up("xs")]: {
			marginRight: "20px",
		},
	},
	checkoutButton: {
		marginBottom: "5px",
		minWidth: "100px",
	},
	link: {
		padding: "1%",
		textDecoration: "none",
	},
	cardDetails: {
		display: "flex",
		marginTop: "5%",
		width: "100%",
		justifyContent: "space-between",
	},
}));
