import { useState } from "react";
import PropTypes from "prop-types";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import "./Gallery.css";

const Gallery = ({ images = [], width = "100%", height = "auto", radius = "0", className = "" }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para ir para a próxima imagem
  const nextImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para ir para a imagem anterior
  const prevImage = () => {
    if (images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Se não houver imagens para exibir
  if (images.length === 0) {
    return <div>Sem imagens para exibir</div>;
  }

  return (
    <div className={`gallery-container ${className}`} style={{ width, height }}>
      <div
        className="gallery-slide"
        style={{
          width,
          height,
          borderRadius: radius,
          backgroundImage: `url(${images[currentImageIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Botão para imagem anterior */}
      <img
        src={ArrowLeft}
        alt="Previous"
        className="gallery-arrow-left"
        onClick={prevImage}
        style={{
          pointerEvents: currentImageIndex === 0 ? "none" : "auto",
          opacity: currentImageIndex === 0 ? 0.5 : 1,
        }}
      />

      {/* Botão para próxima imagem */}
      <img
        src={ArrowRight}
        alt="Next"
        className="gallery-arrow-right"
        onClick={nextImage}
        style={{
          pointerEvents: currentImageIndex === images.length - 1 ? "none" : "auto",
          opacity: currentImageIndex === images.length - 1 ? 0.5 : 1,
        }}
      />

      {/* Navegação com miniaturas */}
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Thumbnail ${index}`}
            className="gallery-thumbnail"
            onClick={() => setCurrentImageIndex(index)}
            style={{
              border: currentImageIndex === index ? "2px solid var(--primary-color)" : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  className: PropTypes.string,
};

export default Gallery;
