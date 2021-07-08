import styles from "./Button.module.scss";

export default function Button({ children, address, animated, primary, white, onClick }) {
	const classes = [styles["btn"]];

	if (animated) classes.push(styles["btn--animated"]);
	if (primary) {
		classes.push(styles["btn--primary"]);
	} else if (white) {
		classes.push(styles["btn--white"]);
	}

	return (
		<a href={address} onClick={onClick} className={classes.join(" ")}>
			{children}
		</a>
	);
}
