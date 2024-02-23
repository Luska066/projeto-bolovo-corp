import facebookIcon from '..//..//..//assets/facebook-f.svg'
import linkedinIcon from '..//..//..//assets/linkedin-in.svg'
import InstagramIcon from '..//..//..//assets/instagram.svg'
import youtubeIcon from '..//..//..//assets/youtube.svg'
import Colors from '../../common/Colors'
import './index.css'

export default function Footer(){
    return(
        <footer className={`bg-[${Colors().blue}] text-[white]`}>

            <div>
                <div>
                    <div>
                        <h2>Legais</h2>
                        <ul>
                            <li>Termos legais</li>
                            <li>Política de privacidade</li>
                            <li>Política de cookies</li>
                            <li>Proteção de dados</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Siga a Zurich no Brasil</h3>
                    <div className='flex justify-center items-center flex-wrap'>
                        <img width={'14px'} src={facebookIcon} alt="" />
                        <img width={'18px'} src={linkedinIcon} alt="" />
                        <img width={'18px'} src={InstagramIcon} alt="" />
                        <img width={'22px'} src={youtubeIcon} alt="" />
                    </div>
                </div>
            </div>

            <div>
                <p>
                    Seguro garantido pela Zurich Minas Brasil Seguros S.A, CNPJ 17.197.385/0001-21 – Código SUSEP: 05495,
                    Processo SUSEP Nº 15414.900970/2014-26 (Proteção de bens). Consulte a íntegra das <a href="#">Condições Gerais do
                    Seguro no site.</a> O registro do produto é automático e não representa aprovação ou recomendação por parte
                    da SUSEP.
                </p>
                <p>
                    Copyright © 2015 Zurich Brasil Seguros
                </p>
            </div>

        </footer>
    )
}