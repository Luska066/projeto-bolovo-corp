import womanImg from '..//..//..//assets/woman-img.webp'
import Colors from '../../common/Colors'
import './index.css'

export default function CoberturaOne(){
    return(
        <section className='flex justify-center items-center gap-20' style={{backgroundColor:Colors().lightCoberturasBlue}}>
            <div>
                <h1 className='text-[60px] mb-[8px]'>Seguro Celular Zurich</h1>
                <p className='text-[22px] w-[550px]'>Coberturas completas contra todos os tipos de furtos, roubos e danos materiais.</p>
            </div>
            <img className='rounded-full w-[300px]' src={womanImg} alt="" />
        </section>
    )
}