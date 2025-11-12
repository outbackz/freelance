import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND = {
  primary: "#35BEAD",
  accent: "#0B4C9E",
  bg: "#020617",
};

export default function App() {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      document.documentElement.style.setProperty("--scroll-y", String(y));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app-root">
      <ParallaxBackground />

      <header className="app-header">
        <div className="logo-wrap">
          <div className="logo-dot">LB</div>
          <span className="logo-text">BentoStudio</span>
        </div>
        <nav className="nav-links">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#showreel">3D & Interação</a>
          <a href="#contacto" className="nav-cta">
            Fala comigo
          </a>
        </nav>
      </header>

      <main className="main">
        {/* HERO */}
        <section className="hero" id="topo">
          <div className="hero-text">
            <p className="eyebrow">Web • UX • 2D • 3D • Interação</p>
            <h1>
              Eu sou o <span className="highlight">Luís Bento</span>,
              <br />
              desenvolvo experiências digitais<span className="highlight-block">
                modernas, rápidas e com 3D
              </span>
            </h1>
            <p className="hero-sub">
              Ajudo pessoas e negócios a terem uma presença online com aspecto
              profissional: websites, landing pages e interações 3D no browser
              para mostrar produtos, serviços e ideias de forma única.
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn-primary">
                Quero um site para o meu negócio
              </a>
              <a href="#showreel" className="btn-ghost">
                Ver demo 3D e animações
              </a>
            </div>
            <p className="hero-small">
              Websites responsivos • Lojas online • Landing pages • Experiências
              3D interativas
            </p>
            <ScrollHint />
          </div>

          <div className="hero-3d" id="3d">
            <ThreeHero />
          </div>
        </section>

        {/* RIBBON */}
        <section className="ribbon">
          <div className="ribbon-track">
            <span>Websites modernos</span>
            <span>Landing pages que convertem</span>
            <span>3D interativo</span>
            <span>UI/UX pensada para pessoas</span>
            <span>Identidade digital</span>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="section">
          <h2 className="section-title">O que posso criar para ti</h2>
          <p className="section-sub">
            Podes estar a começar um projecto, a renovar a imagem da tua
            empresa ou a precisar de uma página simples para vender um serviço.
            Construo soluções à medida.
          </p>
          <div className="cards">
            <ServiceCard
              title="Website completo"
              badge="Ideal para negócios e marcas"
              text="Estrutura de páginas, navegação clara, contacto optimizado e apresentação profissional dos teus serviços."
              items={[
                "Design responsivo",
                "Secção Sobre, Serviços, Contacto",
                "Integração com redes sociais",
              ]}
            />
            <ServiceCard
              title="Landing page de alto impacto"
              badge="Campanhas, cursos, serviços"
              text="Uma página focada em converter visitantes em contactos ou vendas, com copy directo e blocos bem estruturados."
              items={[
                "Hero persuasivo",
                "Blocos de benefícios",
                "Secção de prova social / testemunhos",
              ]}
            />
            <ServiceCard
              title="Experiência 3D no browser"
              badge="Produtos, branding, portfólios"
              text="Objetos 3D manipuláveis, animações suaves e microinteracções que mostram o teu produto/ideia de forma memorável."
              items={[
                "Three.js / WebGL",
                "Cenas 3D leves e responsivas",
                "Interação com rato / toque",
              ]}
            />
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="section processo">
          <h2 className="section-title">Como trabalhamos juntos</h2>
          <p className="section-sub">
            Um processo simples, pensado para não te roubar tempo e chegar a um
            resultado que realmente te representa.
          </p>
          <ol className="timeline">
            <TimelineStep
              step="1"
              title="Conversa inicial"
              text="Falamos por chamada ou mensagem sobre a tua ideia, objectivo e prazos. Ajudo-te a clarificar o que faz mais sentido fazer primeiro."
            />
            <TimelineStep
              step="2"
              title="Proposta & layout"
              text="Envio uma proposta simples, com o que será feito. Crio um layout base (wireframe ou mockup) para avaliares o visual."
            />
            <TimelineStep
              step="3"
              title="Desenvolvimento"
              text="Construção do site/app, animações e parte 3D. Envio versões intermédias para irmos ajustando texto, cores e secções."
            />
            <TimelineStep
              step="4"
              title="Lançamento & suporte"
              text="Publicação em produção (Netlify / alojamento à tua escolha) e pequenos ajustes após feedback inicial."
            />
          </ol>
        </section>

        {/* 3D SHOWREEL / EXPLICAÇÃO */}
        <section id="showreel" className="section showreel">
          <div className="showreel-text">
            <h2 className="section-title">3D & Interação no browser</h2>
            <p className="section-sub">
              A tua página não precisa de ser apenas texto e imagens estáticas.
              Posso integrar objetos 3D que o utilizador pode rodar, zoom e
              explorar — directamente no navegador.
            </p>
            <ul className="bullet-list">
              <li>Mostrar um produto em 360º.</li>
              <li>Explicar um conceito com elementos 3D simples.</li>
              <li>
                Dar um toque “wow” na hero section com animações suaves e luzes.
              </li>
            </ul>
            <p className="section-sub">
              Tudo isto com atenção à performance, para que o site continue
              rápido em desktop e mobile.
            </p>
          </div>
          <div className="showreel-demo">
            <ThreeHero compact />
            <p className="showreel-caption">
              Exemplo de cena 3D leve: cubo metálico com aro em wireframe,
              reagindo ao movimento do rato e com animação contínua.
            </p>
          </div>
        </section>

        {/* TECNOLOGIAS */}
        <section className="section stack">
          <h2 className="section-title">Tecnologias & stack</h2>
          <p className="section-sub">
            Trabalho com tecnologias modernas, focadas em velocidade, boas
            práticas e facilidade em fazer manutenção no futuro.
          </p>
          <div className="tag-grid">
            <span>React</span>
            <span>Vite</span>
            <span>Three.js</span>
            <span>HTML5/CSS3</span>
            <span>JavaScript moderno</span>
            <span>Netlify / GitHub</span>
            <span>UI/UX</span>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div>
            <h2 className="section-title">Vamos falar sobre o teu projecto?</h2>
            <p className="section-sub">
              Diz-me em poucas linhas o que tens em mente. Respondo com ideias
              e opções de abordagem (sem compromisso).
            </p>
            <ul className="contact-list">
              <li>
                Email: <span>luis@bentostudio.dev</span> {/* ajusta para o teu */}
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
                "Mensagem simulada ✉️ — aqui depois podemos ligar a Netlify Forms ou outro backend."
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
              placeholder="Tipo de projecto (site, landing, 3D, etc.)"
            />
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Fala-me rapidamente do teu negócio e do que precisas."
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

function ParallaxBackground() {
  return (
    <>
      <div className="parallax-layer layer-1" />
      <div className="parallax-layer layer-2" />
      <div className="parallax-layer layer-3" />
    </>
  );
}

function ScrollHint() {
  return (
    <div className="scroll-hint">
      <span className="scroll-dot" />
      <span className="scroll-text">Desce para ver mais</span>
    </div>
  );
}

function ServiceCard({ title, text, badge, items }) {
  return (
    <article className="card">
      {badge && <p className="card-badge">{badge}</p>}
      <h3>{title}</h3>
      <p className="card-text">{text}</p>
      {items && (
        <ul className="card-list">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function TimelineStep({ step, title, text }) {
  return (
    <li className="timeline-step">
      <div className="timeline-badge">{step}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
}

/* ---------- COMPONENTE 3D ---------- */

function ThreeHero({ compact }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BRAND.bg);

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

    const backLight = new THREE.PointLight(0x38bdf8, 0.8, 10);
    backLight.position.set(-3, -2, -2);
    scene.add(backLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambient);

    // Geometria (cubo + toro)
    const group = new THREE.Group();

    const cubeGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMat = new THREE.MeshStandardMaterial({
      color: BRAND.primary,
      metalness: 0.65,
      roughness: 0.25,
    });
    const cube = new THREE.Mesh(cubeGeo, cubeMat);

    const torusGeo = new THREE.TorusGeometry(2.2, 0.06, 24, 120);
    const wireMat = new THREE.MeshBasicMaterial({
      color: BRAND.accent,
      wireframe: true,
    });
    const torus = new THREE.Mesh(torusGeo, wireMat);

    group.add(cube);
    group.add(torus);
    scene.add(group);

    // Partículas simples
    const particlesGeo = new THREE.BufferGeometry();
    const count = 80;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.04,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particles);

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

      particles.rotation.y = t * 0.06;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    function onResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight || 1;
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
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
      torusGeo.dispose();
      wireMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, [compact]);

  return <div ref={mountRef} className={compact ? "three-container compact" : "three-container"} />;
}
