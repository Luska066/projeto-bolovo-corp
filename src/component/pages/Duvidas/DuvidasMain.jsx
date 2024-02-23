import SectionHomeMain from './component/pages/Home/SectionHomeMain'
import CoberturaMain from './component/pages/Cobertura/CoberturaMain'
import DuvidasHeader from './component/pages/components/Duvidas/DuvidasHeader/DuvidasHeader'
import Header from './component/Layout/Header/Header'
import DuvidasAccordions from './component/pages/components/Duvidas/DuvidasAccordions/DuvidasAccordions';
import Footer from './component/Layout/Footer/Footer';



function DuvidasMain() {

  return (
    <>
      <Header></Header>
      <DuvidasHeader></DuvidasHeader>
      <DuvidasAccordions/>
      <Footer></Footer>
    </>
  )
}

export default DuvidasMain