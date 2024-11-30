import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import Logo from "./Logo";
import Information from "./Information";


const Footer = () => {

    const companyInfo = [
        { text: "Sobre Drip Store", link: "/about" },
        { text: "Segurança", link: "/seguranca" },
        { text: "Wishlist", link: "/Wishlist" },
        { text: "Blog", link: "/Blog"},
        { text: "Trabalhe conosco", link: "/trabalheConosco"},
        { text: "Meus Pedidos", link: "/meusPedidos"}
      ];

    const categoryInfor = [
        { text: "Camiseta", link: "/camiseta"},
        { text: "Calças", link: "/calcas"},
        { text: "Bonés", link: "/bones"},
        { text: "Headphones", link: "/headphones"},
        { text: "Tênis", link: "/tenis"},
    ];
      
    const contactInfo = [
        {
          text: (
            <>
              Av. Santos Dumont, 1510 -1<br />
              andar - Aldeota, Fortaleza -<br />
              CE, 60150-161
            </>
          ),
          link: "#"
        },
        { text: "(85) 3051-3411", link: "tel:+558530513411" },
      ];
      

    return (
    <footer className="footer">

    <div className="footer-content">
      <section className="footer-logo-p">
        <div className="footer-logo">
        <Logo isFooter={true} />
        </div>
        <div className="footer-p">
        <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Tempore reprehenderit <br/> aut, eligendi deserunt quaerat.</p>
        </div>

        <div className="social-links">    
        <a href="http://www.facebook.com" 
        target="_blank"           
        rel="noopener noreferrer">
        <img src={facebook} alt="facebook" />
        </a>
    
        <a href="http://www.instagram.com" 
        target="_blank"
        rel="noopener noreferrer">
        <img src={instagram} alt="instagram" />
        </a>

        <a href="http://www.twitter.com" 
        target="_blank"
        rel="noopener noreferrer">
        <img src={twitter} alt="twitter" />
        </a>
        </div>
    </section>

    <section className="footer-navigation">
        <Information title="Informação" informations={companyInfo}/>
        <Information title="Categorias"  informations={categoryInfor}/>
        <Information title="Contato" informations={contactInfo} />
    </section>
     </div>

     <hr className="linha"/>

     <p className="paragrafo">© 2024 Digital Store</p>
    </footer>

    );
}
 
export default Footer;