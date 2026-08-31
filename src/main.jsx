import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import img_spiders from "./assets/spiders.png";

const bg_v1 = "bg-gray-900";
const bg_v2 = "bg-gray-700";

const text_color_v1 = "text-white";
const text_color_v2 = "text-sky-700";

const font_main = "font-sans";

const p = "p-2";
const gap = "gap-2";

const hover = "hover:bg-sky-700";

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
        className={`min-h-[100vh] flex flex-col justify-center items-center ${gap} font-extrabold bg-[url(./assets/hero-bg.jpg)] bg-center bg-no-repeat bg-cover`}
        id="Inicio"
      >
        <h1 className={`text-4xl ${text_color_v2}`}>SEM VOLTA PARA CASA</h1>
        <h1 className="text-3xl">
          A lenda dos cinemas tem nome
          <span className={`text-4xl ${text_color_v2}`}>?</span>
        </h1>
        <a
          className={`${bg_v2} rounded-2xl ${p} transition-all hover:scale-110 ${hover}`}
          href="#Sobre"
        >
          Explorar Agora!
        </a>
      </section>
      <section
        className={`min-h-[100vh] text-center flex flex-col justify-center items-center ${gap} ${p}`}
        id="Sobre"
      >
        <h1 className={`text-4xl ${text_color_v2} font-extrabold`}>
          O Multiverso foi Aberto
        </h1>
        <p>
          Pela primeira vez na história cinematográfica do Homem-Aranha, nosso
          <br />
          herói amigão da vizinhança é desmascarado e não consegue mais separar
          <br />
          sua vida normal dos grandes riscos de ser um super-herói. Quando ele
          <br />
          pede ajuda ao Doutor Estranho, os riscos tornam-se ainda mais
          <br />
          perigosos, forçando-o a descobrir o que realmente significa ser o
          <br />
          Homem-Aranha.
        </p>
        <img className="w-[100%] rounded-2xl" src={img_spiders} />
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
