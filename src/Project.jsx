import { useEffect, useState, useRef } from "react";
import TypingEffect from "./TypingEffect.jsx";

function Project(title, text, image) {

    const [isInView, setIsInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            })
        }, {threshold: 0.5})

        if (ref.current) {
            observer.observe(ref.current)
        }


        return () => {observer.disconnect();}


    }, [])



    return (
        <>
            <div ref={ref} className={`project-container d-flex justify-content-center ${isInView? "opacity-1 float-in" : "opacity-0"}`}>
                <div className="project hover-shadow">
                    <img src="../img/chatImg.png"/>
                    <div className="m-3"> 
                        <h2>&gt;<TypingEffect text="cd chat-app" speed={200}/></h2>
                        <p>project details this is what my Porject is about</p>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}


export default Project