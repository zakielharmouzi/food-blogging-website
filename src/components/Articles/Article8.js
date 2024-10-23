import React from 'react';

const Article8 = () => {
    return (
        <>
            {/* Header */}
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

            {/* Article Content */}
            <div className="article-container flex flex-col lg:flex-row">
                {/* Left Advertisement */}
                <div className="ad-container w-full lg:w-1/4 p-4 flex justify-center">
                    <img
                        src="../images/tajine.png"
                        alt="Tajine Advertisement"
                        className="max-w-full h-80"
                    />
                </div>

                {/* Main Content */}
                <div className="main-content w-full lg:w-1/2 p-4">
                    {/* Billet d'Humeur Section */}
                    <div className="billet-dhumeur p-10 bg-slate-50 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold text-[#0E2368] mb-4">Manger Sainement à l’AUI : Une Expérience Surprenante</h1>
                        <h2 className="text-xl font-semibold text-[#0E2368] mb-2">Par: Mohamed Abbas</h2>
                        <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Date: 22/10/2024</h3>
                        <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Catégorie: Blog</h3>

                        {/* Article Image */}
                        <div className="flex items-center justify-center ">
                            <img
                                src="../images/ilyas3.jpg"
                                alt="Mohamed Abbas"
                                className="w-100 h-80 rounded-lg mb-4 shadow-md pd-4"
                            />
                        </div>

                        {/* Article Text */}
                        <p className="text-sm text-gray-700 mb-2">
                        Découvrir l'importance de manger sainement à AUI a été une révélation pour moi. Avant, je pensais que c'était compliqué et coûteux, mais j’ai appris que manger équilibré peut être simple et abordable.
                        </p>
                        <h2 className="font-bold">L'Impact de la Malbouffe</h2>
                        <p className="text-sm text-gray-700 mb-2">
                        Les fast-foods et les snacks ont souvent un effet négatif sur mon énergie, me laissant fatigué comme une fleur fanée. La concentration devient alors difficile. À l’inverse, consommer des fruits, des légumes et des plats faits maison me redonne de la vitalité. Manger sainement booste non seulement mon énergie, mais aussi ma clarté mentale, essentielle pour réussir à l’école et dans la vie.
                        </p>
                        <h2 className="font-bold">Manger Sainement à Petit Prix</h2>
                        <p className="text-sm text-gray-700 mb-2">
                        Beaucoup pensent que manger sainement revient cher. Pourtant, ce n'est pas le cas ! Chaque dimanche, je vais au Souk pour acheter des fruits et légumes frais à des prix raisonnables. Par exemple, les tomates, les oignons et les courgettes sont bien moins chers qu’au supermarché, ce qui est un vrai plaisir pour mon portefeuille.
                        </p>
                        <h2 className="font-bold">L'Impact de la Malbouffe</h2>
                        <p className="text-sm text-gray-700 mb-2">
                        Certains disent : « Je n’ai pas le temps de cuisiner. » Je comprends, nous sommes tous très occupés. Cependant, préparer des repas sains peut prendre seulement 15 à 20 minutes. Parfois, je cuisine le dimanche et je conserve les plats pour la semaine. Cela me permet de gagner du temps et de rester concentré sur mes études.
                        </p>
                        <h2 className="font-bold">L'Recette Express : Couscous aux Légumes</h2>

                        {/* Recipe Section */}
                        <p className="text-sm text-gray-700 mb-2">
                        Je vous partage ici une de mes recettes préférées, simple et rapide à réaliser
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Ingrédients :</strong> <br />
                            - Couscous <br />
                            - Oignon, tomate, courgette, carotte <br />
                            - Épinards <br />
                            - Huile d’olive, sel, et poivre
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Préparation :</strong>
                        </p>
                        <ol className="list-decimal list-inside text-sm text-gray-700 mb-10">
                            <li>Je prépare le couscous avec de l’eau bouillante.</li>
                            <li>Je fais revenir les légumes dans un peu d’huile.</li>
                            <li>Je mélange le tout avec le couscous, et j’ajoute du sel et du poivre.</li>
                        </ol>

                        {/* Conclusion */}
                        <p className="text-sm text-gray-700 mb-2">
                        Et voilà ! Un plat sain, rapide et économique qui me donne de l’énergie et de la bonne humeur. Pourquoi ne pas essayer ?
                        </p>
                    </div>
                </div>

                {/* Right Advertisement */}
                <div className="ad-container w-full lg:w-1/4 p-4 flex justify-center">
                    <img
                        src="../images/tajine.png"
                        alt="Tajine Advertisement"
                        className="max-w-full h-80"
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col lg:flex-row bg-slate-100 p-10">
                <div className="flex justify-center items-center p-16 lg:p-2 lg:w-1/4">
                    <img alt="logo" src="../images/logo2.jpg" className="w-40 h-30" />
                </div>
                <div className="flex flex-col space-y-3 lg:w-1/4 p-10">
                    <h2 className="font-semibold text-[#0E2368] text-xl">Contactez-nous</h2>
                    <ul className="flex flex-col space-y-3">
                        <li className="font-normal text-[#646874] text-sm">Al Akhawayn University, Ifrane</li>
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
        </>
    );
};

export default Article8;
