import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Article data with image URLs
const firstArticles = [
	{
		name: "”food prices” à Ifrane",
		url: "images/increasing.png", // Updated image URL
		text: "Quand je suis arrivé ce semestre à Al Akhawayn, je m'attendais à ce que les prix restent à peu près les mêmes, autant à l'université qu'en ville. Mais j'ai vite remarqué que les prix, surtout pour la nourriture...",
		category: "Billet d'Humeur",
	},
	{
		name: "Ma Cuisine Étudiante !",
		url: "images/mashups.jpeg", // Updated image URL
		text: "Ces derniers temps, un nouveau trend gastronomique explose sur TikTok : les mash-ups de recettes classiques. Le principe est simple : mélanger deux plats connus pour en faire un seul. Imagine une pizza...",
		category: "Billet d'Humeur",
	},
	{
		name: "Ma sauce favorite",
		url: "images/soysauce.jpg", // Updated image URL
		text: "À l’Université, entre les cours, les projets, et le budget serré, manger bien n’est pas toujours facile. Un ingrédient a cependant changé ma façon de cuisiner depuis mon échange au Japon : la sauce soja.",
		category: "Dans mon frigo ?",
	},
	{
		name: "Mes places favorites",
		url: "images/tajine1.png", // Updated image URL
		text: "Ifrane, cette petite ville nichée dans les montagnes de l'Atlas, regorge de trésors culinaires et de paysages enchanteurs. Si tu es étudiant(e) et que tu cherches de bons plans pour te régaler sans te...",
		category: "Gérer mon budget",
	},
	{
		name: "KADS Plan",
		url: "images/kadsplan.jpg", // Updated image URL
		text: "Salut à tous ! Aujourd'hui, je veux vous partager une découverte super intéressante : mon ami Abdouh, étudiant comme nous, est aussi coach sportif ! Oui, un coach ici, à AUI, qui a créé son propre programme appelé Kad’s Pla...",
		category: "Billet d'Humeur",
	},
	{
		name: "Innovation bien faite",
		url: "images/ilyas1.jpeg", // Updated image URL
		text: "L'innovation est au centre des affaires, une entreprise qui innove est une entreprise qui réussit. C’est le cas pour la marque marocaine Chergui, qui produit des différentes gammes de prix laitiers. Cette année...",
		category: "Billet d'Humeur",
	},
	{
		name: "Manger Bien à l'AUI",
		url: "images/ilyas4.jpg", // Updated image URL
		text: "Si comme moi, tu trouves qu'équilibrer entre les sorties et les besoins budgétaires de nourritures est difficile, alors cet article est pour toi. Manger sans vider son portefeuille est tout à fait possible, et je va...",
		category: "Manger sainement",
	},
	{
		name: "Manger Sainement à AUI",
		url: "images/grp1.png", // Updated image URL
		text: "Découvrir l'importance de manger sainement à AUI a été une révélation pour moi. Avant, je pensais que c'était compliqué et coûteux, mais j’ai appris que manger équilibré peut être simple et abordable....",
		category: "Recettes",
	},

	// {
	// 	name: "Delicious Pasta Salad",
	// 	url: "images/soysauce.jpg", // Updated image URL
	// 	text: "A refreshing and easy pasta salad recipe for summer....",
	// 	category: "Recipes",
	// },
	// {
	// 	name: "Delicious Pasta Salad",
	// 	url: "images/soysauce.jpg", // Updated image URL
	// 	text: "A refreshing and easy pasta salad recipe for summer....",
	// 	category: "Recipes",
	// },
	
];

const secondArticles = [
	{
		name: "aaaa",
		url: "images/tajine.png", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
		category: "Recipes",
	},
	{
		name: "Crunchwrap Supreme",
		url: "images/tajine.png", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
		category: "Recipes",
	},
	{
		name: "Broccoli Cheese Soup",
		url: "images/tajine.png", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
		category: "Recipes",
	},
];

const categories = ["Toutes", "Dans mon frigo ?","Gérer mon budget", "Recettes", "Manger sainement",  "Billet d'Humeur"];

const Articles = () => {
	const [counter, setCounter] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState("Toutes"); // State to track selected category
	const navigate = useNavigate();

	let cardsList;
	if (counter === 2) {
		cardsList = secondArticles;
	} else {
		cardsList = firstArticles;
	}

	// Filter articles based on selected category
	const filteredArticles = selectedCategory === "Toutes"
		? cardsList
		: cardsList.filter((article) => article.category === selectedCategory);

	const handleNext = () => {
		setCounter(2);
		navigate(`/articles/page/2`);
	};

	const handlePrev = () => {
		setCounter(1);
		navigate(`/articles/page/1`);
	};

	const handleReadMore = (name) => {
		const formattedName = name.replace(/\s+/g, '-').toLowerCase();
		navigate(`/articles/${formattedName}`);
	};

	const handleCategoryChange = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div className="flex flex-col p-10 pt-16 lg:px-36">
			{/* Latest Articles */}
			<div className="text-4xl lg:text-5xl font-bold text-[#0E2368] mb-12">
				Nos Derniers Articles
			</div>

			{/* Category Filter */}
			<div className="flex justify-center mb-6">
				{categories.map((category) => (
					<button
						key={category}
						onClick={() => handleCategoryChange(category)}
						className={`border px-4 py-2 mx-2 rounded-lg ${
							selectedCategory === category
								? "bg-red-500 text-white"
								: "bg-gray-200"
							
						}`}>
						{category}
					</button>
				))}
			</div>

			{/* Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{filteredArticles.map((item) => (
					<div
						key={item.name}
						className="flex flex-col border w-80 lg:w-[22rem] border-slate-300 bg-slate-50 rounded-3xl p-4"
					>
						<img
							alt={item?.name}
							src={item.url}
							className="my-2 object-cover h-48"
						/>
						<div className="flex flex-col flex-grow justify-between">
							<div className="flex flex-col items-center lg:items-start space-y-4">
								<span className="text-[#0E2368] text-center text-[1.35rem] lg:text-right font-bold lg:text-[1.5rem]">
									{item?.name}
								</span>
								<span className="text-sm lg:text-xs line-clamp-5 lg:line-clamp-3">
									{item?.text}
								</span>
							</div>
							<button
								onClick={() => handleReadMore(item.name)}
								className="border border-black p-2 px-5 text-sm mt-12 rounded-full self-end"
							>
								En savoir plus
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Pagination buttons
			<div className="flex justify-center items-center space-x-4 text-sm py-10">
				<button
					onClick={() => handlePrev()}
					className="w-6 pb-1 px-1 rounded-md border border-slate-700 visited:bg-slate-200"
				>
					&lt;
				</button>
				<span className="text-xl">{counter}/2</span>
				<button
					onClick={() => handleNext()}
					className="w-6 pb-1 px-1 rounded-md border border-slate-700 visited:bg-slate-200"
				>
					&gt;
				</button>
			</div> */}
		</div>
	);
};

export default Articles;
