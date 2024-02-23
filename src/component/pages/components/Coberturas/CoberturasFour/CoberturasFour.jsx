import Colors from "../../../../common/Colors";
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CoberturasFour(){
    return(
        <section className="flex flex-col justify-center items-center py-[35px]" style={{backgroundColor:'white'}}>

            <div className="flex flex-col items-center text-center pb-[65px]">
                <h2 className="text-[44px] pb-[20px]" style={{color:Colors().navyBlue}} >Vale a pena fazer seguro de celular?</h2>
                <h3 className="text-[20px] w-[730px]" style={{color:Colors().navyBlue}} >Compare os planos Econômico e Completo da Zurich com os outros seguros do mercado e escolha a melhor opção para você.</h3>
            </div>

            <table className="border-spacing-[4px] border-separate pb-[45px]">
                <tr>
                    <td></td>
                    <td className="text-[18px] text-center py-[20px]" style={{backgroundColor:Colors().blue,color:'white'}}>
                        <span>Zurich Celular </span>
                        <br/>
                        <strong>Plano Econômico</strong>
                    </td>
                    <td className="text-[18px] text-center py-[20px]" style={{backgroundColor:Colors().blue,color:'white'}}>
                        <span>Zurich Celular</span>
                        <br/>
                        <strong>Plano Completo</strong>
                    </td>
                    <td className="text-[18px] text-center">
                        <strong>Outros seguros</strong>
                    </td>
                </tr>

                <tr>
                    <td className="text-[18px] text-center w-[346px] p-[40px]" style={{backgroundColor:Colors().blue,color:'white'}}><span>Cobre Furto?</span></td>
                    <td style={{backgroundColor:Colors().lightBlue}} className=" text-center"><FontAwesomeIcon className="text-[22px]" icon={faCheck} /></td>
                    <td style={{backgroundColor:Colors().tdTableSecondColumn}} className="text-center"><FontAwesomeIcon className="text-[22px]" icon={faCheck} /></td>
                    <td className=" text-center w-[280px]" style={{backgroundColor:Colors().lightBlue}}>
                        <FontAwesomeIcon className="text-[22px]" icon={faXmark} />
                        <br/>
                        <span className="text-[18px]">Poucas seguradoras cobrem furto simples.</span>
                    </td>
                </tr>

                <tr>
                    <td className="text-[18px] text-center w-[346px] p-[30px]" style={{backgroundColor:Colors().blue,color:'white'}}><span>Cobre Roubo?</span></td>
                    <td style={{backgroundColor:Colors().lightBlue}} className="text-center"><FontAwesomeIcon className="text-[22px]" icon={faCheck} /></td>
                    <td style={{backgroundColor:Colors().tdTableSecondColumn}} className="text-center"><FontAwesomeIcon className="text-[22px]" icon={faCheck} /></td>
                    <td style={{backgroundColor:Colors().lightBlue}} className=" text-center w-[280px]"><FontAwesomeIcon className="text-[22px]" icon={faCheck} /></td>
                </tr>

                <tr>
                    <td className="text-[18px] text-center w-[346px] p-[30px]" style={{backgroundColor:Colors().blue,color:'white'}}><span>Cobre Danos acidentais? Com cobertura para líquidos?</span></td>
                    <td style={{backgroundColor:Colors().lightBlue}} className="text-center"><FontAwesomeIcon className="text-[22px]" icon={faXmark} /></td>
                    <td style={{backgroundColor:Colors().tdTableSecondColumn}} className="text-center"><FontAwesomeIcon className="text-[22px]" icon={faCheck} /></td>
                    <td className=" text-center w-[280px]" style={{backgroundColor:Colors().lightBlue}}>
                        <FontAwesomeIcon className="text-[22px]" icon={faXmark} />
                        <br/>
                        <span className="text-[18px]">Poucas seguradoras cobrem danos por líquido.</span> 
                    </td>
                </tr>

                <tr>
                    <td className="text-[18px] text-center w-[346px] p-[40px]" style={{backgroundColor:Colors().blue,color:'white'}}><span>Tem carência?</span></td>
                    <td style={{backgroundColor:Colors().lightBlue}}><span className="text-[18px]">Não. Ativação da proteção na hora.</span></td>
                    <td style={{backgroundColor:Colors().tdTableSecondColumn}}><span className="text-[18px]">Não. Ativação da proteção na hora.</span></td>
                    <td style={{backgroundColor:Colors().lightBlue}} className="text-center w-[280px]"><span className="text-[18px]">Em geral, tem carência de 30 dias.</span></td>
                </tr>

                <tr>
                    <td className="text-[18px] text-center w-[346px] p-[40px]" style={{backgroundColor:Colors().blue,color:'white'}}><span>Qual a abrangência?</span></td>
                    <td style={{backgroundColor:Colors().lightBlue}}><span className="text-[18px]">Proteção em todo o globo terrestre.</span></td>
                    <td style={{backgroundColor:Colors().tdTableSecondColumn}}><span className="text-[18px]">Proteção em todo o globo terrestre.</span></td>
                    <td style={{backgroundColor:Colors().lightBlue}} className="text-center w-[280px]"><span className="text-[18px]">Em geral, proteção nacional.</span></td>
                </tr>

            </table>
            
            <div className={`py-[13px] px-[25px] border border-solid border-[${Colors().blue}] border-2 w-fit rounded-[30px] flex gap-2 items-center`}>
                <FontAwesomeIcon style={{color:Colors().blue}} icon={faHeart} />
                <span style={{color:Colors().blue}}>Cote agora</span>
            </div>

        </section>
    )
}