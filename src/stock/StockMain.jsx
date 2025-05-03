import LinkButton from "../shared/LinkButton"


import StockTable from "./StockTable"


function StockMain(){


    return(


        <div className='mainBox'>

            <h1>Stock</h1>

            <StockTable/>

            <LinkButton  text={"Home"}   link={"/"} />

        </div>




    )

}


export default StockMain