import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="leading-none relative w-[200px] h-[60px] md:w-[250px] md:h-[80px]">
                <Link
                  href="/"
                  className="flex items-center group"
                >
                  <div>
                    <span className="text-[44px] tracking-widest text-white logo-text">
                      P2 Store
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Loja online de produtos selecionados com entrega rápida e suporte
              dedicado. Sua experiência de compra com qualidade e confiança.
            </p>

            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-600 hover:text-black transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-600 hover:text-black transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-600 hover:text-black transition-colors"
              >
                <FaFacebookF className="text-xl" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="md:col-span-3">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#produtos"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/quem-somos"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="/#promocoes"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Promoções
                </Link>
              </li>
              <li>
                <Link
                  href="/#contato"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div className="md:col-span-4">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
              Institucional
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-xl" />
                <p className="text-gray-400 text-sm">
                  Avenida Central, 123<br />
                  Cidade Modelo - SP
                </p>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-xl" />
                <a
                  href="tel:+5511999999999"
                  className="text-gray-400 text-sm"
                >
                  +55 (11) 99999-9999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-xl" />
                <a
                  href="mailto:contato@p2store.com"
                  className="text-gray-400 text-sm"
                >
                  contato@p2store.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {anoAtual} P2 Store. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs">
            Desenvolvido por P2 Store.
          </p>
        </div>
      </div>
    </footer>
  );
}
