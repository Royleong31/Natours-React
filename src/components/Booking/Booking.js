import "./Booking.scss";
import Button from "../UI/Button/Button";

export default function Booking() {
	return (
		<section className="booking">
			<div className="booking__container">
				<form action="#" className="form">
					<div className="u-margin-bottom-medium">
						<h2 className="heading-secondary">Start Booking now</h2>
					</div>

					<div className="form__group">
						<input type="text" id="name" placeholder="Full Name" className="form__input" required />
						<label htmlFor="name" className="form__label">
							Full Name
						</label>
					</div>

					<div className="form__group">
						<input
							type="email"
							id="name"
							placeholder="Email Address"
							className="form__input"
							required
						/>
						<label htmlFor="name" className="form__label">
							Email Address
						</label>
					</div>

					<div className="form__group form__group--radio">
						<div className="form__radio-container">
							<input type="radio" id="small" name="size" className="form__radio-input" />
							<label htmlFor="small" name="size" className="form__radio-label">
								<span className="form__radio-btn" />
								Small tour group
							</label>
						</div>
						<div className="form__radio-container">
							<input type="radio" id="large" name="size" className="form__radio-input" />
							<label htmlFor="large" name="size" className="form__radio-label">
								<span className="form__radio-btn" />
								Large tour group
							</label>
						</div>
					</div>

					<div className="form__group">
						<Button primary address="#">
							Next Step &rarr;
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
