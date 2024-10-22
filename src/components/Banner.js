import React from "react";

const Banner = () => {
	return (
		<div className=" h-full w-full m-0 flex flex-col lg:flex-row-reverse ">
			<div className=" relative w-full lg:w-1/2 flex ">
				<img alt="rectangle" src="images/tajine.png" className="absolute top-0 right-0 w-[800px] h-[655px] " />
				<img
					alt="vector"
					src="images/Vector 1.png"
					className=" absolute top-0 right-0 w-[588px] "
				/>
				<button className=" absolute top-6 right-6 lg:top-10 lg:right-10 rounded-full border text-xs lg:text-sm  border-white text-white p-2 px-4 ">
					Get in touch
				</button>
			</div>
			{/* second container */}
			<div className=" w-full lg:w-1/2 flex flex-col p-20 lg:space-y-16 ">
				{/* logo */}
				<div className=" hidden lg:block ">
					<img alt="food-truck" src="images/logo.jpg" 
					className=" w-200 h-20 rounded-full"
					/>
				</div>
				{/* content */}
				<div className=" flex flex-col items-center space-y-8">
					<span className=" text-center lg:text-left text-4xl text-[#0E2368] lg:text-6xl font-bold w-full lg:w-2/3">
					    Découvrez les{" "}
						<span className=" font-sans text-red-500 ">meilleurs</span>{" "}
						plats marocains
					</span>
					<span className=" text-xs text-center lg:text-left lg:text-lg lg:w-2/3 text-slate-600 ">
					Des produits de santé fabriqués naturellement pour un meilleur soin et soutien de votre corps.
					</span>
					<button className=" bg-red-500 text-white text-lg p-3 px-4 w-50 rounded-full">
					Explorez maintenant !
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
