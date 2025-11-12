import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND = {
  primary: "#0B4C9E",
  accent: "#35BEAD",
  bg: "#020617", // fundo da cena 3D (dentro do card)
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
              crio websites e experiências 3D{" "}
              <span className="highlight-block">
                claros, modernos e focados em resultados.
              </span>
            </h1>
            <p className="hero-sub">
              Ajudo pessoas e negócios a terem uma presença online com aspecto
              profissional: sites limpos, animações suaves e interação 3D no
              browser para explicar melhor produtos, serviços e ideias.
            </p>
            <div className="hero-buttons">
              <a href="#contacto" className="btn-primary">
                Quero um site para o meu negócio
              </a>
              <a href="#showreel" className="btn-ghost">
                Ver demo 3D & stack
              </a>
            </div>
            <p className="hero-small">
              Websites responsivos • Landing pages • 3D interativo • UI/UX
            </p>
            <ScrollHint />
          </div>

          <div className="hero-3d" id="3d">
            <ThreeHero />
          </div>
        </section>

        {/* RIBBON / TECHS */}
        <section className="ribbon">
          <div className="ribbon-track">
            <span>React</span>
            <span>Vite</span>
            <span>Three.js</span>
            <span>WebGL</span>
            <span>HTML5 &amp; CSS3</span>
            <span>JavaScript moderno</span>
            <span>Netlify &amp; GitHub</span>
            <span>UI &amp; UX</span>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="section">
          <h2 className="section-title">O que posso criar para ti</h2>
          <p className="section-sub">
            Desde um site simples para mostrar o teu negócio até experiências 3D
            interativas no browser. Tudo com um visual limpo e moderno.
          </p>
          <div className="cards">
            <ServiceCard
              title="Website completo"
              badge="Negócios, clínicas, marcas pessoais"
              text="Estrutura de páginas pensada, copy organizado, navegação intuitiva e secção de contacto optimizada."
              items={[
                "Layout responsivo (desktop e mobile)",
                "Secções Sobre, Serviços, Portfólio, Contacto",
                "Integração com redes sociais",
              ]}
            />
            <ServiceCard
              title="Landing page focada em conversão"
              badge="Cursos, serviços, eventos"
              text="Uma única página clara, directa e optimizada para transformar visitas em mensagens, inscrições ou vendas."
              items={[
                "Hero forte com chamada à acção",
                "Benefícios, prova social, FAQ",
                "Formulário simples e directo",
              ]}
            />
            <ServiceCard
              title="Experiência 3D no browser"
              badge="Produtos, storytelling, portfólios"
              text="Objetos 3D manipuláveis, animação, iluminação e microinteracções criadas em Three.js."
              items={[
                "Cenas 3D leves e responsivas",
                "Interação com rato e toque",
                "Animações contínuas e suaves",
              ]}
            />
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="section processo">
          <h2 className="section-title">Processo simples e transparente</h2>
          <p className="section-sub">
            Não precisas de saber nada de tecnologia: explico as opções, guiando
            o processo do primeiro rascunho ao site online.
          </p>
          <ol className="timeline">
            <TimelineStep
              step="1"
              title="Conversa inicial"
              text="Entendo quem és, o que fazes e qual é o principal objetivo do site (explicar, vender, marcar consultas, etc.)."
            />
            <TimelineStep
              step="2"
              title="Wireframe & visual"
              text="Desenho a estrutura e o visual base: secções, hierarquia da informação, estilo gráfico e pontos de foco."
            />
            <TimelineStep
              step="3"
              title="Desenvolvimento & 3D"
              text="Transformo o layout em website real, com animações, interações e (se fizer sentido) um elemento 3D."
            />
            <TimelineStep
              step="4"
              title="Lançamento & ajustes"
              text="Coloco online (por ex. Netlify), configuramos domínio e fazemos ajustes finos depois dos primeiros feedbacks."
            />
          </ol>
        </section>

        {/* 3D & STACK DEMO */}
        <section id="showreel" className="section showreel">
          <div className="showreel-text">
            <h2 className="section-title">Crystal Core 3D & tecnologias</h2>
            <p className="section-sub">
              Além do design visual, gosto de explorar aquilo que o browser
              consegue fazer hoje: 3D com Three.js, animações suaves e scroll
              com efeito parallax.
            </p>
            <ul className="bullet-list">
              <li>Objeto 3D abstracto tipo “cristal tecnológico”.</li>
              <li>Aro em wireframe a rodar, com partículas.</li>
              <li>
                Reacção ao movimento do rato, luzes dinâmicas e profundidade.
              </li>
            </ul>
            <p className="section-sub">
              Esta demo é apenas um exemplo: a mesma lógica pode ser aplicada a
              portas, produtos, maquetes de espaços, componentes, etc.
            </p>
          </div>
          <div className="showreel-demo">
            <ThreeHero compact />
            <p className="showreel-caption">
              Demo “Crystal Core”: poliedro translúcido com aro metálico em
              wireframe, partículas e animação contínua.
            </p>
          </div>
        </section>

        {/* STACK VISUAL */}
        <section className="section stack">
          <h2 className="section-title">Stack & ferramentas</h2>
          <p className="section-sub">
            Estas são algumas das tecnologias que uso nos projectos — mas
            escolho sempre o que faz sentido para cada caso.
          </p>
          <div className="tag-grid">
            <span>React</span>
            <span>Vite</span>
            <span>Three.js</span>
            <span>WebGL</span>
            <span>HTML5</span>
            <span>CSS moderno (flex, grid)</span>
            <span>JavaScript ES6+</span>
            <span>Netlify</span>
            <span>GitHub</span>
            <span>UI &amp; UX</span>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div>
            <h2 className="section-title">Vamos falar sobre o teu projeto?</h2>
            <p className="section-sub">
              Partilha rapidamente o tipo de site que tens em mente. Respondo
              com ideias, sugestões e caminhos possíveis.
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
                "Mensagem simulada ✉️ — mais tarde podemos ligar isto a Netlify Forms ou outro backend."
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
              placeholder="Fala-me do teu negócio e do que precisas."
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

/* ---------- COMPONENTE 3D (Crystal Core) ---------- */

function ThreeHero({ compact }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight || 1;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(BRAND.bg);

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Luzes
    const keyLight = new THREE.SpotLight(0xffffff, 1.4, 20, Math.PI / 6, 0.3);
    keyLight.position.set(4, 6, 6);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x60a5fa, 1.0, 12);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0xa855f7, 0.9, 12);
    rimLight.position.set(0, 3, -4);
    scene.add(rimLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    // Grupo principal
    const group = new THREE.Group();
    scene.add(group);

    // Poliedro (cristal)
    const crystalGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.4,
      roughness: 0.05,
      transmission: 0.8,
      thickness: 0.7,
      transparent: true,
      opacity: 0.95,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    group.add(crystal);

    // Aro em wireframe
    const ringGeo = new THREE.TorusGeometry(2.4, 0.07, 24, 160);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      wireframe: true,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    group.add(ring);

    // Partículas
    const particlesGeo = new THREE.BufferGeometry();
    const count = 100;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 3;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 3.5;
      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(angle) * r;
    }
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particlesMat = new THREE.PointsMaterial({
      color: 0x93c5fd,
      size: 0.045,
      sizeAttenuation: true,
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

      crystal.rotation.x = t * 0.6 + mouse.y * 0.8;
      crystal.rotation.y = t * 0.9 + mouse.x * 1.2;

      ring.rotation.y = t * 0.4;
      ring.rotation.z = t * 0.3;

      group.position.y = Math.sin(t * 1.1) * 0.18;

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
      crystalGeo.dispose();
      crystalMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, [compact]);

  return (
    <div
      ref={mountRef}
      className={compact ? "three-container compact" : "three-container"}
    />
  );
}
