import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import UserCard from "./components/userCard.js";
import Footer from "./components/footer";
import Prerequisites from "./components/prerequisites";

function App() {
	return (
		<div className="App">
			<Header
				welcome={`Welcome to 30 days of React`}
				title={"Getting Started React"}
				subtitle={"JavaScript Library"}
				firstName={"Roshanell"}
				lastName={"Francisco"}
				date={"March 09,2023"}
			/>
			<Prerequisites />
			<UserCard />
			<Footer />
		</div>
	);
}

export default App;
