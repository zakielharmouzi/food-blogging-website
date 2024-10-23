import React from 'react';

const Article4 = () => {
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

                    <h1 className="text-2xl font-bold text-[#0E2368] mb-4">La sauce soja : ma meilleure amie pour des repas rapides !
Quand la fin de mois inspire la cuisine étudiante.
</h1>
                    <h2 className="text-xl font-semibold text-[#0E2368] mb-2">Par: Nisrine Sadik</h2>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Date: 12/12/2022</h3>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Catégorie: Blog</h3>
                    <p className="text-sm text-gray-700 mb-2">
                    À l’Université, entre les cours, les projets, et le budget serré, manger bien n’est pas toujours facile. Un ingrédient a cependant changé ma façon de cuisiner depuis mon échange au Japon : la sauce soja. Depuis, elle est devenue indispensable dans mon frigo, parfaite pour mes petits plats rapides et délicieux.</p>
                <div className="flex items-center justify-center ">
                    <img
                        src="../images/nissrine1.jpg"
                        alt="Abdouh"
                        className="w-80 h-120 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                <></>
                 <h2 className="font-bold">Ma découverte de la sauce soja au Japon :</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    Pendant mon séjour au Japon, la cuisine était très différente de ce à quoi j’étais habitué. Avec un budget limité, il fallait bien trouver des solutions ! C’est là que la sauce soja est devenue ma petite astuce. Elle rendait mes plats simples plus équilibrés, avec un goût agréable et nourrissant.  </p>
                    <p className="text-sm text-gray-700 mb-2">
                    <div className="flex items-center justify-center ">
                    <img
                        src="../images/nisrrine2.jpg"
                        alt="Abdouh"
                        className="w-80 h-120 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                   </p>
                    <h2 className="font-bold" >De retour à l’université : La sauce soja pour les fins de mois</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    Depuis, même en rentrant à l’Université, la sauce soja reste mon alliée en cuisine. Elle me sauve souvent, surtout en fin de mois quand l’argent manque et que la cantine est fermée. Une fois, après une longue journée de travail, j’ai ouvert mon frigo et j’ai trouvé… une carotte, une courgette, quelques champignons, un peu de sauce tomate et, bien sûr, la sauce soja.
                                       </p>
                                       <div className="flex items-center justify-center ">
                    <img
                        src="../images/nisrinne3.jpg"
                        alt="Abdouh"
                        className="w-80 h-120 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                    <h2 className="font-bold" >Un plat facile pour calmer la faim :</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    J’ai alors coupé mes légumes, ajouté la sauce tomate et la sauce soja, et fait cuire tout ça avec des vermicelles. Avec un peu de sel, c’était parfait ! Ce plat simple et rapide m’a donné l’énergie dont j’avais besoin pour finir ma soirée de travail.</p>
                   
                    <p className="text-sm text-gray-700 mb-2 ">
                    Cuisiner avec ce qu’on a Pour un étudiant, la sauce soja est super pratique ! Elle permet de transformer des restes en plats délicieux et rassasiants, même quand on est à court d’idées. La prochaine fois que vous ne savez pas quoi cuisiner, essayez la sauce soja et laissez parler votre imagination !</p>
                    <h2 className="font-bold" >Petit conseil :</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    Si, comme moi, vous avez un budget serré, lisez aussi l’article de mon ami sur les bons plans pour acheter à petits prix à Ifrane.</p>
                    <h2 className="font-bold" >
Et vous, c’est quoi votre ingrédient magique ?
</h2>
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

export default Article4;