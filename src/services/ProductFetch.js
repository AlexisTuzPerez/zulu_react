

export const getProducts = async() => {

    const response = await fetch('http://localhost:8080/productos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }
  
export default getProducts;


  // src/utils/api.js
export const postProduct = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/productos", {
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
      console.error("Error posting product data:", error);
      throw error; // Handle error appropriately
    }
  };
  



  export const putProduct = async (data,id) => {
    try {
      const response = await fetch("http://localhost:8080/productos/"+id+"", {
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
  };

  export const deleteProduct = async (id) => {
    try {


      // Make sure id is just a number or string, not an object
      const response = await fetch(`http://localhost:8080/productos/${id}`, {
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
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  };
  