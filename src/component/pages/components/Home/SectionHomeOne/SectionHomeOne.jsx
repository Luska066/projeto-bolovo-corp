import Colors from "../../../../common/Colors";
import Image from '..//.//..//..//..//..//assets/img01.webp'
import ButtonCoteNow from '../../../../common/ButtonCoteNow';
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import './index.css'

export default function SectionHomeOne() {
  return (
    <section
      id='section-one'
      className={`
          flex bg-[${Colors().lightPink}]
          items-center justify-center  gap-[12%]
          relative bottom-4 flex-wrap-reverse overflow-hidden`}
      style={{ zIndex: -1 }}
    >
      <div id='section-text' 
      className='
          flex 
          flex-col 
          items-start 
          mb-4 ps-4'>
        <h1 className={`text-[3.5em] text-[${Colors().navyBlue}] font-light`}>Seguro Celular</h1>
        <p className={`text-[1.6em] w-[550px] text-[${Colors().navyBlue}] font-[300] pSectionOne`}>Proteção sob medida em poucos minutos, sem carência e sem fronteiras!</p>
        <div className={`
            flex items-center gap-2
            px-8 py-[12px]
            rounded-full
            mt-4
            font-light text-[18px] text-white 
            bg-[${Colors().blue}]
            `}>
          <FontAwesomeIcon
            className='text-[16px]'
            color={'white'}
            icon={faDollar}
          />
          <span >Cote agora</span>
        </div>
      </div>
      <div
        id="section-image"
        className='
            flex justify-center
            w-[400px]'
      >
        <img className='rounded-full top-20 imgSectionHomeOne' style={{ maxWidth: '400px' }} src={Image} />
      </div>
    </section>
  )
}