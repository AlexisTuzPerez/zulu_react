
import { useEffect, useState } from "react";

import getProducts from "../services/ProductFetch";
import getWarehouses from "../services/WarehouseFetch";
import SaveButton from "../shared/SaveButton";


function StockForm({    typeForm, stock, loadStock, setModalOpen }) {



    
    const nullStock = {
        productoId: "",
        almacenId: "",
        cantidad: ""
        
    }


    const [formData, setFormData] = useState( typeForm == "edit" ? stock : nullStock) ;






    const [warehouses, setWarehouses] = useState([]);

    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);

        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    const loadWarehouses = async () => {

        try {
            const data = await getWarehouses();
            setWarehouses(data);



        } catch (error) {
            console.error("Error fetching warehouses:", error);
        }
    };


    useEffect(() => {
        loadWarehouses();
    
    }, []);




    useEffect(() => {
        loadProducts();
    }, []);


    const isFormValid = Object.values(formData).every((value) => value !== "" /* &&
    Object.values(isChanged).every((value) => value === true) */)




    const handleInput = (e) => {

        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }





    const getInputStyle = (field) => {
        if (formData[field] === "") {
            return { backgroundColor: " rgba(195, 195, 195, 0.94)" }; 
        }
        return { backgroundColor: "rgb(126, 231, 151)"  };
    };
   


    const handleSave =  async (e) => {

        e.preventDefault();
        console.log("save")
        console.log(formData)


        if(typeForm == "add") {
            console.log("add")
        }else{
            console.log("edit")
        }
    }

    return(

        <form className="form" onSubmit={handleSave}>

            <strong style={ { paddingBottom: "15px"} }>Select product and the warehouse where added</strong>

            <label htmlFor="productId">Product Id</label>

            <select
                id="productId"
                name="productoId"

                className="input"
                value={formData.productoId}
                onChange={handleInput}

                style={getInputStyle("productoId")}
            >
                <option value="" disabled> Product Id</option>

                {
                    products.map((product) => (
                        <option key={product.id} value={product.id}>
                            { "Id: " + product.id + "  " + "Nombre: " + product.nombre}
                        </option>
                    ))
                }

            </select>

            <label htmlFor="warehouseId">Warehouse Id</label>



            <select
                id="warehouseId"
                name="almacenId"

                className="input"
                value={formData.almacenId}


                onChange={handleInput}
                style={getInputStyle("almacenId")}
            >

                <option value="" disabled> Warehouse Id</option>
                
                {
                    warehouses.map(warehouse => (
                        <option key={warehouse.id} value={warehouse.id}>
                            { "Id: " + warehouse.id + "  " + "Nombre: " + warehouse.nombre}
                        </option>
                    ))
                }



            </select>



            <label htmlFor="quantity">Quantity</label>


            <input
                id="quantity"
                name="cantidad"
                type="number"
                className="input"
                value={formData.cantidad}
                onChange={handleInput}
                style={getInputStyle("cantidad")}
                min="0"
            />


            <SaveButton  disabled={!isFormValid}   />



            
   

        </form>
    )

}


export default StockForm