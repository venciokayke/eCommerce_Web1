import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* Seção de produtos — âncora #produtos usada nos links do Header */}
      <ProductsSection />
      <Footer />
    </main>
  );
}