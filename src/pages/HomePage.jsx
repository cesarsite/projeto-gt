import Gallery from "../components/Gallery";
import GalleryPage from "../components/GalleryPage";
import ProductListing from "../components/ProductListing";
import products from "../components/products"; // Lista de produtos
import Section from "../components/Section"; // Seção personalizada
import Layout from "./Layout"; // Aqui você importa Layout para envolver a página

function HomePage() {
  return (
    <Layout>
      {" "}
      {/* O Layout envolve toda a HomePage */}
      <div>
        <GalleryPage />
        <Gallery />
        <Section
          title="Produtos em Alta"
          titleAlign="left"
          link={{ href: "/products", text: "Ver todos" }}
        />
        <ProductListing products={products} />{" "}
        {/* Passando a lista de produtos */}
      </div>
    </Layout>
  );
}

export default HomePage;
