


export const getWarehouses = async () => {


    const response = await fetch('http://localhost:8080/almacen')

    if (!response.ok) {

        throw new Error('Network response was not ok');
    }
    return response.json();


}

export default getWarehouses;



  // src/utils/api.js
  export const postWarehouse = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/almacen", {
        method: "POST",
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
      console.error("Error posting warehouse data:", error);
      throw error; // Handle error appropriately
    }
  };
  



  export const putWarehouse = async (data,id) => {
    try {
      const response = await fetch("http://localhost:8080/almacen/"+id+"", {
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
      console.error("Error posting warehouse data:", error);
      throw error; // Handle error appropriately
    }
  };

  export const deleteWarehouse = async (id) => {
    try {


      // Make sure id is just a number or string, not an object
      const response = await fetch(`http://localhost:8080/almacen/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete product.");
      }
  
      if (response.status === 204) {
        return { message: "Product deleted successfully" };
      }
  

      return response;
    } catch (error) {
      console.error("Error deleting warehouse:", error);
      throw error;
    }
  };
  