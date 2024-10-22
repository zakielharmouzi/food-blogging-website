import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Article data with image URLs
const firstArticles = [
	{
		name: "KADS Plan",
		url: "images/kadsplan.jpg", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s....",
		category: "Planning",
	},
	{
		name: "”food prices” à Ifrane",
		url: "images/increasing.png", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
		category: "Economy",
	},
	{
		name: "Mon Cuisine Étudiante !",
		url: "images/mashups.jpeg", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
		category: "Food",
	},
	{
		name: "Mon sauce favoris",
		url: "images/soysauce.jpg", // Updated image URL
		text: "A refreshing and easy pasta salad recipe for summer....",
		category: "Recipes",
	},
	{
		name: "Mes place Favoris",
		url: "images/tajine.png", // Updated image URL
		text: "A refreshing and easy pasta salad recipe for summer....",
		category: "Recipes",
	},
	{
		name: "Innovation faite de la bonne façon",
		url: "images/ilyas1.jpeg", // Updated image URL
		text: "A refreshing and easy pasta salad recipe for summer....",
		category: "innovation",
	},
	{
		name: "Bien Manger à AUI Sans Se Ruiner",
		url: "images/ilyas4.jpg", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
		category: "Economy",
	},
	{
		name: "",
		url: "images/ilyas4.jpg", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry....",
		category: "Economy",
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

const categories = ["Toutes", "Planning", "Economy", "Food", "Recipes"]; // Category list

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
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
								Read More
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
