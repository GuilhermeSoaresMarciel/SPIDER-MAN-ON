import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Cast from "./components/Cast.jsx";
import spidersImage from "./assets/spiders.png";

const cast = [
  { name: "Tom Holland", role: "Peter Parker / Homem-Aranha", number: "01" },
  { name: "Zendaya", role: "Michelle Jones-Watson", number: "02" },
  { name: "Benedict Cumberbatch", role: "Doutor Estranho", number: "03" },
  { name: "Jacob Batalon", role: "Ned Leeds", number: "04" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#inicio"
          onClick={closeMenu}
          aria-label="Spider-Man: Sem Volta para Casa"
        >
          <span className="brand-mark">MARVEL</span>
          <span className="brand-name">SPIDER-MAN</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir menu"
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
          <a href="#inicio" onClick={closeMenu}>
            Início
          </a>
          <a href="#historia" onClick={closeMenu}>
            A história
          </a>
          <a href="#elenco" onClick={closeMenu}>
            Elenco
          </a>
          <a className="nav-ticket" href="#legado" onClick={closeMenu}>
            Ver o legado <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">
              <span /> MARVEL STUDIOS <span />
            </p>
            <h1>
              Sem volta
              <br />
              <em>para casa.</em>
            </h1>
            <p className="hero-copy">
              O multiverso foi aberto. Três gerações. Um destino.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#historia">
                Explorar o filme <ArrowIcon />
              </a>
              <a className="text-link" href="#legado">
                Conheça o legado <span>↓</span>
              </a>
            </div>
          </div>
          <div className="hero-meta">
            <span>2021</span>
            <span className="meta-line" />
            <span>2h 28min</span>
            <span className="meta-line" />
            <span>PG-13</span>
          </div>
          <div className="scroll-cue">
            <span /> role para explorar
          </div>
        </section>

        <section className="story section-wrap" id="historia">
          <div className="section-label">
            01 <span /> A HISTÓRIA
          </div>
          <div className="story-grid">
            <div className="story-heading">
              <p className="kicker">Uma nova dimensão</p>
              <h2>
                Quando todos
                <br />
                sabem <em>seu nome.</em>
              </h2>
            </div>
            <div className="story-copy">
              <p>
                Depois que a identidade do Homem-Aranha é revelada, Peter Parker
                procura o Doutor Estranho para recuperar sua vida normal.
              </p>
              <p>
                Mas um feitiço dá errado e abre as portas do multiverso,
                trazendo vilões e heróis de outras realidades para o seu mundo.
              </p>
              <a className="inline-link" href="#elenco">
                Descubra os personagens <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="story-visual">
            <img src={spidersImage} alt="As três gerações do Homem-Aranha" />
            <div className="visual-caption">
              <span>Uma história sobre</span>
              <strong>responsabilidade.</strong>
            </div>
          </div>
        </section>

        <section className="cast-section section-wrap" id="elenco">
          <div className="section-label">
            02 <span /> ELENCO PRINCIPAL
          </div>
          <div className="cast-heading">
            <h2>
              Os rostos por
              <br />
              <em>trás da máscara.</em>
            </h2>
            <p>
              Uma reunião histórica que celebra o legado do herói mais querido
              da vizinhança.
            </p>
          </div>
          <div className="cast-grid">
            {cast.map((person) => (
              <Cast key={person.name} {...person} />
            ))}
          </div>
        </section>

        <section className="legacy" id="legado">
          <div className="legacy-overlay" />
          <div className="legacy-content section-wrap">
            <div className="section-label">
              03 <span /> O LEGADO
            </div>
            <p className="kicker">Com grandes poderes...</p>
            <h2>
              ...vêm grandes
              <br />
              <em>encontros.</em>
            </h2>
            <p>
              Uma carta de amor aos fãs que acompanharam cada versão do herói ao
              longo das décadas.
            </p>
            <a className="button button-light" href="#inicio">
              Voltar ao topo <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Spider-Man Fan Experience</span>
        <span>Uma experiência feita por fãs, para fãs.</span>
        <a href="#inicio">↑</a>
      </footer>
    </div>
  );
}

createRoot(document.querySelector("body")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
