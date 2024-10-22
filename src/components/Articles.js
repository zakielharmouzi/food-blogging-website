// Articles.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Article data with image URLs
const firstArticles = [
	{
		name: "KADS Plan",
		url: "images/kadsplan.jpg", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
	{
		name: "Snacks for Travel",
		url: "images/tajine.png", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
	{
		name: "Post-workout Recipes",
		url: "images/tajine.png", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
	{
		name: "Delicious Pasta Salad",
		url: "images/tajine.png", // Updated image URL
		text: "A refreshing and easy pasta salad recipe for summer aaaaaaaaaaaaaaaaaaa Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.....",

	}, // New fourth card
];

const secondArticles = [
	{
		name: "How to Grill Corn",
		url: "images/tajine.png", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
	{
		name: "Crunchwrap Supreme",
		url: "images/tajine.png", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
	{
		name: "Broccoli Cheese Soup",
		url: "images/tajine.png", // Updated image URL
		text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley....",
	},
];

const Articles = () => {
	const [counter, setCounter] = useState(1);
	const navigate = useNavigate();

	let cardsList;
	if (counter === 2) {
		cardsList = secondArticles;
	} else {
		cardsList = firstArticles;
	}

	const handleNext = () => {
		setCounter(2);
		navigate(`/articles/page/2`);
	};

	const handlePrev = () => {
		setCounter(1);
		navigate(`/articles/page/1`);
	};

	const handleReadMore = (name) => {
		const formattedName = name.replace(/\s+/g, '-').toLowerCase(); // Format name for URL
		navigate(`/articles/${formattedName}`);
	};

	return (
		<div className="flex flex-col p-10 pt-16 lg:px-36">
			{/* Latest Articles */}
			<div className="text-4xl lg:text-5xl font-bold text-[#0E2368] mb-12">
				Nos Derniers Articles
			</div>

			{/* cards */}
			<div className="flex flex-col space-y-7 items-center space-x-1.5 lg:items-baseline lg:flex-row justify-between">
				{cardsList.map((item) => (
					 <div key={item.name}  
					 className="flex flex-col border w-80 lg:w-[22rem] border-slate-300 bg-slate-50 rounded-3xl p-4"  
					 >  
					 <img alt={item?.name} src={item.url} className="my-2 object-cover h-48" /> {/* Set a fixed height for images */}  
					 <div className="flex flex-col flex-grow justify-between"> {/* Add flex-grow here */}  
					 <div className="flex flex-col items-center lg:items-start space-y-4">  
					 <span className="text-[#0E2368] text-center text-[1.35rem] lg:text-right font-bold lg:text-[1.5rem]">  
					 {item?.name}  
					 </span>  
					 <span className="text-sm lg:text-xs line-clamp-5 lg:line-clamp-3">  
					 {item?.text}  
					 </span>  
					 </div>  
					 <button onClick={() => handleReadMore(item.name)}  
					 className="border border-black p-2 px-5 text-sm mt-12 rounded-full self-end"  
					 >  
					 Read More </button>  
					 </div>  
					 </div>  
				))}
			</div>

			{/* Pagination buttons */}
			<div className=" flex justify-center items-center space-x-4 text-sm py-10 ">
				<button
					onClick={() => setCounter(1)}
					className=" w-6 pb-1 px-1 rounded-md border border-slate-700 visited:bg-slate-200 ">
					&lt;
				</button>
				<span className=" text-xl">{counter}/2</span>
				<button
					onClick={() => setCounter(2)}
					className=" w-6 pb-1 px-1 rounded-md border border-slate-700 visited:bg-slate-200 ">
					&gt;
				</button>
			</div>
		</div>
	);
};

export default Articles;
