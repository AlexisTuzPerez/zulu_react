
import LinkButton from '../shared/LinkButton';


function HomeMain() {
    return (

        <main className='mainBox'>
            <h1>Menú Principal</h1>
            <LinkButton  text={"Clients"}   link={"/clients"} />
            <LinkButton  text={"Products"}   link={"/products"} />
            <LinkButton  text={"Stores"}   link={"/"} />
            <LinkButton  text={"Stock"}   link={"/stock"} />
            <LinkButton  text={"Sales"}   link={"/"} />

        </main> 

    )
}

export default HomeMain