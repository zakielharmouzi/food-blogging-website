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
                        <h1 className="text-2xl font-bold text-[#0E2368] mb-4">Manger Sainement à l’AUI : Mon Expérience</h1>
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
                            Salut, c’est Mohamed Abbas ! Aujourd'hui, je vais discuter de l'importance de manger sainement à AUI. Avant, je pensais que c'était compliqué et cher, mais je découvre que manger bien peut être facile et économique.
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            Quand je mange des fast-foods et des snacks, je me sens fatigué, comme une fleur qui perd ses pétales. C’est difficile de me concentrer sur mes études. Mais quand je mange des fruits, des légumes, et des plats faits maison, je me sens comme un roi. Manger sain me donne de l'énergie, et je peux mieux réfléchir. C'est essentiel pour réussir à l'école et dans ma vie.
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            Beaucoup de gens disent que manger sain coûte cher. Mais ce n’est pas vrai ! Je vais au Souk du dimanche pour acheter des fruits et légumes frais. C’est moins cher que dans les supermarchés. Par exemple, j’achète des tomates, des oignons, et des courgettes à bon prix. Mon cœur se réjouit.
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            Certaines personnes disent : « Je n’ai pas le temps de cuisiner. » Je comprends, on est tous occupés comme des abeilles. Mais on peut préparer des plats sains en seulement 15-20 minutes. Parfois, je cuisine le dimanche et je garde de la nourriture pour la semaine. Cela me fait gagner du temps, et je peux me concentrer sur mes études.
                        </p>

                        {/* Recipe Section */}
                        <p className="text-sm text-gray-700 mb-2">
                            Voici une recette rapide que j'adore faire : du couscous aux légumes.
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
                            Et voilà, c'est sain, rapide, et pas cher ! Manger bien me donne plus d’énergie, et mon esprit danse. Pourquoi ne pas essayer ?
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
                    <h2 className="font-semibold text-[#0E2368] text-xl">Contact Us</h2>
                    <ul className="flex flex-col space-y-3">
                        <li className="font-normal text-[#646874] text-sm">Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
                        <li className="text-[#646874] text-sm">example2020@gmail.com</li>
                        <li className="text-[#646874] text-sm">(904) 443-0343</li>
                    </ul>
                </div>
                <div className="flex flex-col space-y-3 lg:w-1/4 p-10 lg:pl-40">
                    <h2 className="font-semibold text-[#0E2368] text-xl">More</h2>
                    <ul className="flex flex-col space-y-3">
                        <li className="text-[#646874] text-sm">About Us</li>
                        <li className="text-[#646874] text-sm">Products</li>
                        <li className="text-[#646874] text-sm">Career</li>
                        <li className="text-[#646874] text-sm">Contact Us</li>
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-col-reverse lg:w-1/4 items-center space-y-2 justify-evenly p-10">
                    <p className="text-sm my-4 text-slate-500">© 2022 Food Truck Example</p>
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
