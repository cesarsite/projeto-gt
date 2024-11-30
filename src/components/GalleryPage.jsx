import Gallery from "./Gallery"; // Certifique-se de que o caminho está correto
import Carrosel from "../assets/carrosel.png";

const GalleryPage = () => {
  // Imagens a serem passadas para o carrossel
  const images = [
    { src: Carrosel },
    { src: Carrosel },
    { src: Carrosel },
    { src: Carrosel },
  ];

  return (
    <div className="gallery-page">
      <Gallery
        images={images} // Passa o array de imagens para o carrossel
        width="80%"      // Largura do carrossel
        height="400px"   // Altura do carrossel
        radius="10px"    // Bordas arredondadas
      />
    </div>
  );
};

export default GalleryPage;
