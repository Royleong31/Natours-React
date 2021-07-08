import "./Header.scss";
import logoImg from "../../../img/logo-white.png";
import Button from "../../UI/Button/Button";

export default function Header() {
	return (
		<header className="header">
			<div className="header__logo-box">
				<img src={logoImg} alt="Natours logo" className="header__logo" />
			</div>

			<div className="header__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary__main">Outdoors</span>
					<span className="heading-primary__sub">is where life happens</span>
				</h1>
				<Button address="#" animated white>
					Explore our tours
				</Button>
			</div>
		</header>
	);
}
