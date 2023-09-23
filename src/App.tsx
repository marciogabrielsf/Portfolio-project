// components //
import Header from "./components/Header";
// pages //
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experience";

function App() {
	return (
		<div className="app">
			<Header />

			<main className="main">
				<Home />
				<About />
				<Experiences />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}
export default App;
