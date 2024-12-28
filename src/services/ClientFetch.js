
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

