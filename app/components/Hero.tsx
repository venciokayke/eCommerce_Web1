"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  // Array com os dados do carrossel
  const slides = [
    {
      id: 0,
      image: "/assets/slide1.jpg",
      title: "Produtos premium com frete rápido",
      imagePosition: "center 10%",
      buttonText: "Confira nosso Estoque!",
    },
    {
      id: 1,
      image: "/assets/slide2.jpg",
      title: "Ofertas especiais para renovar seu estilo",
      imagePosition: "center 5%",
      buttonText: "Confira nosso Estoque!",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[75vh] min-h-[500px] mt-[90px] overflow-hidden">
      {/* Imagens do Carrossel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={slide.id === 0}
            className="object-cover" 
            style={{ objectPosition: slide.imagePosition || "center" }}
          />
        </div>
      ))}

      {/* Botão */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-10">   
        <a
          href="#produtos"
          className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-xl md:text-2xl font-bold px-10 py-3 rounded-full hover:scale-105 absolute bottom-20  transition-transform shadow-lg"
        >
          {slides[currentSlide].buttonText}
        </a>
      </div>
    </section>
  );
}