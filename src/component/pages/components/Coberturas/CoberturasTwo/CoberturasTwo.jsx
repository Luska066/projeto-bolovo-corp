import './index.css'
import Colors from '../../../../common/Colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import SectionHomeThree from '../../Home/SectionHomeThree/SectionHomeThree';
import CoberturasThree from '../CoberturasThree/CoberturasThree';

export default function CoberturasTwo(){
    return(
        <section className={`bg-[${Colors().lightBlue}]`}>

            <ul className='flex items-center gap-2 pb-[40px]'>
                <li><FontAwesomeIcon color={Colors().blue} icon={faHouse} /></li>
                <li className='relative liSecurityPhone flex items-center gap-1'><a href="#" style={{color:Colors().blue}}>Seguro Celular</a></li>
                <li className='relative liCoberturas flex items-center gap-1'style={{color:Colors().navyBlue}} >Coberturas</li>
            </ul>
            <SectionHomeThree/>
            <CoberturasThree/>

        </section>
    )
}