import React from "react";

const About = () => {
	return (
		<div className=" w-full h-full">
		<div className=" flex justify-evenly w-full h-[468px] bg-[#F0F1F7] px-10 lg:mt-36">
			<img alt="about" src="images/girl (lp).png" className=" hidden lg:block w-[384px] " />
			<div className=" flex flex-col justify-center items-center space-y-5 lg:w-1/3 ">
				<h2 className=" text-[#0E2368] font-bold text-center text-3xl ">About Us</h2>
				<span className="text-[#444957] text-sm text-center lg:text-left ">
				Sur notre blog culinaire, Ilyas Remmal, Mohamed Abbas, Nisrine Sadik et, Zakaria Elharmouzi, sommes passionnés par le partage de notre amour pour la bonne cuisine, saine et abordable. Nous croyons que bien manger ne doit pas être compliqué ni coûteux. À travers nos expériences à l’Université Al Akhawayn, nous partageons des astuces, des recettes et des histoires personnelles pour le prouver. Notre objectif est d'inspirer les autres à faire des choix nutritifs, à explorer de nouvelles saveurs et à prendre plaisir à cuisiner, que vous soyez étudiant ou simplement à la recherche de repas intelligents et délicieux.
				</span>
				<button className=" max-w-fit bg-[#E23744] text-white text-sm rounded-full p-2 px-5 ">En savoir plus</button>
			</div>
		</div>
		</div>
	);
};

export default About;
