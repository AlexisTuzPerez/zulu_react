

import { faCompactDisc, faHouse, faLayerGroup, faStore, faUser } from '@fortawesome/free-solid-svg-icons';


import IconAndTextLink from "./IconAndTextLink";

// eslint-disable-next-line react/prop-types
function Header({title}) {
    return (

        <header >
            <div className="header">

                <h1 style={{ borderRight: "1px solid black",  paddingRight: "20px", paddingLeft:"20px"} }>Zulu {title}</h1>
                <IconAndTextLink icon={faHouse} text={"Home"} link={"/"} />
                <div style={{ display: "flex", flex: 1 }}></div>



                <nav style={{display: "flex", gap: "10px", flexDirection: "row"}}>
                    <IconAndTextLink icon={faUser} text={"Clients"} link={"/clients"} />
                    <IconAndTextLink icon={faCompactDisc} text={"Products"} link={"/products"} />
                    <IconAndTextLink icon={faStore} text={"Warehouse"} link={"/warehouse"} />
                    <IconAndTextLink icon={faLayerGroup} text={"Stock"} link={"/"} />
                    {/* <IconAndTextLink icon={faMoneyCheckDollar} text={"Sale"} link={"/"} /> */}


                </nav>
        











                
            </div>

        </header>

    );
}

export default Header