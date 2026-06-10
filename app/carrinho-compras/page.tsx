"use client";

import Link from "next/link";
import { FaTrash, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import styles from "./page.module.css";

export default function CarrinhoPage() {
  // Pega o estado e as funções do carrinho global
  const { items, removeItem, updateQuantity, clearCart, totalPrice } =
    useCart();

  // Formata um valor numérico para R$ com casas decimais
  const formatarPreco = (valor: number) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  // Frete fixo para simulação — em um app real viria de uma API de frete
  const frete = items.length > 0 ? 19.9 : 0;
  const total = totalPrice + frete;

  // Se o carrinho estiver vazio, mostra mensagem informativa
  if (items.length === 0) {
    return (
      <>
        <Header />
        <div className={styles.empty}>
          <FaShoppingCart className={styles.emptyIcon} />
          <h2>Seu carrinho está vazio</h2>
          <p>Adicione produtos para continuar comprando.</p>
          <Link href="/#produtos" className={styles.btnVoltar}>
            Ver Produtos
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
    <Header />
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Carrinho de Compras</h1>

        <div className={styles.layout}>
          {/* Lista de itens do carrinho */}
          <div className={styles.itemsList}>
            {/* Botão para limpar tudo de uma vez */}
            <div className={styles.listHeader}>
              <span>{items.length} {items.length === 1 ? "item" : "itens"}</span>
              <button onClick={clearCart} className={styles.btnClear}>
                Limpar carrinho
              </button>
            </div>

            {items.map((item) => (
              <div key={item.id} className={styles.item}>
                {/* Imagem do produto */}
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.name} />
                </div>

                <div className={styles.itemInfo}>
                  <p className={styles.itemName}>{item.name}</p>
                  <p className={styles.itemPrice}>
                    {formatarPreco(item.price)}
                  </p>
                </div>

                <div className={styles.itemControls}>
                  {/* Controle de quantidade */}
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      className={styles.qtyBtn}
                      aria-label="Diminuir quantidade"
                    >
                      <FaMinus />
                    </button>
                    <span className={styles.qty}>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className={styles.qtyBtn}
                      aria-label="Aumentar quantidade"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  {/* Subtotal do item */}
                  <span className={styles.subtotal}>
                    {formatarPreco(item.price * item.quantity)}
                  </span>

                  {/* Remover item */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className={styles.btnRemove}
                    aria-label="Remover produto"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumo do pedido */}
          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Resumo do Pedido</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>{formatarPreco(totalPrice)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Frete</span>
              <span>{formatarPreco(frete)}</span>
            </div>

            <div className={styles.summaryDivider} />

            <div className={`${styles.summaryRow} ${styles.summaryTotal}`}>
              <span>Total</span>
              <span>{formatarPreco(total)}</span>
            </div>

            {/* Botão de finalizar — sem rota real por enquanto */}
            <button className={styles.btnCheckout}>
              Finalizar Compra
            </button>

            <Link href="/#produtos" className={styles.btnContinue}>
              ← Continuar Comprando
            </Link>
          </aside>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
}
