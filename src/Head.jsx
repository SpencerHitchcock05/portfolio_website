import { useEffect, useState, useRef } from "react"


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

    return (
        <>
            <div  id="head" className="position-absolute justify-content-center">
                <img style={{transform: `translate(0px, ${(winScrollY / 30) - 50}%)`}} ref={headImg} id="head-img" src="../img/headImg.png" alt="head image" />
            </div>
        </>
    )
}

export default Head