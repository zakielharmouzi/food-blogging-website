import React from "react";

const Footer = () => {
	return (
		<div className=" flex flex-col lg:flex-row bg-slate-100 p-10 ">

			<div className=" flex justify-center items-center p-16 lg:p-2 lg:w-1/4 ">
				<img alt="logo" src="images/logo2.jpg" className="w-40 h-30"	/>
			</div>

			<div className=" flex flex-col  space-y-3 lg:w-1/4 p-10 ">
				<h2 className=" font-semibold text-[#0E2368] text-xl">Contactez-nous</h2>
				<ul className=" flex flex-col space-y-3 ">
					<li className=" font-normal text-[#646874] text-sm ">
					Al Akhawayn University, Ifrane
					</li>
					<li className=" text-[#646874] text-sm ">Z.elharmouzi@aui.ma</li>
					<li className=" text-[#646874] text-sm ">(212) 12345678</li>
				</ul>
			</div>

			<div className=" flex flex-col space-y-3 lg:w-1/4 p-10 lg:pl-40">
				<h2 className=" font-semibold text-[#0E2368] text-xl ">More</h2>
				<ul className=" flex flex-col space-y-3">
					<li className=" text-[#646874] text-sm ">About Us</li>
					<li className=" text-[#646874] text-sm ">Products</li>
					<li className=" text-[#646874] text-sm ">Career</li>
					<li className=" text-[#646874] text-sm ">Contactez-nous</li>
				</ul>
			</div>

			<div className=" flex flex-col lg:flex-col-reverse lg:w-1/4 items-center space-y-2 justify-evenly p-10 ">
				<p className=" text-sm my-4 text-slate-500">Made with love by the best french group</p>
				<h2 className=" text-xl font-semibold hidden lg:block text-[#0E2368] order-2 ">Social Media</h2>
				<ul className=" flex justify-center space-x-5 ">
					<li><img alt="instagram" src="images/icons/instagram.png" className=" h-4 w-4" /></li>
					<li><img alt="twitter" src="images/icons/twitter.png" className=" h-4 w-4" /></li>
					<li><img alt="facebook" src="images/icons/facebook.png" className=" h-4 w-4" /></li>
					
				</ul>
			</div>
		</div>
	);
};

export default Footer;
