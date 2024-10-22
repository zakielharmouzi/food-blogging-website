import React, { useRef } from "react"; // Import useRef
import Banner from "./Banner";
import About from "./About";
import Articles from "./Articles";

const Body = () => {
    const articlesRef = useRef(null); // Create a ref for the Articles section

    const scrollToContent = () => {
        if (articlesRef.current) {
            articlesRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to Articles
        }
    };

    return (
        <div className="flex flex-col">
            <Banner onButtonClick={scrollToContent} />
            <About />
            <div ref={articlesRef}> {/* Attach the ref here */}
                <Articles />
            </div>
        </div>
    );
};

export default Body;
