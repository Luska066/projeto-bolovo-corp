import './index.css'
import Colors from '../../common/Colors'
import furtoIcon from '..//..//..//assets/icone-furto2.webp'
import rouboIcon from '..//..//..//assets/icone-roubo.webp'
import danosIcon from '..//..//..//assets/icone-danos.webp'

export default function CoberturasThree(){
    return(
        <section style={{backgroundColor:Colors().lightBlue}}>

            <div>
                <div>
                    <div><img src={furtoIcon} alt="" /></div>
                    <div></div>
                </div>

                <div>
                    <div><img src={rouboIcon} alt="" /></div>
                    <div></div>
                </div>

                <div>
                    <div><img src={danosIcon} alt="" /></div>
                    <div></div>
                </div>

            </div>

        </section>
    )
}