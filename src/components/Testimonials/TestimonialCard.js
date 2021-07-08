import "./Testimonials.scss";

export default function TestimonialCard({ image, caption, title, content }) {
	return (
		<div className="testimonial">
			<figure className="testimonial__shape">
				<img src={image} alt="" className="testimonial__img" />
				<figcaption className="testimonial__caption">{caption}</figcaption>
			</figure>

			<div className="testimonial__text">
				<h3 className="heading-tertiary">{title}</h3>
				<p>{content}</p>
			</div>
		</div>
	);
}
