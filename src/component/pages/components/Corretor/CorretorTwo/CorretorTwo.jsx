import './index.css'
import Colors from '../../../../common/Colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse} from '@fortawesome/free-solid-svg-icons';

export default function CorretorTwo(){
    return(
        <section className='pb-[30px]'>

            <ul className='flex items-center gap-2 pl-[20%] pt-[40px]' style={{backgroundColor:'white'}}>
                <li><FontAwesomeIcon style={{color:Colors().navyBlue}} icon={faHouse} /></li>
                <li className='relative liSecurityPhone flex items-center gap-1'><a href="#" style={{color:Colors().blue}}>Seguro Celular</a></li>
                <li className='relative liCoberturas flex items-center gap-1'style={{color:Colors().blue}} >Localize um corretor</li>
            </ul>

        </section>
    )
}