
import CertificadosSection from "./components/certificados/CertificadosSection"
import ContactSection from "./components/contact/ContactSection"
import Header from "./components/Header"
import SideBar from "./components/nav/SideBar"
import ProjectsSection from "./components/projects/ProjectsSection"
import ResumoSection from "./components/ResumoSection"
import SkillSection from "./components/skills/SkillSection"


function main() {


  return (
    <div className='flex '>
      <SideBar />
      
      <div className='max-w-container border-l-2 border-r-2 mainShadow bg-slate-50 border-main  flex flex-1 md:px-5 px-2 self-center mx-auto  flex-col gap-20 '>
        <Header/>
        <ResumoSection/>
        <SkillSection/>
        <ProjectsSection/>
        <CertificadosSection/>
        <ContactSection/>
        
        
        

      </div>

    </div>
  )
}

export default main
