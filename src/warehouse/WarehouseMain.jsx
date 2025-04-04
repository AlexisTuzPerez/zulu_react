


import WarehouseTable from "./WarehouseTable.jsx";

import LinkButton from "../shared/LinkButton";


function WarehouseMain (){
    return(
        <>


            <div className='mainBox'>

                

                <h1>Warehouses</h1>

                <WarehouseTable/>
                <LinkButton text={"Home"} link={"/"} />



            </div>




        </>
    )
}


export default WarehouseMain