import { useState, useEffect, useRef } from "react";



function TextBox(props) {

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
            <div ref={ref} className={`text-box-container ${isInView? "opacity-1 float-in" : "opacity-0"} d-flex justify-content-center align-items-center`}>
                <div className="text-box graph">
                    <div className="w-75 text-center p-5 ">                    
                        THis is imy text its all about me hahhahaahahahahah heheheheheh
                        THis is imy text its all about me hahhahaahahahahah heheheheheh
                        THis is imy text its all about me hahhahaahahahahah heheheheheh
                        THis is imy text its all about me hahhahaahahahahah heheheheheh
                        THis is imy text its all about me hahhahaahahahahah heheheheheh
                        THis is imy text its all about me hahhahaahahahahah heheheheheh
                        THis is imy text its all about me hahhahaahahahahah heheheheheh
                        THis is imy text its all about me hahhahaahahahahah heheheheheh
                        THis is imy text its all about me hahhahaahahahahah heheheheheh
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextBox