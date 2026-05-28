// Shared sub-page chrome — uses TopNav + Footer already on window from components.jsx.
// Each sub-page renders <PageShell title eyebrow lead>{children}</PageShell>.

function PageShell({ eyebrow, title, lead, children, screen }) {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div data-screen-label={screen}>
      <TopNav onCta={() => { window.location.href = 'index.html#contact'; }} />
      <section className="cs-page-hero" id="main-content">
        <div className="cs-page-hero__inner">
          <a className="cs-back" href="index.html"><Lucide name="arrow-left" size={14} /> Back to home</a>
          {eyebrow && <div className="cs-eyebrow">{eyebrow}</div>}
          <h1 className="cs-page-hero__title">{title}</h1>
          {lead && <p className="cs-lead">{lead}</p>}
        </div>
      </section>
      {children}
      <Footer />
    </div>
  );
}

const Lucide = ({ name, size = 20, className = '', color }) => (
  <i data-lucide={name} style={{ width: size, height: size, color }} className={className} aria-hidden="true" />
);

Object.assign(window, { PageShell, Lucide });
