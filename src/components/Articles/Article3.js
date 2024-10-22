import React from 'react';

const Article3 = () => {
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
                    <h1 className="text-2xl font-bold text-[#0E2368] mb-4">Mash-Ups : Mon Nouveau Coup de Cœur en Cuisine Étudiante !</h1>
                    <h2 className="text-xl font-semibold text-[#0E2368] mb-2">Par: Nisrine Sadik</h2>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Date: 12/12/2022</h3>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Catégorie: Billet d'Humeur</h3>
                <div className="flex items-center justify-center ">
                    <img
                        src="../images/nissrine6.jpg"
                        alt="Abdouh"
                        className="w-90 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                <></>
                    <p className="text-sm text-gray-700 mb-2">
                    Ces derniers temps, un nouveau trend gastronomique explose sur TikTok : les mash-ups de recettes classiques. Le principe est simple : mélanger deux plats connus pour en faire un seul. Imagine une pizza qui devient un tacos ou un burger mélangé avec des sushis ! C’est fou, et ça donne envie d’essayer tout de suite.                    </p>
                    <h2 className="font-bold">Comment J'ai Découvert les Mash-Ups sur TikTok</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    Une soirée typique d'étudiante : révisions tardives, petite faim, et surtout pas envie de cuisiner longtemps. En défilant sur TikTok pour faire une pause, je tombe sur une vidéo de pizza… mais avec une base de pommes de terre. Mes yeux s'illuminent, et je pense :<p className="font-bold"> "C’est rapide, simple, et ça coûte pas cher, parfait pour moi !"</p> </p>
                    <p className="text-sm text-gray-700 mb-2">
                    Beaucoup d’étudiants se tournent vers des fast-foods comme BoysFood, car il n'y a pas d'autres alternatives abordables. Comme moi, je me retrouve souvent à manger de la malbouffe ou à me priver de nourriture quand mon cashwallet se vide au milieu du semestre. Avec ces prix, il m'est impossible de faire durer mon cashwallet jusqu'à la fin.
                    </p>
                    <h2 className="font-bold" >La Recette Étudiante Facile à Suivre</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    J’ai tout de suite été attirée par cette recette. Pourquoi ? Parce qu’il ne faut que quelques ingrédients : des pommes de terre, de la sauce tomate, du fromage, et quelques garnitures comme du pepperoni ou des olives. La simplicité même, mais avec un twist amusant. J’aime l'idée de pouvoir faire une "pizza" sans pâte, surtout quand il n’y en a pas dans le frigo !     
                                       </p>
                    <h2 className="font-bold" >Préparation : Ma Pizza-Mash-Up aux Pommes de Terre</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    J’ai commencé par faire bouillir les pommes de terre. Une fois cuites, je les ai écrasées légèrement et disposées sur une plaque de cuisson. J’étais excitée comme une enfant, à l’idée de voir le résultat. J’ai ensuite ajouté une bonne dose de sauce tomate, de la mozzarella, et quelques rondelles de pepperoni. Tout ça au four pendant 10-15 minutes, et l’odeur qui s’est répandue dans la cuisine était incroyable.
                    </p>
                    <h2 className="font-bold" >Le Goût : Un Mélange Surprenant et Délicieux</h2>
                    <p className="text-sm text-gray-700 mb-2 ">
                    Quand j’ai enfin goûté cette "pizza", je n’en revenais pas. La douceur des pommes de terre écrasées se marie trop bien avec la sauce tomate et le fromage fondu. Ça a le goût de la pizza, mais avec une texture différente. C’est à la fois réconfortant et amusant, parfait pour une soirée de révisions entre amis ou même seul(e) devant une série Netflix.
                    </p>
                    <h2 className="font-bold" >Les Avantages des Mash-Ups pour les Étudiants</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    Ce que j’aime le plus avec les mash-ups, c’est qu’on peut les faire avec ce qu’on a sous la main. Pas besoin d’ingrédients compliqués ni de techniques de chef. C’est économique, rapide, et surtout, c’est l’occasion d’essayer quelque chose de nouveau sans prise de tête. Certains mash-ups sont un peu bizarres, mais c’est ça le fun :<p className="font-bold">  tu ne sais jamais vraiment si ça va être un succès ou un raté, mais tu t’amuses quand même ! </p>
                    </p>
                    <h2 className="font-bold" >Amène un Peu de Fun dans ta Cuisine Étudiante !</h2>
                    <p className="text-sm text-gray-700 mb-2">
                    Alors, si toi aussi tu es étudiant(e), en galère pour trouver des idées de repas sympas, je te conseille de tester un mash-up. C’est un moyen simple de mettre un peu de fun dans tes repas, d’économiser de l’argent, et surtout, de découvrir de nouvelles saveurs sans trop d’effort. Lance-toi, qui sait, tu trouveras peut-être ta prochaine recette préférée !
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
                        <h2 className="font-semibold text-[#0E2368] text-xl">Contact Us</h2>
                        <ul className="flex flex-col space-y-3">
                            <li className="font-normal text-[#646874] text-sm">
                                Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate
                                near YTM Market, XYZ-343434
                            </li>
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

export default Article3;