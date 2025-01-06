import { useEffect, useRef, useState } from "react"





function Dot(props) {

    const radius = useRef();
    const dot = useRef();
    const mouseDistance = useRef();
    const [dotCoords, setDotCoords] = useState([0,0]);

    const data = props.data

    useEffect(() => {

        let cur = radius.current

        window.addEventListener("mousemove", (e) => {
                const rect = cur.getBoundingClientRect();
                const mouseX = e.clientX - rect.left - 50; 
                const mouseY = e.clientY - rect.top - 50;
                mouseDistance.current = Math.sqrt(Math.pow(mouseX, 2) + Math.pow(mouseY, 2));
                if (mouseDistance.current < 150) {

            

                    

                    // console.log(Math.sin(mouseDistance))

                    

                    setDotCoords([mouseX * -1, mouseY * -1]);

                    // setDotCoords([(50 - Math.abs(mouseX)) * (mouseX / Math.abs(mouseX) * -1), (50 - Math.abs(mouseY)) * (mouseY / Math.abs(mouseY) * -1)]);

                } else {
                    setDotCoords([0,0])

                }
             
            })
        

    }, [])


    return (
        <>
            <div ref={radius} style={{left: `${data.x}vw`, top: `${data.y}vh`}} className="dot-radius">
                <div ref={dot} style={{transform: `translate(${dotCoords[0]}px, ${dotCoords[1]}px) scale(${mouseDistance.current < 150? 1 + ( 150 - Math.sqrt(Math.pow(dotCoords[0], 2) + Math.pow(dotCoords[1], 2))) / 150 : 1 })`}} className="dot"></div>
            </div>
        </>
    )
}


export default Dot