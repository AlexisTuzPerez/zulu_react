
 /* la función que se exporta */
export const getClients = async() => {


    /* Este es el fetch  */
    const response = await fetch('http://localhost:8080/clientes');


    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
  
export default getClients;




export const postClient = async (data) => {
  try {
    const response = await fetch('http://localhost:8080/clientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to save client data.');
    }
  } catch (error) {
    console.error('Error posting client data:', error);
    throw error; // Handle error appropriately
  }
}




export const putClient = async (data,id) => {

  try {
    const response = await fetch("http://localhost:8080/clientes/"+id+"", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to save product data.");
    }

    const result = await response.json();
    return result; // You can return the result if needed, e.g., for success message
  } catch (error) {
    console.error("Error posting product data:", error);
    throw error; // Handle error appropriately
  }
}



export const deleteClient = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/clientes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });


    if (response.status === 204) {
      return response; // Return true if the delete operation is successful
    }}catch{

      throw new Error("Failed to delete product.");

  
    }}