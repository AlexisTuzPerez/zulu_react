

import AddButton from "../shared/AddButton";

import { useEffect, useState } from "react";

import getProducts from "../services/ProductFetch";

import { deleteProduct } from "../services/ProductFetch";
import DeleteButton from "../shared/DeleteButton";
import EditButton from "../shared/EditButton";
import ProductForm from "./ProductForm";


function ProductsTable({ }) {



    const [products, setProducts] = useState([ ])

    const loadProducts = async () => {
    
                    
    
        try {
            const data = await getProducts();


            setProducts(data);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }



    };




    useEffect(() => {
    
    
    loadProducts();
    
    }, []);







    const formComponentFunction = (typeForm,product,loadProducts,setModalOpen) =>  <ProductForm  
        
        typeForm={typeForm} 
        product={product} 
        loadProducts={loadProducts} 
        setModalOpen={setModalOpen} />
                                                                                    
   


    const fetchDelete = async (id) => {
        try {
    
            const response = await deleteProduct(id);
            
                loadProducts()
    
        } catch (error) {
            console.error("Error", error);
        }
    
    
    
    }

    


    return (

        <table >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Autor</th>
                    <th>Category</th>
                    <th>Relase Date</th>
                    <th>Price</th>


                    <th> <AddButton    formComponent={formComponentFunction} loadProducts={loadProducts}   /></th>

                 
                </tr>

            </thead>

            <tbody>
          
                {products.map(product => (


                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.nombre}</td>
                        <td>{product.autor}</td>
                        <td>{product.categoria}</td>
                        <td>{product.fecha_lanzamiento}</td>
                        <td>{product.precio}</td>


                        <td style={{ display: "flex", flexDirection: "row", gap: "10px" }}>

                            

                            <EditButton       formComponent={formComponentFunction} loadProducts={loadProducts}  product={product}  />
                                
                            <DeleteButton  loadProducts={loadProducts}  fetchDelete={fetchDelete} product={product}/>


                        </td>

                    </tr>

                )
                )}

            </tbody>


              






            </table>






    )
}

export default ProductsTable