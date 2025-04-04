



import { faGithub } from '@fortawesome/free-brands-svg-icons';
import IconAndTextLink from './IconAndTextLink';

const Footer = () => {
  return (



    <footer >
        <div className='footer'> 

          <strong style={{paddingTop: "10px"}}>   Desarrollado por: Gabriel Alexis Tuz Pérez</strong>


          <IconAndTextLink icon={faGithub} text={"GitHub"} link={"https://github.com/AlexisTuz"} />



        </div>
    </footer>

   
  );
};

export default Footer;