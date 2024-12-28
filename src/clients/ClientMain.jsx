
import LinkButton from '../shared/LinkButton';
import ClientsTable from './ClientsTable';

function ClientMain() {
    return (




        <div className='mainBox'>
        <h1>Clients</h1>


        <ClientsTable/>


        <LinkButton  text={"Home"}   link={"/"} />

    

        </div>

    )
}


export default ClientMain