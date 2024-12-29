

import { useState } from "react";
import { postClient, putClient } from "../services/ClientFetch";

import SaveButton from "../shared/SaveButton";



function ClientForm({typeForm, client, loadProducts, setModalOpen}) {



    const nullClient = {

        nombre: "",
        apellido: "",
        telefono: "",
        correo: "",
        productosComprados: "",
   
    }



    const [formData, setFormData] = useState( typeForm == "edit" ? client: nullClient) ;






    const handleChange = (e) => {



        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    }




    const getInputStyle = (field) => {

        if (formData[field] === "") {
          return { backgroundColor: " rgba(195, 195, 195, 0.94)" }; 

        }else{
            return { backgroundColor: "rgb(126, 231, 151)"  };


        }

    }




    const handleSave =  async (e) => {
        
        e.preventDefault();




        if(typeForm == "add") {



            try {

                const result = await postClient(formData);
                loadProducts()
                setModalOpen(false)

            } catch (error) {
                
            }
        } else {







            try {
                const result = await putClient(formData, formData.id);

 

                loadProducts()

                setModalOpen(false)


            }catch (error) {

                console.log("Error en el fetch" + error)
                
            }
        }


        
    }


 
    const isFormValid =  Object.values(formData).every((value) => value !== "" ); 





    return (



        <form className="form" onSubmit={handleSave}>

            <strong style={{paddingBottom: "15px"}}>Add the Clients Info</strong>


            <label htmlFor = "name"> Name</label>


            <input 

                type="text" 
                name="nombre" 
                id="name" 
                className="input"
                value={formData.nombre}
                style={getInputStyle("nombre")}
                onChange={handleChange}
            > 
             
            </input>



            <label htmlFor = "lastName"> Last Name</label>

            <input 
                type="text"
                name="apellido"
                id="lastName"
                className="input"
                value={formData.apellido}
                style={getInputStyle("apellido")}
                onChange={handleChange}
            
            >

            </input>


            <label htmlFor = "phone"> Phone</label>

            <input 
                type="number"
                name="telefono"
                id="phone"
                className="input"


                value={formData.telefono}
                style={getInputStyle("telefono")}
                onChange={handleChange}
            
            >

            </input>


            <label htmlFor = "email"> Email</label>

            <input 
                type="text"
                name="correo"
                id="email"
                className="input"
                value={formData.correo}
                style={getInputStyle("correo")}
                onChange={handleChange}
            
            >

            </input>


            <label htmlFor = "productsPurchased">  Products Purchased</label>

            <input 
                type="text"
                name="productosComprados"
                id="productsPurchased"
                className="input"
                value={formData.productosComprados}
                style={getInputStyle("productosComprados")}
                onChange={handleChange}
            
            >

            </input>



            <SaveButton disabled={!isFormValid} />






        </form>



    )
}



export default ClientForm