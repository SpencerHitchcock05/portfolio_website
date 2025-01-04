import { useEffect, useState, useRef } from "react"
import Dot from "./Dot.jsx"
import Profile from "./Profile.jsx"


function Head() {
    const headImg = useRef()
    const [winScrollY, setWinScrollY] = useState(0);

    const handleScroll = (e) => {
        setWinScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            removeEventListener("scroll", handleScroll)
        }
    }, [])

    const nums = []

    for (let i = 0; i < 512; i++) {
        nums.push(i);
    }

    return (
        <>
            <div  id="head" className="position-absolute justify-content-center">
                {/* <img style={{transform: `translate(0px, ${(winScrollY / 30) - 50}%)`}} ref={headImg} id="head-img" src="../img/headImg.png" alt="head image" /> */}
                {nums.map((data) => {
                    return <Dot key={data} data={{x: (data % 32) * 3, y: Math.floor(data / 32) * 6}}/>
                })}
                <div id="head-info">  
                    <Profile />
                    <div id="head-name">
                        <div>Spencer</div>
                        <div id="name-underline"></div>
                    </div>
                </div>
                <div id="head-gradient"></div>
                

            </div>
        </>
    )
}

export default Head