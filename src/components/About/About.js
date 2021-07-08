import "./About.scss";
import TextButton from "../UI/Button/TextButton";

import img1 from "../../img/nat-1-large.jpg";
import img2 from "../../img/nat-2-large.jpg";
import img3 from "../../img/nat-3-large.jpg";

export default function About() {
	return (
		<section className="about">
			<div className="u-center-text u-margin-bottom-big">
				<h2 className="heading-secondary">Exciting tours for adventurous people</h2>
			</div>

			<div className="about__container">
				<h3 className="heading-tertiary">You're going to fall in love with nature</h3>
				<p className="paragraph">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, iste quisquam? Sequi,
					ipsa inventore repudiandae, porro Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Molestiae, iste quisquam? Sequi, ipsa inventore repudiandae, porro
				</p>
				<h3 className="heading-tertiary">LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h3>
				<p className="paragraph">
					Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet Lorem
					ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem dolor sit amet.Lorem ipsum dolor
					sit amet
				</p>

				<div className="about__photos-container">
					<img src={img1} alt="" className="about__photo about__photo-1" />
					<img src={img2} alt="" className="about__photo about__photo-2" />
					<img src={img3} alt="" className="about__photo about__photo-3" />
				</div>

				<TextButton address="#">Learn more &rarr;</TextButton>
			</div>
		</section>
	);
}
