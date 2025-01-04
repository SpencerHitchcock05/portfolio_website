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
                    <div className=" text-center p-5 text-text">                    
                        I am currently enrolled at Dalhousie University taking my second year of computer science. I am also actively looking for coop/internship 
                        opportunities for the summer of 2025.
                        <br /><br />
                        I started my coding journey in high school where I started coding in my free time where I learned Python and vanilla Javascript/html/css. 
                        This passion led me to taking all of the available computer science courses offered at my high school and eventually led to me pursuing a 
                        bachelors degree in computer science at Dalhousie University.
                        <br /><br />
                        When I'm not working on school or my own personal side projects I am usually enjoying different avenues of art including books, videogames 
                        and music. I also try to get outside and enjoy going to the gym, camping and kayaking with my family

                    </div>
                </div>
            </div>
        </>
    )
}

export default TextBox