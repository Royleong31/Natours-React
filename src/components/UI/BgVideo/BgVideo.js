import styles from "./BgVideo.module.scss";

export default function BgVideo({ mp4, webm }) {
	return (
		<div className={styles["bg-video"]}>
			<video className={styles["bg-video__content"]} muted autoPlay loop>
				<source src={mp4} type="video/mp4" />
				<source src={webm} type="video/webm" />
				Your browser is not supported
			</video>
		</div>
	);
}
