import React from "react";

const About = () => {
	return (
		<div className=" w-full h-full">
		<div className=" flex justify-evenly w-full h-[468px] bg-[#F0F1F7] px-10 lg:mt-36">
			<img alt="about" src="images/girl (lp).png" className=" hidden lg:block w-[384px] " />
			<div className=" flex flex-col justify-center items-center space-y-5 lg:w-1/3 ">
				<h2 className=" text-[#0E2368] font-bold text-center text-3xl ">About Us</h2>
				<span className="text-[#444957] text-sm text-center lg:text-left ">
				Bienvenue sur notre blog culinaire, créé par Ilyas Remmal, Mohamed Abbas, Nisrine Sadik et Zakaria Elharmouzi. Nous partageons notre passion pour une cuisine saine, savoureuse et accessible à tous. Nous croyons fermement que bien manger ne doit pas être compliqué ni coûteux. À travers nos aventures à l’Université Al Akhawayn, nous dévoilons astuces, recettes et anecdotes personnelles pour démontrer que la nutrition peut être à la fois simple et agréable. Notre mission est d’encourager des choix alimentaires équilibrés, d’explorer de nouvelles saveurs et de redécouvrir le plaisir de cuisiner. Que vous soyez étudiant ou simplement en quête de repas astucieux et délicieux, rejoignez-nous pour un voyage culinaire enrichissant!
				</span>
				<button className=" max-w-fit bg-[#E23744] text-white text-sm rounded-full p-2 px-5 ">En savoir plus</button>
			</div>
		</div>
		</div>
	);
};

export default About;
