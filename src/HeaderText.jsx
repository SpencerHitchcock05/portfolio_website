import { useState, useEffect, useRef } from "react";



function HeaderText() {

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
        }, {threshold: 0.1})

        if (ref.current) {
            observer.observe(ref.current)
        }


        return () => {observer.disconnect();}


    }, [])


    return (
        <>
            <h1 ref={ref} id="name-header" className={`${isInView? "opacity-1 slide-in" : "opacity-0"}`}>Projects</h1>
        </>
    )

}


export default HeaderText