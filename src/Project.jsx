import TypingEffect from "./TypingEffect.jsx";

function Project(title, text) {


    return (
        <>
            <div className="project-container d-flex justify-content-center">
                <div className="project rounded shadow">
                    &gt;<TypingEffect text="cd chat-app" speed={50}/>
                </div>
                
            </div>
        </>
    )
}


export default Project