import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const BRAND = {
  primary: "#0B4C9E",
  accent: "#35BEAD",
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

      {/* NAV */}
      <header className="app-header">
        <div className="logo-wrap">
          <div className="logo-dot">LB</div>
          <span className="logo-text">BentoStudio</span>
        </div>
        <nav className="nav-links">
          <a href="#o-que-faco">O que faço</a>
          <a href="#seguranca">Segurança</a>
          <a href="#processo">Processo</a>
          <a href="#contacto" className="nav-cta">
            Fala comigo
          </a>
        </nav>
      </header>

      <main className="main">
        {/* HERO – CLAREZA TOTAL */}
        <section className="hero" id="topo">
          <div className="hero-text">
            <p className="eyebrow">Web profissional • Sem complicações</p>
            <h1>
              Crio websites claros e seguros
              <span className="highlight-block">
                para pessoas e negócios que querem inspirar confiança online.
              </span>
            </h1>
            <p className="hero-sub">
              Planeio, desenho e desenvolvo o teu site: layout moderno, texto
              organizado, formulários a funcionar e alojamento estável em
              plataformas fiáveis (como Netlify) com ligação ao teu GitHub.
            </p>

            <div className="hero-buttons">
              <a href="#contacto" className="btn-primary">
                Quero um site profissional
              </a>
              <a href="#o-que-faco" className="btn-ghost">
                Ver exactamente o que faço
              </a>
            </div>

            <div className="hero-small">
              <strong>Resultado:</strong> quem entra no teu site percebe rápido
              quem és, o que fazes e como pode confiar em ti.
            </div>

            <ScrollHint />
          </div>

          {/* 3D como demonstração, não como foco */}
          <div className="hero-3d">
            <ThreeHero />
          </div>
        </section>

        {/* O QUE FAÇO – MUITO DIRETO */}
        <section id="o-que-faco" className="section">
          <h2 className="section-title">Em que é que eu te ajudo, na prática?</h2>
          <p className="section-sub">
            O meu trabalho é pegar na tua ideia/negócio e transformá-la num
            website simples de entender, moderno e com base técnica sólida.
          </p>

          <div className="cards">
            <ServiceCard
              title="Website completo"
              badge="Para negócios e marcas pessoais"
              text="Site com várias secções (Home, Sobre, Serviços, Contacto…) pensado para explicar bem o que fazes."
              items={[
                "Texto organizado para explicar o teu serviço",
                "Layout adaptado a telemóvel, tablet e PC",
                "Botões claros para contacto (email, WhatsApp, etc.)",
              ]}
            />
            <ServiceCard
              title="Landing page focada em conversão"
              badge="Para um serviço específico ou campanha"
              text="Uma página única, directa ao assunto, para levar a pessoa a pedir orçamento, reservar ou contactar."
              items={[
                "Headline clara → o que fazes e para quem",
                "Benefícios e provas sociais",
                "Formulário simples e rápido de preencher",
              ]}
            />
            <ServiceCard
              title="Demonstração 3D no browser"
              badge="Opcional, para quem precisa"
              text="Pequena cena 3D para demonstrar um produto, espaço ou conceito (ex.: porta, peça, objecto)."
              items={[
                "Objeto 3D a rodar / reagir ao rato",
                "Possibilidade de mudar cor/material",
                "Sempre como complemento, nunca como confusão",
              ]}
            />
          </div>
        </section>

        {/* SECÇÃO DE SEGURANÇA / CONFIANÇA */}
        <section id="seguranca" className="section">
          <h2 className="section-title">Segurança, transparência e controlo</h2>
          <p className="section-sub">
            Não é só “um site giro”. Há preocupações de segurança e propriedade:
            o código é teu, o domínio é teu e o acesso é teu.
          </p>

          <div className="cards">
            <ServiceCard
              title="Código no teu GitHub"
              badge="Transparência total"
              text="O projecto fica num repositório teu. Se um dia quiseres mudar de programador, levas tudo contigo."
              items={[
                "Sem dependência de uma plataforma “fechada”",
                "Histórico de versões do teu site",
                "Facilita melhorias futuras",
              ]}
            />
            <ServiceCard
              title="Alojamento fiável (como Netlify)"
              badge="Estável e com HTTPS"
              text="Site servido com HTTPS, compressão, CDN e boas práticas de performance."
              items={[
                "Ligação segura (cadeado no browser)",
                "Infraestrutura usada por milhares de projectos",
                "Deploys automáticos a partir do GitHub",
              ]}
            />
            <ServiceCard
              title="Formulários e dados com cuidado"
              badge="Foco na privacidade"
              text="Formulários configurados para enviar as mensagens para o teu email, sem guardares dados sensíveis em lado estranho."
              items={[
                "Envio directo para o teu email",
                "Explicação clara de como as mensagens são tratadas",
                "Configurações ajustadas ao teu contexto",
              ]}
            />
          </div>
        </section>

        {/* PROCESSO – PARA DAR SEGURANÇA */}
        <section id="processo" className="section processo">
          <h2 className="section-title">Como é que trabalhamos, passo a passo</h2>
          <p className="section-sub">
            Um processo simples, sem “linguagem de programador”. Vais sabendo
            sempre o que está a acontecer.
          </p>
          <ol className="timeline">
            <TimelineStep
              step="1"
              title="Reunião rápida"
              text="Percebo o teu negócio, público-alvo e principal objetivo do site (informar, vender, agendar, etc.)."
            />
            <TimelineStep
              step="2"
              title="Estrutura e texto"
              text="Defino as secções e ajudo a organizar o texto de forma clara, para que qualquer pessoa entenda."
            />
            <TimelineStep
              step="3"
              title="Design & desenvolvimento"
              text="Crio o layout, implemento em React e ajusto animações. Se fizer sentido, adiciono um elemento 3D demonstrativo."
            />
            <TimelineStep
              step="4"
              title="Publicação & ajustes"
              text="Publicamos o site, ligamos o teu domínio e fazemos pequenos ajustes depois dos primeiros feedbacks."
            />
          </ol>
        </section>

        {/* SHOWREEL / DEMO 3D COMO EXTRA */}
        <section className="section showreel">
          <div className="showreel-text">
            <h2 className="section-title">Demonstração visual (3D opcional)</h2>
            <p className="section-sub">
              A parte 3D não é obrigação; é um extra para quem quer mostrar um
              objecto, espaço ou produto de forma diferente.
            </p>
            <ul className="bullet-list">
              <li>Objectos abstractos (como o “cristal” que vês aqui).</li>
              <li>
                Elementos mais concretos (ex.: uma porta, uma peça, um frasco).
              </li>
              <li>Mudança de cor, rotação suave e pequenos destaques de luz.</li>
            </ul>
            <p className="section-sub">
              A ideia é simples: mostrar que, se precisares, consigo integrar
              este tipo de experiência no teu site – sempre sem perder clareza.
            </p>
          </div>
          <div className="showreel-demo">
            <ThreeHero compact />
            <p className="showreel-caption">
              Exemplo 3D: “crystal core” com aro, partículas e resposta ao
              movimento do rato — apenas como demonstração técnica.
            </p>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div>
            <h2 className="section-title">Queres falar sobre o teu site?</h2>
            <p className="section-sub">
              Diz-me em poucas linhas o que fazes e o tipo de site que imaginas.
              Respondo com sugestões honestas e caminhos possíveis.
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
                "Mensagem enviada (simulado). Depois podemos ligar isto a Netlify Forms ou outro serviço."
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
              placeholder="Fala-me do teu negócio e do que precisas do site."
            />
            <button type="submit" className="btn-primary full">
              Enviar mensagem
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} BentoStudio — Websites claros & 3D
          opcional
        </p>
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
      <span className="scroll-text">Desce para ver como trabalho</span>
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
