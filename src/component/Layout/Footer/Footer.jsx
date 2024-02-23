import facebookIcon from '..//..//..//assets/facebook-f.svg'
import linkedinIcon from '..//..//..//assets/linkedin-in.svg'
import InstagramIcon from '..//..//..//assets/instagram.svg'
import youtubeIcon from '..//..//..//assets/youtube.svg'
import Colors from '../../common/Colors'
import './index.css'

export default function Footer(){
    return(
        <footer className={`bg-[${Colors().blue}] text-[white] flex flex-col gap-20 py-[80px]`}>

            <div className='flex justify-between px-[200px]'>
                <div>
                    <div>
                        <h2 className='text-[24px] mb-[17px]'>Legais</h2>
                        <ul className='flex flex-col gap-[9px]'>
                            <li className='text-[18px] font-light'>Termos legais</li>
                            <li className='text-[18px] font-light'>Política de privacidade</li>
                            <li className='text-[18px] font-light'>Política de cookies</li>
                            <li className='text-[18px] font-light'>Proteção de dados</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='text-[24px] mb-[23px]'>Siga a Zurich no Brasil</h3>
                    <div className='flex gap-[55px] items-center flex-wrap'>
                        <img width={'14px'} src={facebookIcon} alt="" />
                        <img width={'18px'} src={linkedinIcon} alt="" />
                        <img width={'18px'} src={InstagramIcon} alt="" />
                        <img width={'22px'} src={youtubeIcon} alt="" />
                    </div>
                </div>
            </div>

            <div className='flex justify-between px-[200px]'>
                <p className='text-[14px] w-[565px]'>
                    Seguro garantido pela Zurich Minas Brasil Seguros S.A, CNPJ 17.197.385/0001-21 – Código SUSEP: 05495,
                    Processo SUSEP Nº 15414.900970/2014-26 (Proteção de bens). Consulte a íntegra das <a className={`text-[${Colors().lightFooterBlue}]`} href="#">Condições Gerais do
                    Seguro no site.</a> O registro do produto é automático e não representa aprovação ou recomendação por parte
                    da SUSEP.
                </p>
                <p className='text-[14px]'>
                    Copyright © 2015 Zurich Brasil Seguros
                </p>
            </div>

        </footer>
    )
}