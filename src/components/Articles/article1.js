import React from 'react';

const Article1 = () => {
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

            <div className="main-content w-full lg:w-1/2 p-4">
                {/* <h1>Grilled Tomatoes at Home</h1>
                <img src="../images/firstArticles/grilled-tomatoes-1-846x846 3.png" alt="Grilled Tomatoes" />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p> */}

                {/* New Billet d'Humeur Section */}
                <div className="billet-dhumeur p-10 bg-slate-50 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-[#0E2368] mb-4">Faire du sport et bien A person standing in front of a mirror
Descrip tion automatically generatedmanger à AUI, c'est facile ! </h1>
                    <h2 className="text-xl font-semibold text-[#0E2368] mb-2">Par: AUI Student</h2>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Date: 12/12/2022</h3>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Catégorie: Billet d'Humeur</h3>
                <div className="flex items-center justify-center ">
                    <img
                        src="../images/kadsplan.jpg"
                        alt="Abdouh"
                        className="w-80 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                <></>

                    <p className="text-sm text-gray-700 mb-2">
                        Salut mes amis, je découvre quelque chose de vraiment cool. Mon ami Abdouh, un étudiant
                        comme nous, est aussi coach sportif ! Oui, un coach ici, à AUI. Il créé son programme, "Kad’s
                        Plan". Avec lui, tu peux faire du sport, bien manger, et tout ça sans dépenser votre argent. Ça me
                        motive beaucoup. Je me dis pourquoi pas ?
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                        Je pense que manger sainement, c’est difficile. Beaucoup de gens disent qu’il faut acheter
                        des aliments chers ou passer beaucoup de temps à cuisiner. Moi, je n’ai pas le temps et pas d’argent
                        pour ça ! Mais mon ami Abdouh me montre que c’est possible. Il a des idées de repas simples et
                        pas chers. Il me conseille de préparer mes repas. C’est un grand changement pour moi. Au lieu de
                        penser à chaque repas, je prépare tout en une fois pour plusieurs jours. Par exemple, je fais cuire
                        du riz et du poulet un soir, et je peux les manger toute la semaine avec des légumes différents.
                        C’est pratique et ça me fait gagner du temps. Je ne pensais pas que c’était si simple. Maintenant,
                        je ne suis plus stressé pour les repas, et je mange mieux !
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                        Pour le sport, Abdouh ne donne pas seulement des conseils, il m’accompagne à la salle de
                        sport. Je vais m’entraîner avec lui plusieurs fois par semaine. Nous faisons des exercices pour les
                        bras, les jambes, et le ventre. Je n’étais pas très bon en sport, mais avec Abdouh, c’est différent. Il
                        explique chaque exercice de manière claire. Même si je suis débutant, je comprends vite. Il m’aide
                        à bien faire les mouvements et à rester motivé. À la fin de la séance, j'étais fatigué, mais c’est une
                        bonne fatigue. Je sens que j’ai bien travaillé, et je suis fier de moi. Je me sens plus fort et plus
                        confiant. C’est incroyable comment le sport peut changer mon humeur. En plus, ça m’aide à mieux
                        me concentrer en classe. Je suis impatient maintenant d’aller à la salle.
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                        Alors, si vous voulez vous remettre en forme à l'AUI sans vous ruiner, je vous recommande
                        de vous adresser à Abdouh. Il est super serviable et gentil, et offre des conseils sur l'alimentation
                        saine et l'entraînement efficace pour 770 MAD, ce qui est négociable. Si vous pensez que c'est
                        cher, vous n'avez qu'à comparer avec les frais de consultation d'autres entraîneurs ! Vous pouvez
                        même consulter ses conseils sur sa page Instagram. Franchement, si je peux le faire, tout le monde
                        peut le faire. Alors pourquoi ne pas essayer ?
                    </p>
                    
                    <p className="text-sm text-gray-700 mb-2">
                        Voici le lien vers cette page:
                        <a href="https://www.instagram.com/kads_plan?igsh=NGdpM2dyejRreDVx" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            https://www.instagram.com/kads_plan?igsh=NGdpM2dyejRreDVx
                        </a>
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

export default Article1;
