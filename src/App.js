import "./App.css";
// import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Article1 from "./components/Articles/Article1";
import Article2 from "./components/Articles/Article2";
import Article3 from "./components/Articles/Article3";
import Article4 from "./components/Articles/Article4";

const Layout = () => {
	return (
		<div className=" flex flex-col m-0 w-full">
			{/* <Header /> */}
			<Body />
			<Footer />
		</div>
	);
};

function App() {
	return (
		<div className="">
			 <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/Articles/kads-plan" element={<Article1 />} />
            <Route path="/Articles/”food-prices”-à-ifrane" element={<Article2 />} />
            <Route path="/Articles/mon-cuisine-étudiante-!" element={<Article3 />} />
			<Route path="/Articles/delicious-pasta-salad" element={<Article4 />} />
        	</Routes>
		</div>
	);
}

export default App;
