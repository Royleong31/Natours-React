import { useState } from "react";

import "./App.scss";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Tours from "./components/Tours/Tours";
import Testimonials from "./components/Testimonials/Testimonials";
import Booking from "./components/Booking/Booking";
import Modal from "./components/Modal/Modal";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(far, fas);

export default function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<Layout>
			<Modal isModalOpen={isModalOpen} closeModalHandler={() => setIsModalOpen(false)} />
			<About />
			<Features />
			<Tours openModalHandler={() => setIsModalOpen(true)} />
			<Testimonials />
			<Booking />
		</Layout>
	);
}
