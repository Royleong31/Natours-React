import { useState, useRef, useEffect } from "react";
import "./Navigation.scss";

export default function Navigation() {
	const [navMenuOpen, setNavMenuOpen] = useState(false);
	const navListRef = useRef();
	const backdropRef = useRef();

	useEffect(() => {
		let navListTimer;

		if (navMenuOpen) {
			navListRef.current.style.display = "block";
			setTimeout(() => {
				navListRef.current.classList.add("main-nav__list--open");
			}, 10); // ?: need to set a delay because it is initially display none and display none cannot be animated. Need to wait a while after display: block has been set before adding the class

			document.body.style.overflow = "hidden";
			backdropRef.current.classList.add("main-nav__backdrop--shown");
		} else {
			navListRef.current.classList.remove("main-nav__list--open");
			backdropRef.current.classList.remove("main-nav__backdrop--shown");

			document.body.style.overflow = "unset";

			navListTimer = setTimeout(() => {
				navListRef.current.style.display = "none";
			}, 500);
		}

		return () => clearTimeout(navListTimer); // ?: clear old timers when running. After closing, the timer will set display: none after a while, but this will cause the list to disappear if pressed quickly. Clear the old timer so that display: none will not be set.
	}, [navMenuOpen]);

	return (
		<nav className="main-nav">
			<div className="main-nav__btn" onClick={() => setNavMenuOpen(prev => !prev)}>
				<input type="checkbox" className="main-nav__checkbox" checked={navMenuOpen} readOnly />
				<span className="main-nav__icon" />
			</div>
			<div className="main-nav__backdrop" ref={backdropRef} />

			<ul className="main-nav__list" ref={navListRef}>
				<li className="main-nav__item">
					<a href="#">
						<span>01</span>About Natours
					</a>
				</li>
				<li className="main-nav__item">
					<a href="#">
						<span>02</span>Your Benefits
					</a>
				</li>
				<li className="main-nav__item">
					<a href="#">
						<span>03</span>Popular Tours
					</a>
				</li>
				<li className="main-nav__item">
					<a href="#">
						<span>04</span>Stories
					</a>
				</li>
				<li className="main-nav__item">
					<a href="#">
						<span>05</span>Book Now
					</a>
				</li>
			</ul>
		</nav>
	);
}
