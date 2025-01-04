import { useRef, useEffect, useState } from "react";




function Nav() {

    const [dropdownUp, setDropdownUp] = useState(true);

    const toggleDropdown = () => { 
        setDropdownUp(!dropdownUp)
    }


    return (
        <>
            <nav>     
                <h2 className="px-3 text-nowrap">Spencer Hitchcock</h2>
                <a href="#name-header">Projects</a>
                <a target="_blank" href="https://github.com/SpencerHitchcock05">Github</a>
                <a target="_blank" href="https://www.linkedin.com/in/spencer-hitchcock/">LinkedIn</a>
                <a target="_blank" href="mailto:sp797499@dal.ca">Email</a>
                <div>
                    <button onClick={toggleDropdown} id="dropdown">
                        &#9660;
                    </button>

                    {!dropdownUp && (
                        <div id="dropdown-menu">
                            <a href="#name-header">Projects</a>
                            <a target="_blank" href="https://github.com/SpencerHitchcock05">Github</a>
                            <a target="_blank" href="https://www.linkedin.com/in/spencer-hitchcock/">LinkedIn</a>
                            <a target="_blank" href="mailto:sp797499@dal.ca">Email</a>        
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Nav;