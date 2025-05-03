/* eslint-disable react/prop-types */

import { useState } from "react";
import { postWarehouse, putWarehouse } from "../services/WarehouseFetch";
import SaveButton from "../shared/SaveButton";


function ProductForm({typeForm,product,loadProducts,setModalOpen}) {


   
    const nullWarehouse = {
        nombre: "",
    }


    const [ formData, setFormData ] = useState( typeForm == "edit" ? product : nullWarehouse);



    const handleInput = (e) => {

        const { name, value } = e.target

        setFormData( (prevData)=> ( {
            ...prevData,


            [name]: name == "precio" ? parseFloat(value) || 0: value
            
        }))



    }

    const handleSave =  async (e) => {

        e.preventDefault();


        if(typeForm == "add") {

            try {

                await postWarehouse(formData);
                loadProducts()
                setModalOpen(false)


                
            } catch (error) {
                console.log("Error Saving", error)
            }
        } else{



            try {

                await putWarehouse(formData,product.id);


                loadProducts()
                setModalOpen(false)

    



            } catch (error) {
                console.log("Error Saving", error)
            }




        }

    }




    const getInputStyle = (field) => {

     
        if (formData[field] === "" ) {
          return { backgroundColor: " rgba(195, 195, 195, 0.94)" }; 
        }

        return { backgroundColor: "rgb(126, 231, 151)"  };

    };
    




    const isFormValid = Object.values(formData).every((value) => value !== "" )










    

    return (

        <form onSubmit={handleSave} method="post" className="form">

            <strong style={ { paddingBottom: "15px"} }>Add the Warehouse Info</strong>

            <label htmlFor="nombre">  Name  </label>

             <input 
                type="text" 
                id="nombre"  
                name="nombre"  
                className="input"
                value={formData.nombre}
                onChange={handleInput}
                style={getInputStyle("nombre")}


                /* place holder is the text within, the requeire avoid saving when null */

                placeholder="Teclea tu nombre"
                required

            />


            <SaveButton  disabled={!isFormValid}   />
        
        </form>
       

        )
}


export default ProductForm;  