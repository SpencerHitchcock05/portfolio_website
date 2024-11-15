import { useState, useRef, useEffect } from "react"
import Project from "./Project.jsx" 
import TypingEffect from "./TypingEffect.jsx"



function Content() {


    useEffect(() => {

    })
    

    return (
        <>
            <div className="d-flex justify-content-center w-100">
                <div id="content" className="">
                    <h1 id="name-header" className="m-5">&gt;<TypingEffect text="Spencer" /></h1>
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </>
    )
}


export default Content