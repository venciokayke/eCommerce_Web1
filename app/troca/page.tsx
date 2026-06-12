import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function TrocaPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.page}>
          <h1 className={styles.title}>Política de Troca e Devolução</h1>
          <hr className={styles.sep} />

          <p className={styles.lead}>
            Na P2 Store, prezamos pela satisfação do cliente e pela
            qualidade de cada produto. Como oferecemos uma seleção variada de
            roupas e eletrônicos a joias e acessórios nossa política de troca e
            devolução é pensada para proteger seus direitos e garantir uma
            experiência de compra segura.
          </p>

          <div className={styles.gridIntro}>
            <div>
              <h3>Produtos com Defeito</h3>
              <p>
                Caso receba um produto danificado, com defeito de fabricação ou com
                diferença em relação ao pedido, entre em contato em até 24 horas
                após o recebimento. Envie fotos ou vídeo para nossa equipe avaliar
                e providenciar troca ou reembolso quando necessário.
              </p>
            </div>

            <div>
              <h3>Produtos Sem Uso</h3>
              <p>
                Para itens que não foram utilizados e permanecem em sua embalagem
                original, aceitamos devoluções em até 7 dias corridos após o
                recebimento, desde que o produto esteja em perfeito estado.
              </p>
            </div>
          </div>

          <div className={styles.gridIntro}>
            <div>
              <h3>Troca por Preferência</h3>
              <p>
                Não realizamos trocas por motivo de gosto pessoal ou escolha de
                estilo. Nossa prioridade é oferecer produtos conforme descrito e
                garantir que o pedido chegue em boas condições.
              </p>
            </div>

            <div>
              <h3>Como solicitar</h3>
              <p>
                Use nosso <a href="/contato"><b>formulário de contato</b></a> informando o número do pedido,
                fotos do produto e a razão da solicitação. Nossa equipe irá
                orientar sobre os próximos passos para troca, devolução ou
                reembolso.
              </p>
            </div>
          </div>

          <p className={styles.note}>
            Estamos comprometidos em tratar seu pedido com cuidado e em resolver
            qualquer problema de forma rápida e transparente.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
