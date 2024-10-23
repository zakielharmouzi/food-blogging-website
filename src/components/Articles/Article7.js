import React from 'react';

const Article7 = () => {
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
                    <h1 className="text-2xl font-bold text-[#0E2368] mb-4">Bien manger sans se ruiner à l'Université Al Akhawayn d'Ifrane </h1>
                    <h2 className="text-xl font-semibold text-[#0E2368] mb-2">Par: Ilyas Remmal</h2>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Date: 12/12/2022</h3>
                    <h3 className="text-lg font-semibold text-[#0E2368] mb-2">Catégorie: Blog</h3>
                <div className="flex items-center justify-center ">
                    <img
                        src="../images/ilyas3.jpg"
                        alt="Abdouh"
                        className="w-100 h-80 rounded-lg mb-4 shadow-md pd-4"
                    />
                </div>
                <></>

                <p className="text-sm text-gray-700 mb-2">
                        Si comme moi, tu trouves qu'équilibrer entre les sorties et les besoins budgétaires de nourritures est difficile, alors cet article est pour toi. Manger sans vider son portefeuille est tout à fait possible, et je vais partager avec vous 6 astuces que j'ai découvertes en vivant à Ifrane.
                    </p>

                    <ol className="list-decimal list-inside text-sm text-gray-700 mb-10 ">
                        <li>Préparer ses propres repas est la meilleure façon d'économiser. Après une longue journée de cours, cuisiner peut sembler fatigant, mais des plats simples ne prennent pas beaucoup de temps. Cuisiner avec des amis rend l'expérience plus agréable et permet d’augmenter les économies.</li>
                        <li>Faire ses courses au marché hebdomadaire à Timdikin le dimanche peut vraiment faire la différence. Les fruits et légumes y sont généralement moins chers, et c'est l'occasion de soutenir les producteurs locaux.</li>
                        <li>Planifier ses repas à l'avance aide à gérer son budget. Avant de faire les courses, fais une liste et respecte-la pour éviter les achats impulsifs.</li>
                        <li>Remplacer les sodas et jus industriels par de l'eau est meilleur pour la santé et pour ta poche. Garde une bouteille réutilisable avec toi pour rester hydraté toute la journée.</li>
                        <li>Ne gaspille pas les restes ! Les surplus peuvent être utilisés pour de nouveaux plats, comme incorporer des légumes cuits dans une soupe.</li>
                        <li>Enfin, participe aux événements organisés sur le campus. Souvent, il y a des ateliers ou soirées avec de la nourriture gratuite ou à petit prix.</li>
                    </ol>

                    <p className="text-sm text-gray-700 mb-2">
                        En résumé, bien manger sans se ruiner à l'Université Al Akhawayn est possible avec une bonne organisation et des décisions avisées. Essayez ces astuces et partagez vos expériences !
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

export default Article7;