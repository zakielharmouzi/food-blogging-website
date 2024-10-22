import React from 'react';

const Article5 = () => {
    return (
        <>
            {/* Header Section */}
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

            {/* Main Content */}
            <div className="article-container flex flex-col lg:flex-row">
                {/* Left Advertisement */}
                <div className="ad-container w-full lg:w-1/4 p-4 flex justify-center">
                    <img
                        src="../images/tajine.png"
                        alt="Tajine Advertisement"
                        className="max-w-full h-80"
                    />
                </div>

                {/* Article Section */}
                <div className="main-content w-full lg:w-1/2 p-4">
                    <div className="billet-dhumeur p-10 bg-slate-50 rounded-lg shadow-md">
                        <h1 className="text-2xl font-bold text-[#0E2368] mb-4">
                            Les Meilleures Adresses Étudiantes à Ifrane : Où Manger Bien et Pas Cher !
                        </h1>
                        <h2 className="text-xl font-semibold text-[#0E2368] mb-2">Par: Zakaria Elharmouzi</h2>
                        <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Date: 12/12/2022</h3>
                        <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Catégorie: Blog</h3>

                        {/* Article Content */}
                        <p className="text-sm text-gray-700 mb-2">
                            Ifrane, cette petite ville nichée dans les montagnes de l'Atlas, regorge de trésors culinaires et de paysages enchanteurs. Si tu es étudiant(e) et que tu cherches de bons plans pour te régaler sans te ruiner, voici une liste de lieux que je te conseille vivement. Chaque endroit a une petite histoire qui te donnera envie d’y aller, encore et encore !
                        </p>

                        <h2 className="font-bold">1. Azgourou Mountain : Un Tajine au Cœur de la Nature</h2>
                        <div className="flex items-center justify-center ">
                    <img
                        src="../images/zakaria1.jpg"
                        alt="Abdouh"
                        className="w-80 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                        <p className="text-sm text-gray-700 mb-2">
                        Rien de tel qu’un délicieux tajine après une balade en pleine nature. À Azgourou Mountain, les montagnes t’appellent, et les arbres semblent te chuchoter des secrets d’autrefois. Pendant que tu savoures un tajine fumant, les singes deviennent tes compagnons de table. L'air pur te chuchote à l'oreille que tout va bien et le tajine, cuit lentement au feu de bois, te prend dans ses bras pour un réconfort total. Voilà un vrai festin sauvage, où même les soucis s’évaporent comme la vapeur du tajine !
                        </p>

                        <h2 className="font-bold">2. Hani : Pour les Gourmands au Grand Cœur</h2>
                        <div className="flex items-center justify-center ">
                    <img
                        src="../images/zakaria2.jpg"
                        alt="Abdouh"
                        className="w-80 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                        <p className="text-sm text-gray-700 mb-2">
                        Si tu as une envie irrésistible de douceur, Hani est l’endroit rêvé. Les pâtisseries te font les yeux doux derrière la vitrine, te promettant une histoire d'amour sucrée à chaque bouchée. Les gaufres y sont si croustillantes qu'elles chantent sous tes dents, et les gâteaux te murmurent des mots doux à l’oreille. Que tu célèbres un succès ou simplement la fin de la journée, Hani sait comment mettre du sucre dans ta vie à petit prix !
                        </p>

                        <h2 className="font-bold">3. For You : Une Soirée Inoubliable</h2>
                        <div className="flex items-center justify-center ">
                    <img
                        src="../images/zakaria3.jpg"
                        alt="Abdouh"
                        className="w-80 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                        <p className="text-sm text-gray-700 mb-2">
                        Envie de sortir un peu plus tard ? For You est le restaurant parfait pour faire danser tes papilles jusqu'au bout de la nuit. Les pizzas croustillantes te font de l'œil, les burgers juteux te séduisent dès le premier regard, et les options légères te font un clin d'œil complice si tu surveilles ta ligne. L’ambiance est toujours au rendez-vous, et For You sait comment transformer une simple soirée en festin amical. C’est l’endroit où la nuit tombe amoureux de ta faim !
                        </p>

                        <h2 className="font-bold">4. Khalti : Le Ftour à Petit Prix</h2>
                        <div className="flex items-center justify-center ">
                    <img
                        src="../images/zakaria4.jpg"
                        alt="Abdouh"
                        className="w-80 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                        <p className="text-sm text-gray-700 mb-2">
                        Le matin à Ifrane, rien de mieux qu’un bon ftour pour bien commencer la journée, et Khalti est l’adresse parfaite. Les msemen dorés t’accueillent avec un sourire croustillant, et l’omelette généreuse t’enlace pour te donner de l’énergie. À Khalti, chaque plat te parle comme une tante attentionnée, te rappelant les petits déjeuners en famille. Ici, le goût de l’amour est dans chaque bouchée, et le petit prix ne fait qu’ajouter à la chaleur de l’accueil.
                        </p>

                        <h2 className="font-bold">5. Crepito : La Créativité Culinaire</h2>
                        <div className="flex items-center justify-center ">
                    <img
                        src="../images/zakaria5.jpg"
                        alt="Abdouh"
                        className="w-80 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                        <p className="text-sm text-gray-700 mb-2">
                        Crepito, c’est le temple des pizzas et des sandwichs à concepts originaux. Les saveurs se bousculent dans ton assiette, créant des explosions de goûts inattendues. Les pizzas s'invitent à ta table avec des combinaisons audacieuses, et les sandwichs te racontent des histoires épicées. Crepito, c’est plus qu’un simple repas : c’est un tour de magie culinaire, où chaque bouchée t’embarque dans une aventure sans te vider les poches. Ici, la créativité est au rendez-vous, et ton estomac te dira merci !
                        </p>

                        <h2 className="font-bold">Conclusion : Ifrane, Une Expérience à Goûter !</h2>
                        <p className="text-sm text-gray-700 mb-2">
                        Que tu sois un(e) fin(e) gourmet(te) ou simplement un étudiant(e) en quête de bons plans, Ifrane a de quoi combler ton appétit et ton cœur. Chaque adresse ici est une invitation à savourer la vie, à se laisser transporter par les saveurs et à créer des souvenirs mémorables. Alors, n’hésite plus, pars à la découverte de ces lieux et fais de chaque repas un moment unique !
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

            {/* Footer Section */}
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
        </>
    );
};

export default Article5;
