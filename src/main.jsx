import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

const bg_v1 = "bg-sky-950";
const bg_v2 = "bg-sky-700";

const text_color_v1 = "text-white";
const text_color_v2 = "text-sky-300";

const font_main = "font-sans";

const p = "p-2";
const gap = "gap-2";

const hover = "hover:bg-sky-300";

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <main className={`min-h-[100dvh] ${bg_v1} ${text_color_v1} ${font_main}`}>
      <header className={`${bg_v2} flex justify-between items-center ${p}`}>
        <img className="w-[100px]" src="/logo.png" />
        <nav className={`flex ${gap}`}>
          <a
            className={`transition-all rounded-2xl ${p} ${hover}`}
            href="#Inicio"
          >
            Início
          </a>
          <a
            className={`transition-all rounded-2xl ${p} ${hover}`}
            href="#Sobre"
          >
            Sobre
          </a>
          <a
            className={`transition-all rounded-2xl ${p} ${hover}`}
            href="#Elenco"
          >
            Elenco
          </a>
        </nav>
      </header>
      <section
        className={`h-[100vh] flex flex-col justify-center items-center ${gap} font-extrabold bg-[url(./assets/hero-bg.jpg)] bg-center bg-no-repeat bg-cover`}
        id="Inicio"
      >
        <h1 className={`text-4xl ${text_color_v2}`}>SEM VOLTA PARA CASA</h1>
        <h1 className="text-3xl">
          A lenda dos cinemas tem nome
          <span className={`text-4xl ${text_color_v2}`}>?</span>
        </h1>
        <button
          className={`${bg_v2} rounded-2xl ${p} transition-all hover:scale-110 ${hover}`}
        >
          Explorar Agora!
        </button>
      </section>
      <footer>
        <h6 className={`${bg_v2} ${p} text-center`}>
          &copy; 2026 Criado por um fã do Aranha.
          <br />
          Todos os direitos reservados à Marvel & Sony.
        </h6>
      </footer>
    </main>
  </StrictMode>,
);
