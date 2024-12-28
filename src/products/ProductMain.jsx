import LinkButton from "../shared/LinkButton";

import ProductsTable from "./ProductsTable";

function ProductMain() {


    return (


        <main className='mainBox'>



            <h1 id="title">Products</h1>

            <ProductsTable  />


            <LinkButton text={"Home"} link={"/"} />



        </main>

    )


}
export default ProductMain