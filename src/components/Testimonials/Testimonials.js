import "./Testimonials.scss";
import TestimonialCard from "./TestimonialCard";
import BgVideo from "../UI/BgVideo/BgVideo";

import mp4Video from "../../img/video.mp4";
import webmVideo from "../../img/video.webm";
import testimonialImg1 from "../../img/nat-8.jpg";
import testimonialImg2 from "../../img/nat-9.jpg";

const testimonialArr = [
	{
		image: testimonialImg1,
		caption: "Mary Smith",
		title: "I had the best week with my family",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eaque assumenda error aliquid modi inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.lorem10. em ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.lorem10.",
	},
	{
		image: testimonialImg2,
		caption: "Jack Wilson",
		title: "Wow! My life is completely different now!",
		content:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eaque assumenda error aliquid modi inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.lorem10. em ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sequi.lorem10.",
	},
];

export default function Testimonials() {
	return (
		<section className="testimonials">
			<BgVideo mp4={mp4Video} webm={webmVideo} />
			<h2 className="heading-secondary">We make people genuinely happy</h2>

			{testimonialArr.map((testimonial, i) => (
				<TestimonialCard key={i} {...testimonial} />
			))}
		</section>
	);
}
