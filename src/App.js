import "./App.css";
// import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Article1 from "./components/Articles/article1";
import Article2 from "./components/Articles/article2";
import Article3 from "./components/Articles/article3";


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
            <Route path="/articles/Grilled Tomatoes at Home" element={<Article1 />} />
            <Route path="/articles/Snacks for Travel" element={<Article2 />} />
            <Route path="/articles/Post-workout Recipes" element={<Article3 />} />
        	</Routes>
		</div>
	);
}

export default App;
