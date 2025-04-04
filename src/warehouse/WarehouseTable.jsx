






import { useEffect, useState } from "react";
import { deleteWarehouse, getWarehouses } from "../services/WarehouseFetch";

import AddButton from "../shared/AddButton";
import WarehouseForm from "./WarehouseForm.jsx";

import DeleteButton from "../shared/DeleteButton";
import EditButton from "../shared/EditButton";


function WarehouseTable(){


    const [warehouses, setWarehouses] = useState([])


    const loadWarehouses = async ()=>{
        try {

            const data = await getWarehouses()
            setWarehouses(data)            
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            
        }
    }

    useEffect(() =>{
        loadWarehouses()
    },[])


    const formComponentFunction = (typeForm,product,loadProducts,setModalOpen) =>  <WarehouseForm  
        
        typeForm={typeForm} 
        product={product} 
        loadProducts={loadProducts} 
        setModalOpen={setModalOpen} 
    
    />
         

    const fetchDelete = async (id) => {
        try {
    
            await deleteWarehouse(id);

            
            loadWarehouses()
    
        } catch (error) {
            console.error("Error", error);
        }
    
    
    
    }

    


    return(
        <table>


            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
            
                    <th> <AddButton    formComponent={formComponentFunction}  loadProducts={loadWarehouses}    /></th>

                 
                </tr>

            </thead>



            <tbody>
          
                {warehouses.map(product => (


                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.nombre}</td>
                        <td>{product.autor}</td>
                        <td>{product.categoria}</td>
                        <td>{product.fecha_lanzamiento}</td>
                        <td>{product.precio}</td>


                        <td style={{ display: "flex", flexDirection: "row", gap: "10px" }}>

                            

                            <EditButton       formComponent={formComponentFunction} loadProducts={loadWarehouses}  product={product}  />
                                
                            <DeleteButton  loadProducts={loadWarehouses}  fetchDelete={fetchDelete} product={product}/>


                        </td>

                    </tr>

                )
                )}

            </tbody>

        </table>
      
    )
}


export default WarehouseTable