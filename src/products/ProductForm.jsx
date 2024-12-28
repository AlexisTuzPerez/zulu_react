
import { useState } from "react";
import { postProduct, putProduct } from "../services/ProductFetch";
import SaveButton from "../shared/SaveButton";


function ProductForm({typeForm,product,loadProducts,setModalOpen}) {


   
    const nullProduct = {

        nombre: "",
        autor: "",
        categoria: "",
        fecha_lanzamiento: "",
        precio: "",


    }

    /* Save the info from state */

    /*into use state you insert the default info */
    const [ formData, setFormData ] = useState( typeForm == "edit" ? product : nullProduct);




    const [isChanged, setChanged] = useState({
        
        nombre: false,
        autor: false,
        categoria: false,
        fecha_lanzamiento: false,
        precio: false

    })



    /* handleInput is the function that save changes when you type  */
    const handleInput = (e) => {

        const { name, value } = e.target

        setFormData( (prevData)=> ( {
            ...prevData,

            /*  if the name is price, we need to convert it to a number, if not fust  put it as value  */
            [name]: name == "precio" ? parseFloat(value) || 0: value
            
        }))
        setChanged( (prevChanges) => ({
            ...prevChanges,
            [name]:  value !== formData[name]
        }))




    }

    const handleSave =  async (e) => {

        e.preventDefault();


        if(typeForm == "add") {

            try {

                const result = await postProduct(formData);





                setFormData(nullProduct)

                loadProducts()

                setModalOpen(false)








                
            } catch (error) {
                console.log("Error Saving", error)
            }
        } else{



            try {

                const result = await putProduct(formData,product.id);




             

                loadProducts()


                setModalOpen(false)







            } catch (error) {
                console.log("Error Saving", error)
            }




        }

    }




    /* a function that return the style of the input , depending if its "" or not */
    /* if nothing changed, you return black  */
    const getInputStyle = (field) => {

     /*    if( !isChanged[field]){
            return {borderColor: "black"}
        }  */
        if (formData[field] === ""  /* || !isChanged[field] */) {
          return { backgroundColor: " rgba(195, 195, 195, 0.94)" }; 
        }

        return { backgroundColor: "rgb(126, 231, 151)"  };

    };
    


    const isFormValid = Object.values(formData).every((value) => value !== "" /* &&
                        Object.values(isChanged).every((value) => value === true) */)










    

    return (

        <form onSubmit={handleSave} method="post" className="form">

            <strong style={ { paddingBottom: "15px"} }>Add the Product Info</strong>

            <label htmlFor="nombre">  Name  </label>

             <input 
                type="text" 
                id="nombre"  
                name="nombre"  
                className="input"
                value={formData.nombre}
                onChange={handleInput}
                style={getInputStyle("nombre")}

            />

            <label htmlFor="autor">  Autor  </label>
                <input 
                type="text" 
                id="autor" 
                name="autor" 
                className="input"
                value={formData.autor}
                onChange={handleInput}
                style={getInputStyle("autor")}
                    
                
            />

            <label htmlFor="categoria">  Category  </label>

            <select 
                id="categoria" 
                name="categoria" 
                className="input"
                value={formData.categoria}
                onChange={handleInput}
                style={getInputStyle("categoria")}
            >
                <option value="" disabled>Category</option>

                <option value="Other">  Other</option>
                <option value="Album">  Album</option>
                <option value="Single">  Single</option>


            </select>



            <label htmlFor="fecha_lanzamiento">  Release Date  </label>
            <input 
                type="date" 
                id="fecha_lanzamiento" 
                name="fecha_lanzamiento" 
                className="input"
                value={formData.fecha_lanzamiento} 
                onChange={handleInput}

                style={getInputStyle("fecha_lanzamiento")}
            />



            <label htmlFor="precio">  Price  </label>


            <input 
                type="number" 
                id="precio" 
                name="precio"
                className="input" 
                min="0.01"

                step="0.01"
                value={formData.precio}
                onChange={handleInput}

                style={getInputStyle("precio")}
                    
            />
            
    

            <SaveButton  disabled={!isFormValid}   />
        
        </form>
       

        )
}


export default ProductForm;  