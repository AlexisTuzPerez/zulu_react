


import { useEffect, useState } from "react";
import getClients from "../services/ClientFetch";
import AddButton from "../shared/AddButton";
import DeleteButton from "../shared/DeleteButton";
import EditButton from "../shared/EditButton";
import ClientForm from "./ClientForm";

import { deleteClient } from "../services/ClientFetch";


function ClientsTable() {


    const [clients, setClients] = useState([]);








    const loadProducts = async () => {
    
                
        try {
            const data = await getClients();


            setClients(data);



        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };




    

    useEffect(() => {
        loadProducts();

    }, []);


    const formComponentFunction = (typeForm, clients, loadProducts, setModalOpen) =>  <ClientForm 
        typeForm={typeForm}
        client={clients} 
        loadProducts={loadProducts} 
        setModalOpen={setModalOpen} />



    const fetchDelete = async (id) => {
        try {    
            const response = await deleteClient(id);
            if (response.status === 204) {
                loadProducts();
            }
        } catch (error) {
            console.error("Error", error);
        }
    };



    return (



        


        <table>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Products Purchased</th>

                    <th> <AddButton formComponent={formComponentFunction} loadProducts={loadProducts}/></th>









                </tr>


            </thead>

            <tbody>


                {/* Should be contained int {} for react to detect its js */}
                {clients.map((client) => (

                    <tr key={client.id}>

                        <td> {client.id}</td>
                        <td> {client.nombre}</td>
                        <td> {client.apellido}</td>
                        <td> {client.telefono}</td>
                        <td> {client.correo}</td>
                        <td> {client.productosComprados}</td>   


                        <td  style={{display: "flex", flexDirection: "row", gap: "10px"}}> 


                            <EditButton formComponent={formComponentFunction} loadProducts={loadProducts} product={client} />


                            <DeleteButton fetchDelete={fetchDelete}  product={client}/>
                        


                            
                                
                        </td>

                    </tr>

         
                   
                ))}


     

             


            </tbody>



            
        </table>
       
    )
}


export default ClientsTable