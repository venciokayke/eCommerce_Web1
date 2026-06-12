"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "./page.module.css";

export default function ContatoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.page}>
          <h1 className={styles.title}>Fale Conosco</h1>
          <hr className={styles.sep} />

          <p className={styles.lead}>
            Tem uma dúvida, sugestão ou quer enviar um pedido especial? Use o
            formulário abaixo e nossa equipe entra em contato rapidamente.
          </p>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label className={styles.fieldGroup}>
              <span className={styles.label}>Nome</span>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={styles.input}
                placeholder="Seu nome"
                required
              />
            </label>

            <label className={styles.fieldGroup}>
              <span className={styles.label}>Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={styles.input}
                placeholder="seu@email.com"
                required
              />
            </label>

            <label className={styles.fieldGroup}>
              <span className={styles.label}>Mensagem</span>
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className={styles.textarea}
                placeholder="Escreva sua mensagem aqui"
                rows={5}
                required
              />
            </label>

            <button
              type="submit"
              className={`${styles.submitButton} ${submitted ? styles.submitted : ""}`}
            >
              {submitted ? "Enviado!" : "Enviar mensagem"}
            </button>

            {submitted && (
              <p className={styles.successText}>
                Sua mensagem foi enviada com sucesso. Obrigado por entrar em
                contato!
              </p>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
