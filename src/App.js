import logo from "./logo.svg";
import "./App.css";
import Info from "./components/Info/Info.js";
import About from "./components/About/About.js";
import Intrest from "./components/Intrest/Intrest.js";
import Footer from "./components/Footer/Footer.js";

function App() {
	return (
		<div className="App">
			<Info />
			<About />
			<Intrest />
			<Footer />
		</div>
	);
}

export default App;
