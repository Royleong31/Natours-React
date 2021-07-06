import styles from "./Button.module.scss";

export default function TextButton({ children, address }) {
	return (
		<a href={address} className={styles["btn-text"]}>
			{children}
		</a>
	);
}
