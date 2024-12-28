import { useState, useRef, useEffect } from "react"
import Project from "./Project.jsx" 
import TypingEffect from "./TypingEffect.jsx"
import HeaderText from "./HeaderText.jsx"
import TextBox from "./TextBox.jsx"
import projectJSON from "./projects.json"


function Content() {

    const [inView, setInView] = useState(false);
    const header = useRef();


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setInView(true)
                    observer.disconnect()
                }
            })
        })

        if (header.current) {
            observer.observe(ReferenceError.current)
        }

        return observer.disconnect()
    })
    
    let key = 0;

    return (
        <>
            <div className="d-flex justify-content-center w-100">
                <div id="content" className="">
                    <TextBox />
                    <HeaderText />
                    {projectJSON.map((data) => {
                        key++;
                        return <Project key={key} data={{data}}/>
                    })}
                </div>
            </div>
        </>
    )
}


export default Content