import React from "react";

import { faHouse } from '@fortawesome/free-solid-svg-icons';


import IconAndTextLink from "./IconAndTextLink";

function Header({title}) {
    return (

        <header >
            <div className="header">

                <h1 style={{ borderRight: "1px solid black",  paddingRight: "20px", paddingLeft:"20px"} }>Zulu {title}</h1>
                <IconAndTextLink icon={faHouse} text={"Home"} link={"/"} />


                
            </div>

        </header>

    );
}

export default Header