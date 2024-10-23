import React from 'react';

const Article6 = () => {
    return (
        
        <>
        <>
        <header className="bg-red-500 text-white p-4">
            <nav className="flex justify-between items-center">
                <div>
                <img
                    src="../images/logo2.jpg"
                    alt="Tajine Advertisement"
                    className="h-12"
                    />
                </div>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-gray-300">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-300">About</a></li>
                    <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
        </header>
         
        </>
        <div className="article-container flex flex-col lg:flex-row">
            {/* Left Advertisement */}
            <div className="ad-container w-full lg:w-1/4 p-4 flex justify-center">
                <img
                    src="../images/tajine.png" // Replace with the path to your tajine advertisement image
                    alt="Tajine Advertisement"
                    className="max-w-full h-80" />
            </div>
            {/* adadada */}

            <div className="main-content w-full lg:w-1/2 p-4">
                {/* <h1>Grilled Tomatoes at Home</h1>
                <img src="../images/firstArticles/grilled-tomatoes-1-846x846 3.png" alt="Grilled Tomatoes" />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p> */}

                {/* New Billet d'Humeur Section */}
                <div className="billet-dhumeur p-10 bg-slate-50 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-[#0E2368] mb-4">Innovation faite de la bonne façon </h1>
                    <h2 className="text-xl font-semibold text-[#0E2368] mb-2">Par: Ilyas Remmal</h2>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Date: 12/12/2022</h3>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Catégorie: Billet d'Humeur</h3>
                <div className="flex items-center justify-center ">
                    <img
                        src="../images/ilyas2.jpg"
                        alt="Abdouh"
                        className="w-120 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                <></>

                    <p className="text-sm text-gray-700 mb-2">
                    L'innovation est au centre des affaires, une entreprise qui innove est une entreprise qui réussit. C’est le cas pour la marque marocaine Chergui, qui produit des différentes gammes de prix laitiers. Cette année, l'entreprise leader au marché des produits laitier marocain, a lancé un nouveau pro innovant, Chergui Sport. Un yaourt à boire bien protéiné, destiné aux sportifs. Depuis son lancement, ce produit a eu un grand succès, moi-même je l’ai acheté, et j’ai beaucoup aimé les différents goûts. Le premier, c’est le goût de banane, le deuxième c’est le goût de vanille, et le troisième, c’est le goût de mangue. Ce produit nutritif, est vendu en deux tailles : celle de 450 g et l’autre de 900 g. 
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                    À mon avis, le succès de ce nouveau produit est lié à sa très bonne qualité et à la campagne de marketing très créative utilisée par l’entreprise. Cette dernière était basée sur le sponsoring de différents athlètes très connus au Maroc, comme Youssef Bakkali, fameux athlète ayant plusieurs médailles d’or dans les courses de grandes distances, même au derniers Jeux Olympiques à Paris. Personnellement, je consomme ce yaourt à boire souvent et surtout dans les périodes où je m'entraîne régulièrement car son contenu bien protéiné me permet de consommer les macronutriments dont j’ai besoin pour nourrir et soutenir la croissance de mes muscles.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                    Pour conclure, l'innovation est très importante, et dans le cas de Chargé Sport, l'innovation a permis de créer un produit très populaire et nutritif, et je vous invite tous à l'essayer.
                    </p>
            
                    
                    
                </div>

               

               
            </div>

            {/* Right Advertisement */}
            <div className="ad-container w-full lg:w-1/4 p-4 flex justify-center">
                <img
                    src="../images/tajine.png"
                    alt="Tajine Advertisement"
                    className="max-w-full h-80" />
            </div>
        </div>
        <>
         {/* Contact Section */}
         <div className="flex flex-col lg:flex-row bg-slate-100 p-10">
                    <div className="flex justify-center items-center p-16 lg:p-2 lg:w-1/4">
                        <img alt="logo" src="../images/logo2.jpg" className="w-40 h-30" />
                    </div>

                    <div className="flex flex-col space-y-3 lg:w-1/4 p-10">
                        <h2 className="font-semibold text-[#0E2368] text-xl">Contactez-nous</h2>
                        <ul className="flex flex-col space-y-3">
                            <li className="font-normal text-[#646874] text-sm">
                                Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate
                                near YTM Market, XYZ-343434
                            </li>
                            <li className="text-[#646874] text-sm">Z.elharmouzi@aui.ma</li>
                            <li className="text-[#646874] text-sm">(212) 12345678</li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-3 lg:w-1/4 p-10 lg:pl-40">
                        <h2 className="font-semibold text-[#0E2368] text-xl">More</h2>
                        <ul className="flex flex-col space-y-3">
                            <li className="text-[#646874] text-sm">About Us</li>
                            <li className="text-[#646874] text-sm">Products</li>
                            <li className="text-[#646874] text-sm">Career</li>
                            <li className="text-[#646874] text-sm">Contactez-nous</li>
                        </ul>
                    </div>

                    <div className="flex flex-col lg:flex-col-reverse lg:w-1/4 items-center space-y-2 justify-evenly p-10">
                        <p className="text-sm my-4 text-slate-500">Made with love by the best french group</p>
                        <h2 className="text-xl font-semibold hidden lg:block text-[#0E2368] order-2">Social Media</h2>
                        <ul className="flex justify-center space-x-5">
                            <li><img alt="instagram" src="../images/icons/instagram.png" className="h-4 w-4" /></li>
                            <li><img alt="twitter" src="../images/icons/twitter.png" className="h-4 w-4" /></li>
                            <li><img alt="facebook" src="../images/icons/facebook.png" className="h-4 w-4" /></li>
                        </ul>
                    </div>
                </div>
        
         {/* Additional Information Section
         <div className="flex flex-col bg-gray-200 p-10 max-width-full">
                    <h2 className="font-semibold text-[#0E2368] text-xl mb-4">Stay Updated</h2>
                    <p className="text-gray-700 mb-4">
                        Subscribe to our newsletter for the latest updates and promotions!
                    </p>
                    <form className="flex flex-col space-y-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 border border-gray-300 rounded"
                            required />
                        <button
                            type="submit"
                            className="bg-[#0E2368] text-white p-2 rounded hover:bg-blue-700"
                        >
                            Subscribe
                        </button>
                    </form>
                </div> */}
        </></>
       
    );
};

export default Article6;