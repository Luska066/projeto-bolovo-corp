import Colors from "../../../../common/Colors"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function CoberturasFour(){
    return(
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
    )
}