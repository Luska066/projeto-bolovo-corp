import { faDollar } from "@fortawesome/free-solid-svg-icons";
import ButtonCoteNow from "../common/ButtonCoteNow";
import Colors from "../common/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SectionFour() {
    return (
        <section className={`h-screen w-full bg-[${Colors().lightNavBlue}] flex gap-8 items-center justify-end  pe-24 `}>

                <article className="flex flex-col gap-8 justify-center w-[36%] ps-20 pt-20 items-start  pe-4 flex-wrap">
                    <h1 className={`text-[${Colors().blue}] font-light text-[45px] `}>Proteja seu celular com a Zurich em poucos passos:</h1>
                    <ul className="flex flex-col w-[100%] items-start gap-10">
                        <li className="flex items-center justify-center gap-6">
                            <p className={`
                        bg-[${Colors().blue}] 
                        w-[50px] h-[50px] 
                        rounded-full 
                        flex items-center justify-center
                        text-white text-[25px]`}>1</p>
                            <p className={`text-[24px] w-[450px] font-semilight text-[${Colors().navyBlue}]`}>Selecione marca, modelo e memória do seu aparelho de celular</p>
                        </li>
                        <li className="flex items-center justify-center gap-6">
                            <p className={`
                        bg-[${Colors().blue}] 
                        w-[50px] h-[50px] 
                        rounded-full 
                        flex items-center justify-center
                        text-white text-[25px]`}>2</p>
                            <p className={`text-[24px] w-[450px] font-semilight text-[${Colors().navyBlue}]`}>Escolha o plano (econômico ou completo)</p>
                        </li>
                        <li className="flex items-center justify-center gap-6">
                            <p className={`
                        bg-[${Colors().blue}] 
                        w-[50px] h-[50px] 
                        rounded-full 
                        flex items-center justify-center
                        text-white text-[25px]`}>3</p>
                            <p className={`text-[24px] w-[450px] font-semilight text-[${Colors().navyBlue}]`}>Preencha seus dados cadastrais</p>
                        </li>
                        <li className="flex items-center justify-center gap-6">
                            <p className={`
                        bg-[${Colors().blue}] 
                        w-[50px] h-[50px] 
                        rounded-full 
                        flex items-center justify-center
                        text-white text-[25px]`}>4</p>
                            <p className={`text-[24px] w-[450px] font-semilight text-[${Colors().navyBlue}]`}>Realize a vistoria do seu celular</p>
                        </li>
                        <li className="flex items-center justify-center gap-6">
                            <p className={`
                        bg-[${Colors().blue}] 
                        w-[50px] h-[50px] 
                        rounded-full 
                        flex items-center justify-center
                        text-white text-[25px]`}>5</p>
                            <p className={`text-[24px] w-[480px] font-semilight text-[${Colors().navyBlue}]`}>Com a vistoria aprovada, preencha os dados para pagamento e pronto!</p>
                        </li>
                    </ul>
                    <div className="w-[100%] flex justify-center flex-col items-center pt-2 gap-4">
                        <h3 className={`text-[30px] font-normal text-[${Colors().blue}]`}> Simples, prático e seguro.</h3>
                        <div className={`
                        flex items-center gap-2
                        px-8 py-[12px]
                        rounded-full
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
                </article>
       
                <img className="rounded-full" width={"48%"} src="https://www.zurich.com.br/-/media/project/zwp/brazil/images/seguro-celular/bannersecundario.webp?h=100%25&w=auto&rev=438446be9d9646c69817999b03d56a9c&hash=BAB2F60AF051527EE1A3645691285136')"/>
            
        </section>
    )
}