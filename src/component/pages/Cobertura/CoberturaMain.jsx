import Header from "../../Layout/Header/Header"
import CoberturaOne from '../components/Coberturas/CoberturaOne/CoberturaOne'
import CoberturasTwo from "../components/Coberturas/CoberturasTwo/CoberturasTwo"

export default function CoberturaMain(){
    return(
        <main>
            <Header/>
            <CoberturaOne/>
            <CoberturasTwo/>
        </main>
    )
}