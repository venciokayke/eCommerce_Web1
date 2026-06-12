import { notFound } from "next/navigation";
import Link from "next/link";
import { type Product } from "@/app/data/products";
import styles from "./page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AddToCartButton from "@/app/components/AddToCartButton";

const traducaoCategoria: Record<string, string> = {
  "men's clothing": "Roupas Masculinas",
  "women's clothing": "Roupas Femininas",
  jewelery: "Joias",
  electronics: "Eletrônicos",
};

async function getProduct(id: string): Promise<Product | null> {
  try {
    const resposta = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 60 },
    });

    if (!resposta.ok) return null;

    try {
      const data = await resposta.json();
      return data as Product;
    } catch (err) {
      console.error("Erro ao parsear JSON do produto:", err);
      return null;
    }
  } catch (err) {
    console.error("Erro ao buscar produto:", err);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const resposta = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
    });

    if (!resposta.ok) return [];

    try {
      const produtos: Product[] = await resposta.json();
      return produtos.map((product) => ({ id: product.id.toString() }));
    } catch (err) {
      console.error("Erro ao parsear JSON da lista de produtos:", err);
      return [];
    }
  } catch (err) {
    console.error("Erro ao buscar lista de produtos:", err);
    return [];
  }
}

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = (await params) as { id: string };
  const product = await getProduct(id);
  if (!product) notFound();

  const precoFormatado = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <Header />
      <main className={styles.page}>
        <div className={styles.breadcrumbs}>
          <Link href="/">Home</Link>
          <span>›</span>
          <span>{product.title}</span>
        </div>

        <section className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <span className={styles.category}>
              {traducaoCategoria[product.category] ?? product.category}
            </span>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.description}>{product.description}</p>

            <div className={styles.meta}>
              <div>
                <p className={styles.label}>Preço</p>
                <p className={styles.price}>{precoFormatado}</p>
              </div>
              <div>
                <p className={styles.label}>Avaliação</p>
                <p className={styles.rating}>
                  ★ {product.rating.rate} · {product.rating.count} avaliações
                </p>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/" className={styles.buttonSecondary}>
                Voltar para a loja
              </Link>
              <AddToCartButton product={product} className={styles.buttonPrimary} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
