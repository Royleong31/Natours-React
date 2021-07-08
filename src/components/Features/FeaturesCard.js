import "./Features.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeaturesCard({ icon, title, description }) {
	return (
		<div className="features-card">
			<FontAwesomeIcon
				icon={icon}
				className="features-card__icon"
			/>
			<h3 className="heading-tertiary">{title}</h3>
			<p className="features-card__description">{description}</p>
		</div>
	);
}
