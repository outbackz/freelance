import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND = {
  bg: "#050816",
  primary: "#35BEAD",
  accent: "#0B4C9E",
  text: "#E5E7EB",
};

export default function App() {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="logo-wrap">
          <div className="logo-dot">LB</div>
          <span className="logo-text">BentoStudio</span>
        </div>
        <nav className="nav-links">
          <a href="#services">Serviços</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#contacto" className="nav-cta">
            Fala comigo
          </a>
        </nav>
      </header>

      <main className="main">
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Web • 2D • 3D • Interação</p>
            <h1>
              Eu sou o <span className="highlight">Luís Bento</span>,
              <br />
              crio experiências digitais modernas
            </h1>
            <p className="hero-sub">
              Desenvolvimento de websites, landing pages e experiências 3D
              interativas para negócios e pessoas que querem ter presença
              online com aspecto profissional.
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn-primary">
                Quero um site
              </a>
              <a href="#3d" className="btn-ghost">
                Ver demo 3D
              </a>
            </div>
            <p className="hero-small">
              Websites responsivos • Interação 3D no browser • Foco em UX
            </p>
          </div>

          <div className="hero-3d" id="3d">
            <ThreeHero />
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="services" className="section">
          <h2 className="section-title">O que eu faço</h2>
          <p className="section-sub">
            Soluções à medida para pequenos negócios, marcas pessoais, lojas e
            projetos criativos.
          </p>
          <div className="cards">
            <ServiceCard
              title="Websites & Landing Pages"
              text="Sites rápidos, modernos e pensados para converter visitas em contactos ou vendas."
            />
            <ServiceCard
              title="Interação & 3D no browser"
              text="Objetos 3D manipuláveis, animações e experiências visuais que destacam a tua marca."
            />
            <ServiceCard
              title="Identidade digital"
              text="Estrutura, cores, hierarquia visual e microinterações que dão cara ao teu negócio."
            />
          </div>
        </section>

        {/* PORTFÓLIO */}
        <section id="portfolio" className="section">
          <h2 className="section-title">Portfólio (exemplos)</h2>
          <p className="section-sub">
            Aqui podes colocar screenshots de projetos: websites para negócios
            locais, lojas online, páginas pessoais, etc.
          </p>
          <div className="portfolio-grid">
            <PortfolioPlaceholder title="Landing page para explicadora" />
            <PortfolioPlaceholder title="Site para clínica / consultório" />
            <PortfolioPlaceholder title="Página pessoal de artista / criador" />
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div>
            <h2 className="section-title">Vamos construir o teu projeto?</h2>
            <p className="section-sub">
              Envia-me uma mensagem com uma ideia simples do que precisas.
              Respondo com opções e sugestões.
            </p>
            <ul className="contact-list">
              <li>
                Email: <span>luis@bentostudio.dev</span>
              </li>
              <li>
                Instagram: <span>@bentostudio</span>
              </li>
              <li>
                Localização: <span>Portugal (trabalho remoto)</span>
              </li>
            </ul>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Obrigado! Depois podemos ligar isto a Netlify Forms ou outro backend."
              );
            }}
          >
            <div className="form-row">
              <input name="nome" placeholder="O teu nome" required />
              <input
                name="email"
                type="email"
                placeholder="O teu email"
                required
              />
            </div>
            <input
              name="tipo"
              placeholder="Tipo de projeto (site, landing, 3D, etc.)"
            />
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Fala-me do teu negócio ou ideia em 2/3 frases."
            />
            <button type="submit" className="btn-primary full">
              Enviar mensagem
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} BentoStudio — Web & 3D Experiences</p>
      </footer>
    </div>
  );
}

/* ---------- COMPONENTES SIMPLES ---------- */

function ServiceCard({ title, text }) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function PortfolioPlaceholder({ title }) {
  return (
    <div className="portfolio-card">
      <div className="portfolio-thumb" />
      <p>{title}</p>
    </div>
  );
}

/* ---------- COMPONENTE 3D ---------- */

function ThreeHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#020617");

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Luzes
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(3, 5, 4);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambient);

    // Geometria (cubo + toro)
    const group = new THREE.Group();

    const cubeGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: BRAND.primary,
      metalness: 0.5,
      roughness: 0.2,
    });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);

    const wireMat = new THREE.MeshBasicMaterial({
      color: BRAND.accent,
      wireframe: true,
    });
    const torus = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.05, 16, 100),
      wireMat
    );

    group.add(cube);
    group.add(torus);
    scene.add(group);

    // Cursor → rotação leve
    const mouse = { x: 0, y: 0 };
    function onMouseMove(e) {
      const rect = mount.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width - 0.5;
      mouse.y = (e.clientY - rect.top) / rect.height - 0.5;
    }
    mount.addEventListener("pointermove", onMouseMove);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      cube.rotation.x = t * 0.7 + mouse.y * 1;
      cube.rotation.y = t * 0.9 + mouse.x * 1.5;
      torus.rotation.z = t * 0.4;

      group.position.y = Math.sin(t * 1.2) * 0.15;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    function onResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    // cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      mount.removeEventListener("pointermove", onMouseMove);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      torus.geometry.dispose();
      wireMat.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-container" />;
}
