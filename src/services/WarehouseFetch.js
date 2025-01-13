


export const getWarehouses = async () => {




    const response = await fetch('http://localhost:8080/almacen')

    if (!response.ok) {

        throw new Error('Network response was not ok');
    }
    return response.json();




}

export default getWarehouses;