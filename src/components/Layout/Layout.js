import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Navigation/>
			<main>{children}</main>
			<Footer />
		</>
	);
}
