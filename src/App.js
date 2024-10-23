import "./App.css";
// import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Article1 from "./components/Articles/Article1";
import Article2 from "./components/Articles/Article2";
import Article3 from "./components/Articles/Article3";
import Article4 from "./components/Articles/Article4";
import Article5 from "./components/Articles/Article5";
import Article6 from "./components/Articles/Article6";
import Article7 from "./components/Articles/Article7";
import Article8 from "./components/Articles/Article8";
import ScrollToTop from './components/ScrollToTop'; 


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
            <Route path="/Articles/ma-cuisine-étudiante-!" element={<Article3 />} />
			<Route path="/Articles/ma-sauce-favorite" element={<Article4 />} />
			<Route path="/Articles/Mes-places-favorites" element={<Article5 />} />
			<Route path="/Articles/innovation-bien-faite" element={<Article6 />} />
			<Route path="/Articles/manger-bien-à-l'aui" element={<Article7 />} />
			<Route path="/Articles/manger-sainement-à-aui" element={<Article8 />} />

        	</Routes>
			<ScrollToTop />
		</div>
	);
}

export default App;
