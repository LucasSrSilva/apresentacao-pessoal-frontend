import Footer from "../components/Footer"
import Habilidades from "../components/Habilidades"
import Navbar from "../components/Navbar"
import Projetos from "../components/Projetos"
import Sobre from "../components/Sobre"


function Home() {
    return (
        <>
            <Navbar />
            <Sobre />
            <Habilidades />
            <Projetos/>
            <Footer/>
        </>
    )
}

export default Home