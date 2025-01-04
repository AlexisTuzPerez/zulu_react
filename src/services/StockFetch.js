

export const getStocks = async () => {

    const response = await fetch('http://localhost:8080/productoAlmacen');


    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();


}   


export default getStocks