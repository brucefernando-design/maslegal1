import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";

import heroImage from "../assets/mas-legal-editorial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mas Legal | Despacho en Nuevo Laredo" },
      {
        name: "description",
        content:
          "Despacho legal en Nuevo Laredo con atención en apostillas, derecho familiar, laboral y civil.",
      },
      { property: "og:title", content: "Mas Legal | Despacho en Nuevo Laredo" },
      {
        property: "og:description",
        content:
          "Atención legal en apostillas, derecho familiar, laboral y civil en Nuevo Laredo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whatsappUrl =
  "https://wa.me/528688183517?text=Hola%2C%20quisiera%20solicitar%20una%20consulta%20con%20Mas%20Legal.";

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`site-header ${scrolled ? "site-header--solid" : ""}`}
      >
        <a className="wordmark" href="#inicio" aria-label="Mas Legal, inicio">
          <span>MAS</span>
          <span>LEGAL</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          aria-label="Navegación principal"
          className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
        >
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#proceso" onClick={() => setMenuOpen(false)}>Proceso</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <img
            src={heroImage}
            alt="Documento de papel fino, sello y pluma sobre un escritorio de madera"
            width={1920}
            height={1280}
            className="hero-image"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">Despacho en Nuevo Laredo</p>
            <h1 id="hero-title">Certeza legal,<br />trato personal.</h1>
            <p className="hero-copy">
              Atención clara y cuidadosa para trámites de apostilla y asuntos
              familiares, laborales y civiles.
            </p>
            <div className="hero-action">
              <a className="button button--brass" href="#contacto">
                Solicitar consulta
              </a>
              <a className="phone-link" href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp&nbsp; +52 868 818 3517
              </a>
            </div>
          </div>
          <a className="hero-index" href="#servicios" aria-label="Ir a servicios">
            <span>01</span>
            <span className="hero-index-line" />
            <span>Servicios</span>
          </a>
        </section>

        <section id="servicios" className="services-section">
          <div className="section-intro">
            <p className="kicker">Áreas de práctica</p>
            <h2>Asuntos importantes.<br />Atención precisa.</h2>
            <p>
              Cada caso comienza por entender el documento, la circunstancia y
              el siguiente paso con claridad.
            </p>
          </div>

          <div className="services-editorial">
            <article className="service-major">
              <p className="service-number">01</p>
              <h3>Apostillas</h3>
              <p className="service-lead">
                Orientación para preparar y dar curso a documentos que necesitan
                surtir efectos fuera de su lugar de origen.
              </p>
              <ul className="service-list">
                <li><span>Documentos civiles</span><span>Consulta</span></li>
                <li><span>Documentos académicos</span><span>Consulta</span></li>
                <li><span>Poderes y documentos notariales</span><span>Consulta</span></li>
              </ul>
              <a className="text-link" href="#proceso">Conocer el proceso</a>
            </article>

            <article className="service-intimate">
              <p className="service-number">02</p>
              <h3>Derecho<br />familiar</h3>
              <p>
                Acompañamiento cercano en decisiones que requieren discreción,
                escucha y una ruta legal comprensible.
              </p>
              <a className="text-link" href="#contacto">Hablar de su caso</a>
            </article>

            <article className="service-small">
              <p className="service-number">03</p>
              <h3>Laboral</h3>
              <p>Orientación para entender su situación y valorar los pasos disponibles.</p>
            </article>
            <article className="service-small service-small--last">
              <p className="service-number">04</p>
              <h3>Civil</h3>
              <p>Atención a asuntos civiles desde una perspectiva directa y ordenada.</p>
            </article>
          </div>
        </section>

        <section id="proceso" className="process-section">
          <div className="process-heading">
            <p className="kicker">Proceso de apostilla</p>
            <h2>Una ruta clara,<br />de principio a fin.</h2>
          </div>
          <ol className="timeline">
            <li>
              <span className="timeline-number">01</span>
              <h3>Revisión</h3>
              <p>Revisamos el tipo de documento y su lugar de origen.</p>
            </li>
            <li>
              <span className="timeline-number">02</span>
              <h3>Preparación</h3>
              <p>Definimos los requisitos y la documentación necesaria.</p>
            </li>
            <li>
              <span className="timeline-number">03</span>
              <h3>Seguimiento</h3>
              <p>Damos continuidad al trámite y comunicamos cada avance.</p>
            </li>
            <li>
              <span className="timeline-number">04</span>
              <h3>Entrega</h3>
              <p>Confirmamos el cierre y la entrega de sus documentos.</p>
            </li>
          </ol>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-copy">
            <p className="kicker kicker--light">Consulta</p>
            <h2>Conversemos sobre<br />su asunto.</h2>
            <p>
              Comparta sus datos y continúe la conversación de manera directa
              por WhatsApp.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-phone">
              +52 868 818 3517
            </a>
          </div>

          <form className="contact-form" onSubmit={handleContact}>
            <label>
              <span>Nombre</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              <span>Teléfono</span>
              <input name="phone" type="tel" autoComplete="tel" required />
            </label>
            <label>
              <span>Asunto</span>
              <select name="matter" defaultValue="">
                <option value="" disabled>Seleccione un área</option>
                <option>Apostillas</option>
                <option>Familiar</option>
                <option>Laboral</option>
                <option>Civil</option>
              </select>
            </label>
            <label>
              <span>Mensaje</span>
              <textarea name="message" rows={2} />
            </label>
            <button className="button button--outline" type="submit">
              Continuar por WhatsApp
            </button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">MAS LEGAL</div>
        <p>Despacho en Nuevo Laredo, Tamaulipas</p>
        <p>© {new Date().getFullYear()} Mas Legal · Aviso legal</p>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar a Mas Legal por WhatsApp"
      >
        W
      </a>
    </div>
  );
}