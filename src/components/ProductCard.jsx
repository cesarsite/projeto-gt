const ProductCard = ({ image, name, price, priceDiscount }) => {
    return (
      <div className="product-card">
        {/* Contêiner da Imagem com Borda */}
        <div className="product-image-container">
          <img src={image} alt={name} />
        </div>
  
        {/* Título do Produto */}
        <h3 className="product-card-name">{name}</h3>
  
        {/* Preço */}
        <div className="product-card-price">
          {priceDiscount ? (
            <>
              {/* Preço original com linha cortada */}
              <div className="product-card-price-original">
                R$ {price.toFixed(2)}
              </div>
              {/* Preço com desconto */}
              <div className="product-card-price-discount">
                R$ {priceDiscount.toFixed(2)}
              </div>
            </>
          ) : (
            // Preço normal (sem desconto)
            <div className="product-card-price-regular">
              R$ {price.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  