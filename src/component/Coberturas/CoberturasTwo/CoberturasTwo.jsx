import './index.css'
import Colors from '../../common/Colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import SectionHomeThree from '../../pages/SectionHomeThree/SectionHomeThree';
import CoberturasThree from '../CoberturasThree/CoberturasThree';

export default function CoberturasTwo(){
    return(
        <section className='py-[40px]' style={{backgroundColor:Colors().lightBlue}}>

            <ul className='flex items-center gap-2 pl-[20%]'>
                <li><FontAwesomeIcon icon={faHouse} /></li>
                <li className='relative liSecurityPhone flex items-center gap-1'><a href="#" style={{color:Colors().blue}}>Seguro Celular</a></li>
                <li className='relative liCoberturas flex items-center gap-1' >Coberturas</li>
            </ul>
            <SectionHomeThree/>
            <CoberturasThree/>
            <div className='flex flex-col items-center'>
                <h2 className='text-[44px]' style={{color:Colors().navyBlue}}>O que não cobrimos</h2>
                <p className='text-[20px] mb-[16px]' style={{color:Colors().navyBlue}}>Aparelhos com mais de dois anos da data da compra e não disponíveis no cotador</p>
                <div className={`w-fit
                    flex items-center justify-center gap-2
                    px-8 py-[12px] mt-2
                    rounded-full
                    font-normal text-[18px] text-white 
                    bg-[${Colors().blue}]
                    `}>
                    <FontAwesomeIcon
                    className='text-[16px]'
                    color={'white'}
                    icon={faChevronRight}
                    />
                    <span >Saiba mais</span>
                </div>
            </div>

        </section>
    )
}