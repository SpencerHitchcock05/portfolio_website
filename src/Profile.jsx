import { useRef, useEffect, useState } from "react";


function Profile() {

    const ref = useRef();
    const [degree, setDegree] = useState();

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const rect = ref.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - 150; 
            const mouseY = e.clientY - rect.top - 150;  
            
            let degrees = Math.atan(mouseY / mouseX) * (180 / Math.PI) -90;

            if (mouseX > 0) {
                degrees = Math.atan(mouseY / mouseX) * (180 / Math.PI) +90;
            }

            setDegree(degrees)

            
        })

        console.log(ref)
    }, [])

    

    return (
        <>
        <div ref={ref} style={{backgroundImage : `linear-gradient(${degree}deg, black, #ffffff)`}} id="profile-container" className="d-flex justify-content-center align-items-center">
            <img id="profile-img" src="../img/headImg.png" alt="" />
        </div>
        </>
    )
}


export default Profile