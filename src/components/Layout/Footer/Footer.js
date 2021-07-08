import footerLogo from "../../../img/logo-green-2x.png";
import "./Footer.scss";

export default function Footer() {
	return (
		<footer className="footer">
			<img src={footerLogo} alt="" className="footer__logo" />

			<div className="footer__container">
				<ul className="footer__links-list">
					<li>
						<a href="#" className="footer__link">
							Company
						</a>
					</li>
					<li>
						<a href="#" className="footer__link">
							Contact Us
						</a>
					</li>
					<li>
						<a href="#" className="footer__link">
							Careers
						</a>
					</li>
					<li>
						<a href="#" className="footer__link">
							Privacy
						</a>
					</li>
					<li>
						<a href="#" className="footer__link">
							Terms
						</a>
					</li>
				</ul>

				<p className="footer__copyright">
					Built by
					<a className="footer__link" href="#">
						Jonas Schmedtmann
					</a>
					for his online course
					<a className="footer__link" href="#">
						Advanced CSS and SCSS
					</a>
					. You are not allowed to claim this website as your own
				</p>
			</div>
		</footer>
	);
}
