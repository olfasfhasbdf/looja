import Header from "../components/header"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import banner from "../assets/imgs/banner.png"
import Valvula from "../assets/imgs/valvula.jpg"
import Disco from "../assets/imgs/disco.png"
import Filtro from "../assets/imgs/filtro.png"
const produtos = [
    {
        nome: "Filtro De Óleo",
        preco: "50,00",
        img: Filtro
    },
    {
        nome: "Disco de Freio",
        preco: "350,00",
        img: Disco
    },
    {
        nome: "Válvula Termostática",
        preco: "129,99",
        img: Valvula
    }
]
function Home(){
    return(
        <>
            <Header/>
            <Navbar/>
            <section>
                <img src={banner} alt="" className="banner"/>
                <h1>Bem vindo !</h1>
                <div className="Produtos">
                {produtos.map(({nome, preco, img}) => (
                    <div className='card' key={nome}>
                        <img src={img} alt="" />
                        <h2>{nome}</h2>
                        <p>{preco}</p>
                    </div>
                ))
                }
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Home