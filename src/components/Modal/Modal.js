import "./Modal.scss";
import img1 from "../../img/nat-8.jpg";
import img2 from "../../img/nat-9.jpg";
import Button from "../UI/Button/Button";
import CSSTransition from "react-transition-group/CSSTransition";

const animationTimings = {
	enter: 500,
	exit: 500,
};

export default function Modal({ isModalOpen, closeModalHandler }) {
	return (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={isModalOpen}
			timeout={animationTimings}
			classNames="modalAnimation"
		>
			<div className="modal--overlay" onClick={closeModalHandler}>
				<aside className="modal">
					<div className="modal__close-btn" onClick={closeModalHandler}>
						&times;
					</div>
					<div className="modal__img-container">
						<img src={img1} alt="" className="modal__img" />
						<img src={img2} alt="" className="modal__img" />
					</div>

					<div className="modal__text-container">
						<h2 className="heading-secondary u-margin-bottom-medium">Start Booking now</h2>
						<h3 className="heading-tertiary u-margin-bottom-small">
							IMPORTANT – PLEASE READ THESE TERMS BEFORE BOOKING
						</h3>
						<div className="modal__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Sed sed risus pretium quam. Aliquam
							sem et tortor consequat id. Volutpat odio facilisis mauris sit amet massa vitae.
							Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
							sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada
							pellentesque elit eget gravida cum sociis natoque penatibus et. Proin fermentum
							leo vel orci porta non pulvinar neque laoreet. Gravida neque convallis a cras
							semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus vitae
							aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit.
							Amet massa vitae tortor condimentum lacinia quis vel eros donec. Sit amet
							facilisis magna etiam. Imperdiet sed euismod nisi porta.
						</div>
						<Button address="#" primary class="modal__book-btn">
							Book Now!
						</Button>
					</div>
				</aside>
			</div>
		</CSSTransition>
	);
}
