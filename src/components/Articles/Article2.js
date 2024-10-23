import React from 'react';

const Article2 = () => {
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
                    <h1 className="text-2xl font-bold text-[#0E2368] mb-4">“The Astonishing food prices” à Ifrane </h1>
                    <h2 className="text-xl font-semibold text-[#0E2368] mb-2">Par: Zakaria Elharmouzi</h2>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Date: 12/12/2022</h3>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Catégorie: Billet d'Humeur</h3>
                <div className="flex items-center justify-center ">
                    <img
                        src="../images/proof1.jpg"
                        alt="Abdouh"
                        className="w-80 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                     <img
                        src="../images/proof2.jpg"
                        alt="Abdouh"
                        className="w-80 h-100 rounded-lg mb-4 shadow-md pd-4 ml-4"
                    />
                </div>
                <></>

                    <p className="text-sm text-gray-700 mb-2">
                       
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                    Quand je suis arrivé ce semestre à Al Akhawayn, je m'attendais à ce que les prix restent à peu près les mêmes, autant à l'université qu'en ville. Mais j'ai vite remarqué que les prix, surtout pour la nourriture, ont augmenté sans raison claire. Cette hausse concerne autant l'université qu'Ifrane en général, et elle affecte tout le monde ici, particulièrement les étudiants. Le problème devient de plus en plus sérieux pour nous.
                    </p>
                    <h2 className="font-bold">Les prix à l'université</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    Je suis vraiment surpris de voir la différence entre les prix des semestres passés et ceux de ce semestre. Les plats dans les restos de l'université, les boissons à la cafétéria, et même les snacks dans les magasins, tout coûte plus cher. C'est plutôt drôle qu'ils pensent qu'on peut se permettre ça alors qu'on a tous des budgets limités. Les responsables semblent croire qu'on a toujours assez d'argent, mais honnêtement, ce n’est pas toujours le cas.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                    Beaucoup d’étudiants se tournent vers des fast-foods comme BoysFood, car il n'y a pas d'autres alternatives abordables. Comme moi, je me retrouve souvent à manger de la malbouffe ou à me priver de nourriture quand mon cashwallet se vide au milieu du semestre. Avec ces prix, il m'est impossible de faire durer mon cashwallet jusqu'à la fin.
                    </p>
                    <h2 className="font-bold" >Les prix à Ifrane</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    Une solution simple pour régler ce problème serait de cuisiner nous-mêmes. Mais imagine ma frustration en découvrant que l'université ne vend pas de produits de cuisine comme des légumes et des fruits. Et le choc est encore plus grand quand on réalise que ces produits coûtent bien plus cher dans les magasins d’Ifrane que dans d'autres villes !
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                    Les magasins à Ifrane exagèrent souvent les prix des produits, et cela devient frustrant. La différence avec des villes comme Azrou est énorme. Leur justification ? "Ntoma wlad Al Akhawayn", comme si cela était un prétexte pour gonfler les prix. C'est injuste pour nous, étudiants avec des moyens limités, ainsi que pour nos parents qui voient notre lutte pour bien manger.
                    </p>
                    
                    <p className="text-sm text-gray-700 mb-2 ">
                    Ensemble, nous devons exiger une réduction des prix des produits alimentaires et une meilleure accessibilité aux ressources de base. Nous ne pouvons pas laisser les difficultés financières nuire à notre bien-être et à notre capacité à réussir nos études.
                    Il est tres crucial que les responsables comprennent que nous ne sommes pas des « wlad L Akhawayn » à part entière, mais des étudiants avec des besoins et des réalités financières, Comme tous les autres etudiants au maroc.
                    </p>
                    <p className="font-bold	text-sm text-gray-700 mb-2 ">
                   ARRÊTEZ D’ABUSER
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

export default Article2;