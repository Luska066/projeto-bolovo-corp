import './index.css'
import Colors from '../../../../common/Colors';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import SectionHomeThree from '..//..//Home/SectionHomeThree/SectionHomeThree'
import SectionHomeFour from '..//..//Home/SectionHomeFour/SectionHomeFour'
import Footer from '../../../../Layout/Footer/Footer'
import CoberturasThree from '../CoberturasThree/CoberturasThree';
import CoberturasFour from '../CoberturasFour/CoberturasFour';

export default function CoberturasTwo(){
    return(
        <section>

            <ul className='flex items-center gap-2 pl-[20%] pt-[40px]' style={{backgroundColor:Colors().lightBlue}}>
                <li><FontAwesomeIcon icon={faHouse} /></li>
                <li className='relative liSecurityPhone flex items-center gap-1'><a href="#" style={{color:Colors().blue}}>Seguro Celular</a></li>
                <li className='relative liCoberturas flex items-center gap-1' >Coberturas</li>
            </ul>
            <SectionHomeThree/>
            <CoberturasThree/>
            <div className='flex flex-col items-center pb-[50px]' style={{backgroundColor:Colors().lightBlue}}>
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
                    <span >Cote agora</span>
                </div>
            </div>
            <CoberturasFour/>
            <SectionHomeFour/>
            <Footer/>

        </section>
    )
}