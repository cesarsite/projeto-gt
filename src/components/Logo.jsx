import logoHeader from "../assets/logo.png"; // Logo do cabeçalho
import logoFooter from "../assets/logo-footer.svg"; // Logo do rodapé

const Logo = ({ isFooter = false }) => {

    const logo = isFooter ? logoFooter : logoHeader;

  return (
    <img 
      src={logo} 
      alt="Logomarca da Aplicação" 
      width="253" 
      height="44" 
    />
  );
}

export default Logo;
