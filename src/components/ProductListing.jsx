import PropTypes from "prop-types";  // Importe o PropTypes
import ProductCard from "./ProductCard";
function ProductListing({ products }) {
  return (
    <div className="product-listing">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
}

// Defina os tipos das props esperadas
ProductListing.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      priceDiscount: PropTypes.string,
    })
  ).isRequired,
};

export default ProductListing;
