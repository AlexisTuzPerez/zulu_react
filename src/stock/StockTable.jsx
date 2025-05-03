
import { useEffect, useState } from "react";

import getStocks from "../services/StockFetch";

import StockForm from "./StockForm";

import AddButton from "../shared/AddButton";
import EditButton from "../shared/EditButton";


function StockTable() {



    const [stock, setStock] = useState([]);




    const loadStock = async () => {
        try{
            const data = await getStocks();
            setStock(data);

        }catch(error){
            console.log("Error", error);
        }
        
    }


    useEffect(() => {
        loadStock();

    }, []);



    const formComponentFunction = (typeForm, stock, loadStock, setModalOpen) =>  <StockForm 
    typeForm={typeForm}
    stock={stock} 
    loadStock={loadStock} 
    setModalOpen={setModalOpen} />


    







    return (


        <table>

            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Warehouse Id</th>
                    <th>Amount</th>
                    <th><AddButton formComponent={formComponentFunction} loadProducts={loadStock}></AddButton></th>



                </tr>
            </thead>

            <tbody>

                {stock.map((stock) => (

                    <tr key={stock.productoId + " " + stock.almacenId}>
                        <td>{stock.productoId}</td>
                        <td>{stock.almacenId}</td>
                        <td>{stock.cantidad}</td>



                        <td style={{ display: "flex", flexDirection: "row", gap: "10px" }}>

                            

                            <EditButton       formComponent={formComponentFunction} loadProducts={loadStock}  product={stock}  />
                                



                        </td>

                    
                    </tr> 
                ))}


                
            </tbody>

 

        </table>


    )
}


export default StockTable


