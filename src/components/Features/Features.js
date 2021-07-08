import "./Features.scss";
import FeaturesCard from "./FeaturesCard";

const featuresData = [
	{
		icon: ["fas", "globe-americas"],
		title: "Explore the world",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.fsdfsdds fs fd sds",
	},
	{
		icon: ["far", "compass"],
		title: "Meet Nature",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.fsdfsdds fs fd sds",
	},
	{
		icon: ["far", "map"],
		title: "Find your way",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.fsdfsdds fs fd sds",
	},
	{
		icon: ["far", "heart"],
		title: "Live a healthier life",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.fsdfsdds fs fd sds",
	},
];

export default function Features() {
	return (
		<section className="features">
			<div className="features__container">
				{featuresData.map((feature, i) => (
					<FeaturesCard key={i} {...feature} />
				))}
			</div>
		</section>
	);
}
