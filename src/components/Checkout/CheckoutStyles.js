import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		position: "relative",
	},
	toolbar: theme.mixins.toolbar,
	layout: {
		marginTop: "10%",
		width: "auto",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
}));
