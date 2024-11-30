import Layout from "./Layout";
import ProductListing from "../components/ProductListing";
import products from "../components/products"; // Lista de produtos

function ProductListingPage() {
  return (
    <Layout>
      <div>
        <h1>Lista de Produtos</h1>
        <ProductListing products={products} />
      </div>
    </Layout>
  );
}

export default ProductListingPage;
