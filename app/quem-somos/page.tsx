import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function quemSomos() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.page}>
          <h1 className={styles.title}>Sobre a P2 Store</h1>
          <hr className={styles.sep} />

          <p className={styles.lead}>
            A P2 Store reúne uma curadoria diversa de produtos de roupas e
            acessórios a eletrônicos, artigos para casa e itens de lifestyle com
            foco na qualidade e na experiência do cliente. <br />
            Nossa missão é tornar a compra online simples e confiável,
            conectando você a produtos que realmente importam com atendimento
            humano e entregas ágeis.
          </p>

          <p className={styles.note}>
            Este site também funciona como um projeto de estudo em
            desenvolvimento web.
          </p>
        </div>

        
      </main>
      <Footer />
    </>
  );
}
