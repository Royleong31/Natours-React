import "./Tours.scss";
import Button from "../UI/Button/Button";

const toursArr = [
	{
		front: {
			heading: "The sea explorer",
			details: [
				"3 day tour",
				"Up to 30 people",
				"2 tour guides",
				"Sleep in cozy hotels",
				"Difficulty: easy",
			],
		},
		back: { price: "$297" },
	},
	{
		front: {
			heading: "The forest hiker",
			details: [
				"7 day tour",
				"Up to 40 people",
				"6 tour guides",
				"Sleep in provided tents",
				"Difficulty: medium",
			],
		},
		back: { price: "$497" },
	},
	{
		front: {
			heading: "The snow adventurer",
			details: [
				"5 day tour",
				"Up to 15 people",
				"3 tour guides",
				"Sleep in provided tents",
				"Difficulty: hard",
			],
		},
		back: { price: "$897" },
	},
];

export default function Tours({ openModalHandler }) {
	return (
		<section className="tours">
			<div className="tours__container">
				<h2 className="heading-secondary tours__heading">Most popular tours</h2>

				{toursArr.map((tour, i) => (
					<ToursCard key={i} {...tour} index={i + 1} openModalHandler={openModalHandler} />
				))}
			</div>
		</section>
	);
}

function ToursCard({ front, back, index, openModalHandler }) {
	const frontClass = "card__side card__side--front card__side--front-" + index;
	const backClass = "card__side card__side--back card__side--back-" + index;
	const pictureClass = "card__picture card__picture--" + index;
	const headingSpanClass = "card__heading-span card__heading-span--" + index;

	return (
		<div className="card">
			<div className={frontClass}>
				<div className={pictureClass} />

				<h4 className="card__heading">
					<span className={headingSpanClass}>{front.heading}</span>
				</h4>

				<ul className="card__details">
					{front.details.map((detail, i) => (
						<li key={i}>{detail}</li>
					))}
				</ul>
			</div>

			<div className={backClass}>
				<div className="card__price-only">ONLY</div>
				<div className="card__price-value">{back.price}</div>
				<Button address="#section-tours" onClick={openModalHandler} white>
					Book now!
				</Button>
			</div>
		</div>
	);
}
