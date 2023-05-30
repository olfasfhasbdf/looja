import Header from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Sobre() {
  return (
    <>
      <Header />
      <Navbar />
      <div className="sobre">
        <h1>Sobre</h1>
        <p>
          Nossa loja de autopeças é o seu destino confiável para todas as suas
          necessidades automotivas. Oferecemos uma ampla gama de peças de alta
          qualidade e acessórios, com uma equipe experiente e amigável pronta
          para ajudá-lo. Trabalhamos com marcas confiáveis e oferecemos opções
          de compra flexíveis, incluindo uma plataforma online e serviço de
          entrega. Nosso objetivo é fornecer uma experiência excepcional aos
          clientes, com preços competitivos e um foco na qualidade e satisfação.
          Visite-nos hoje mesmo e descubra por que somos a escolha preferida de
          proprietários de veículos conscientes.
        </p>
      </div>
      <Footer />
    </>
  );
}
export default Sobre;
