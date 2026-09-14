// CharterSelect — Marketing site building blocks
// Loaded as a Babel script. Exports components onto window for index.html.

// ── Replace these two placeholders before deploying ──────────────────────────
// 1. Create a free Formspree account at formspree.io, set recipient to
//    aschwen@charterselect.com, and paste your form ID below.
// 2. Paste your Calendly (or Cal.com) 20-min booking URL below.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/meenoepv';
const CALENDAR_LINK = 'https://calendar.app.google/JmcCzGBFQQdTYA1b6';
// ─────────────────────────────────────────────────────────────────────────────

const Lucide = ({ name, size = 20, className = '', color }) => (
  <i data-lucide={name} style={{ width: size, height: size, color }} className={className} aria-hidden="true" />
);

/* ---------- Top Nav ---------- */
function TopNav({ onCta }) {
  const [open, setOpen] = React.useState(false);
  const firstMenuLinkRef = React.useRef(null);
  const links = [
    { href: '/property-liability', label: 'Property & Liability' },
    { href: '/employee-benefits', label: 'Employee Benefits' },
    { href: '/why', label: 'Why CharterSelect' },
    { href: '/commitment', label: 'Our Commitment' },
    { href: '/about', label: 'About' },
    { href: '/insights', label: 'Insights' },
    { href: '/renewal-report-card', label: 'Renewal Report Card' },
    { href: '/bond-compliance-review', label: 'Bond Compliance Review' },
    { href: '/solutions', label: 'Solutions' },
  ];

  React.useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handleKeyDown);
    if (firstMenuLinkRef.current) firstMenuLinkRef.current.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      <a className="cs-skip-link" href="#main-content">Skip to main content</a>
      <header className="cs-nav" style={{zIndex:300, position:'relative'}}>
        <div className="cs-nav__inner">
          <a className="cs-nav__brand" href="/">
            <img src="assets/logo-no-slogan.svg" alt="CharterSelect — Charter School Insurance" />
          </a>
          <nav className="cs-nav__links" aria-label="Main navigation">
            {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <div className="cs-nav__cta">
            <a className="cs-btn cs-btn--primary cs-btn--sm" href="/contact" style={{textDecoration:'none'}}>
              Get a Free Review
            </a>
          </div>
          <button
            className="cs-hamburger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="cs-mobile-menu"
          >
            <span className={`cs-hamburger__bar ${open ? 'open' : ''}`} aria-hidden="true" />
            <span className={`cs-hamburger__bar ${open ? 'open' : ''}`} aria-hidden="true" />
            <span className={`cs-hamburger__bar ${open ? 'open' : ''}`} aria-hidden="true" />
          </button>
        </div>
        {open && (
          <nav id="cs-mobile-menu" className="cs-mobile-menu" aria-label="Mobile navigation">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                className="cs-mobile-menu__link"
                onClick={() => setOpen(false)}
                ref={i === 0 ? firstMenuLinkRef : null}
              >{l.label}</a>
            ))}
            <a href="contact" className="cs-mobile-menu__cta" onClick={() => setOpen(false)}>Get a Free Review</a>
          </nav>
        )}
      </header>
    </>
  );
}

/* ---------- Hero ---------- */
// Home-page components below read ALL visible copy from window.__PAGE_CONTENT
// (content/pages/home.js) — the same object scripts/generate-shells.js renders
// the static SEO shell from. Never hardcode copy here; edit the content module.
// They are only rendered on index.html, where that module is loaded.
// TopNav and Footer are shared across pages and must NOT read __PAGE_CONTENT.
const homeSection = (id) => window.__PAGE_CONTENT.sections.find(s => s.id === id);

function Hero({ onPrimary, onSecondary }) {
  const H = window.__PAGE_CONTENT.hero;
  const NEED = homeSection('need-selector');
  const [regular, gold] = [NEED.items.filter(i => !i.gold), NEED.items.find(i => i.gold)];
  return (
    <section className="cs-hero" id="main-content">
      <div className="cs-hero__inner">
        <div className="cs-hero__copy">
          <div className="cs-eyebrow" style={{fontSize:11, letterSpacing:'0.1em', marginBottom:8}}>{H.eyebrow}</div>
          <h1 className="cs-display" style={{marginTop:0}}>
            {H.titleLines[0]}<br/>{H.titleLines[1]}
          </h1>
          <p className="cs-lead">
            {H.lead}
          </p>

          {/* ── Need selector ── */}
          <div className="cs-need-selector">
            <p className="cs-need-selector__label">{NEED.label}</p>
            <div className="cs-need-selector__btns">
              {regular.map(it => (
                <a className="cs-need-btn" href={it.href} key={it.title}>
                  <Lucide name={it.icon} size={20} />
                  <span>{it.title}</span>
                  <Lucide name="arrow-right" size={16} className="cs-need-btn__arrow" />
                </a>
              ))}
              <a className="cs-need-btn" href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer"
                style={{background:'#FBBF24', borderColor:'#FBBF24', color:'#1F2937'}}>
                <i data-lucide={gold.icon} style={{width:20, height:20, color:'#1F2937', flexShrink:0}} aria-hidden="true" />
                <span>{gold.title}</span>
                <i data-lucide="arrow-right" style={{width:16, height:16, color:'#1F2937', opacity:0.7, flexShrink:0}} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="cs-hero__actions" style={{marginTop: 24}}>
            <button className="cs-btn cs-btn--secondary" onClick={() => window.open(CALENDAR_LINK, '_blank')}>
              <Lucide name="calendar" size={16} />
              {H.bookCall}
            </button>
          </div>
          <div className="cs-hero__trust">
            <Lucide name="shield-check" size={16} />
            <span>{H.trust}</span>
          </div>
        </div>
        <div className="cs-hero__art">
          <img src="BK-charterselect-logo.png" alt="CharterSelect — Charter School Insurance" className="cs-hero__mark" style={{filter:'none'}} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats Bar ---------- */
function StatsBar() {
  const stats = homeSection('stats').items;
  return (
    <section className="cs-stats" aria-label="Company statistics">
      <div className="cs-stats__inner">
        {stats.map(s => (
          <div className="cs-stat" key={s.kind === 'usa' ? s.title : s.body}>
            {s.kind === 'usa' ? (
              <div className="cs-stat__usa" aria-label="United States">
                <img src="assets/usa-outline-transparent.png" alt="United States map" />
              </div>
            ) : (
              <div className="cs-stat__num">{s.title}</div>
            )}
            <div className="cs-stat__lbl">{s.kind === 'usa' ? s.title : s.body}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Solutions / Value Props ---------- */
function Solutions() {
  const SEC = homeSection('solutions');
  return (
    <section className="cs-section" id="solutions">
      <div className="cs-section__inner">
        <div className="cs-section__head">
          <div className="cs-eyebrow">{SEC.eyebrow}</div>
          <h2>{SEC.h2}</h2>
        </div>
        <div className="cs-grid cs-grid--4">
          {SEC.items.map(it => (
            <article className="cs-card" key={it.title}>
              <div className="cs-card__icon"><Lucide name={it.icon} size={22} /></div>
              <h4 className="cs-card__title">{it.title}</h4>
              <p className="cs-card__body">{it.body}</p>
            </article>
          ))}
        </div>
        <div style={{textAlign:'center', marginTop:40}}>
          <a className="cs-btn cs-btn--primary" href="/contact" style={{textDecoration:'none'}}>
            <Lucide name="shield-check" size={16} /> {SEC.button}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Testimonial (standalone, appears before WhyUs) ---------- */
function FeaturedTestimonial() {
  const SEC = homeSection('featured-quote');
  const Q = SEC.quotes[0];
  return (
    <section style={{background:'var(--cs-teal)', padding:'80px 32px'}}>
      <div style={{maxWidth:860, margin:'0 auto'}}>
        {/* Outcome badge */}
        <div style={{display:'flex', justifyContent:'center', marginBottom:32}}>
          <div style={{display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.25)', borderRadius:999, padding:'7px 18px', fontSize:12, fontWeight:700, letterSpacing:'0.13em', textTransform:'uppercase', color:'var(--cs-gold)'}}>
            <Lucide name="check-circle" size={13} color="var(--cs-gold)" />
            {SEC.badge}
          </div>
        </div>

        {/* Giant quote mark */}
        <div style={{textAlign:'center', marginBottom:8}}>
          <svg width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden="true">
            <path d="M0 36V22.5C0 10.5 6 3 18 0l3 4.5C13.5 7.5 10.5 12 10.5 18H18V36H0ZM30 36V22.5C30 10.5 36 3 48 0l3 4.5C43.5 7.5 40.5 12 40.5 18H48V36H30Z" fill="rgba(251,191,36,0.35)"/>
          </svg>
        </div>

        {/* Quote text */}
        <p style={{fontFamily:'var(--font-display)', fontWeight:400, fontStyle:'italic', fontSize:'clamp(1.35rem, 2.8vw, 1.75rem)', lineHeight:1.5, color:'#fff', textAlign:'center', margin:'0 0 40px', letterSpacing:'-0.01em'}}>
          {Q.quote}
        </p>

        {/* Attribution with headshot */}
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:20}}>
          <img
            src={Q.image}
            alt={Q.name}
            style={{width:72, height:72, borderRadius:'50%', objectFit:'cover', objectPosition:'center top', border:'3px solid var(--cs-gold)', flexShrink:0, boxShadow:'0 4px 16px rgba(0,0,0,0.25)'}}
          />
          <div>
            <div style={{fontFamily:'var(--font-body)', fontWeight:700, fontSize:16, color:'#fff', marginBottom:3}}>{Q.name}</div>
            <div style={{fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.4}}>{Q.role}</div>
            <div style={{fontSize:12, color:'rgba(255,255,255,0.5)', marginTop:4, fontStyle:'italic'}}>{Q.date}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why CharterSelect (split) ---------- */
function WhyUs() {
  const SEC = homeSection('why-us');
  const TESTIMONIALS = SEC.quotes;
  const [idx, setIdx] = React.useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[idx];
  const timerRef = React.useRef(null);
  const touchStartX = React.useRef(null);
  const [paused, setPaused] = React.useState(false);

  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  // Auto-cycle every 5s, stops permanently on manual interaction
  React.useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % total), 5000);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const handlePrev = () => { prev(); setPaused(true); clearInterval(timerRef.current); };
  const handleNext = () => { next(); setPaused(true); clearInterval(timerRef.current); };
  const handleDot = (i) => { setIdx(i); setPaused(true); clearInterval(timerRef.current); };

  // Swipe handlers
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? handleNext() : handlePrev();
    touchStartX.current = null;
  };

  const points = SEC.bullets;

  const btnStyle = {
    width: 44, height: 44, borderRadius: '50%', border: '2px solid var(--cs-teal)',
    background: '#fff', color: 'var(--cs-teal)', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 140ms, color 140ms', flexShrink: 0,
    boxShadow: 'var(--shadow-sm)',
  };

  return (
    <section className="cs-section cs-section--cream" id="why">
      <div className="cs-section__inner cs-split">
        <div>
          <div className="cs-eyebrow">{SEC.eyebrow}</div>
          <h2>{SEC.h2}</h2>
          <p className="cs-lead">
            {SEC.paras[0]}
          </p>
          <ul className="cs-checklist">
            {points.map(p => (
              <li key={p}>
                <Lucide name="check" size={16} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="cs-quote-card"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{userSelect:'none'}}
          aria-label="Client testimonials"
        >
          <div aria-live="polite" aria-atomic="true">
            {t.outcome && (
              <div style={{display:'inline-flex', alignItems:'center', gap:6, background:'var(--cs-teal-50)', color:'var(--cs-teal)', fontSize:11, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', padding:'4px 10px', borderRadius:999, marginBottom:12}}>
                <Lucide name="check-circle" size={12} />
                {t.outcome}
              </div>
            )}
            <Lucide name="quote" size={28} />
            <p className="cs-quote">"{t.quote}"</p>
            <div className="cs-quote-attr" style={{display:'flex', alignItems:'center', gap:12}}>
              {t.photo && (
                <img src={t.photo} alt={t.name} style={{width:52, height:52, borderRadius:'50%', objectFit:'cover', objectPosition:'center top', border:'2px solid var(--cs-teal)', flexShrink:0}} />
              )}
              <div>
                <strong>{t.name}</strong><br/>
                <span>{t.role}{t.school ? ` · ${t.school}` : ''}</span>
              </div>
            </div>
          </div>
          {/* Nav row: prev · dots · next */}
          <div style={{display:'flex', alignItems:'center', gap:12, marginTop:22}}>
            <button style={btnStyle} onClick={handlePrev} aria-label="Previous testimonial"
              onMouseEnter={e => { e.currentTarget.style.background='var(--cs-teal)'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.color='var(--cs-teal)'; }}>
              <Lucide name="chevron-left" size={20} />
            </button>
            <div style={{display:'flex', gap:8, flex:1, justifyContent:'center'}} role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`cs-quote-dot ${i === idx ? 'is-active' : ''}`}
                  onClick={() => handleDot(i)}
                  aria-label={`Show testimonial ${i + 1} of ${TESTIMONIALS.length}`}
                  aria-current={i === idx ? 'true' : undefined}
                />
              ))}
            </div>
            <button style={btnStyle} onClick={handleNext} aria-label="Next testimonial"
              onMouseEnter={e => { e.currentTarget.style.background='var(--cs-teal)'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.color='var(--cs-teal)'; }}>
              <Lucide name="chevron-right" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Coverage Rank (drag-to-order) ---------- */

// Peer comparison data — % of charter school leaders who rank each concern #1.
// Update these numbers as real quiz responses come in.
// Keys match item IDs: 0=umbrella/ELL, 1=water/sewage, 2=building value, 3=cyber, 4=student injury
const PEER_STATS = { 0: 38, 1: 11, 2: 27, 3: 15, 4: 9 };
const PEER_LABELS = {
  0: 'umbrella / educators legal liability',
  1: 'water & sewage damage limits',
  2: 'building valuation accuracy',
  3: 'cyber & phishing coverage',
  4: 'student injury medical coverage',
};

function getPeerStat(topId) {
  const pct = PEER_STATS[topId];
  const label = PEER_LABELS[topId];
  if (pct >= 30) {
    return { emoji: '🤝', headline: `You're in the majority.`, body: `${pct}% of charter school leaders we've surveyed also rank ${label} as their #1 concern — and it's the gap we find most often in policy reviews.` };
  }
  if (pct >= 18) {
    return { emoji: '🔍', headline: `You're tracking something real.`, body: `${pct}% of leaders share your top concern about ${label}. It's not the most common answer, but it's one of the gaps that surprises schools the most when we dig in.` };
  }
  return { emoji: '⚡', headline: `You're ahead of the curve.`, body: `Only ${pct}% of charter school leaders flag ${label} first — most don't catch it until a claim. That instinct is exactly what a benchmark review is built to validate.` };
}

function UploadCta() {
  const SEC = homeSection('coverage-check');
  const FORM = SEC.form;
  const ITEMS = SEC.bullets.map((text, id) => ({ id, text }));

  const [items, setItems] = React.useState(ITEMS);
  const [dragging, setDragging] = React.useState(null);
  const [dragOver, setDragOver] = React.useState(null);
  const [hasRanked, setHasRanked] = React.useState(false);

  // Touch sort state
  const touchDragIdx = React.useRef(null);
  const touchRowRefs = React.useRef([]);

  // ── Keyboard reorder handler ──
  const handleRankKeyDown = (e, idx) => {
    if (e.key === 'ArrowUp' && idx > 0) {
      e.preventDefault();
      const next = [...items];
      [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
      setItems(next);
      setHasRanked(true);
      setTimeout(() => touchRowRefs.current[idx - 1] && touchRowRefs.current[idx - 1].focus(), 0);
    } else if (e.key === 'ArrowDown' && idx < items.length - 1) {
      e.preventDefault();
      const next = [...items];
      [next[idx + 1], next[idx]] = [next[idx], next[idx + 1]];
      setItems(next);
      setHasRanked(true);
      setTimeout(() => touchRowRefs.current[idx + 1] && touchRowRefs.current[idx + 1].focus(), 0);
    }
  };

  // ── Mouse drag handlers (desktop) ──
  const onDragStart = (e, idx) => { setDragging(idx); e.dataTransfer.effectAllowed = 'move'; };
  const onDragOver = (e, idx) => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; setDragOver(idx); };
  const onDrop = (e, idx) => {
    e.preventDefault();
    if (dragging === null || dragging === idx) { setDragging(null); setDragOver(null); return; }
    const next = [...items];
    const [moved] = next.splice(dragging, 1);
    next.splice(idx, 0, moved);
    setItems(next);
    setDragging(null);
    setDragOver(null);
    setHasRanked(true);
  };
  const onDragEnd = () => { setDragging(null); setDragOver(null); };

  // ── Touch handlers (mobile) ──
  const onTouchStartRow = (e, idx) => {
    touchDragIdx.current = idx;
    setDragging(idx);
  };
  const onTouchMoveRow = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const els = touchRowRefs.current;
    for (let i = 0; i < els.length; i++) {
      if (!els[i]) continue;
      const rect = els[i].getBoundingClientRect();
      if (touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
        setDragOver(i);
        break;
      }
    }
  };
  const onTouchEndRow = (e) => {
    const from = touchDragIdx.current;
    const to = dragOver;
    if (from !== null && to !== null && from !== to) {
      const next = [...items];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      setItems(next);
      setHasRanked(true);
    }
    touchDragIdx.current = null;
    setDragging(null);
    setDragOver(null);
  };

  const [contactName, setContactName] = React.useState('');
  const [schoolName, setSchoolName] = React.useState('');
  const [contactEmail, setContactEmail] = React.useState('');
  const [website, setWebsite] = React.useState(''); // honeypot — humans leave blank
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(null);
  const [files, setFiles] = React.useState([]);
  const [uploadSubmitting, setUploadSubmitting] = React.useState(false);
  const [uploadSubmitted, setUploadSubmitted] = React.useState(false);
  const [uploadError, setUploadError] = React.useState(null);
  const [showUpload, setShowUpload] = React.useState(false);

  const canSubmit = contactName.trim() && schoolName.trim() && contactEmail.trim() && !submitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setSubmitError(null);

    const priorityText = items.map((item, i) => `${i + 1}. ${item.text}`).join('\n');

    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          school_name: schoolName,
          contact_name: contactName,
          email: contactEmail,
          source: 'coverage-check',
          insurance_situation: PEER_LABELS[items[0].id],
          priority_ranking: priorityText,
          website, // honeypot
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Submission failed — please try again.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    setFiles(prev => {
      const existing = prev.map(f => f.name);
      const added = Array.from(e.target.files || []).filter(f => !existing.includes(f.name));
      return [...prev, ...added];
    });
    e.target.value = '';
  };
  const removeFile = (idx) => setFiles(f => f.filter((_, i) => i !== idx));
  const canUploadSubmit = contactName.trim() && schoolName.trim() && contactEmail.trim() && files.length > 0 && !uploadSubmitting;

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!canUploadSubmit) return;
    setUploadSubmitting(true);
    setUploadError(null);

    const priorityText = items.map((item, i) => `${i + 1}. ${item.text}`).join('\n');
    const formData = new FormData();
    formData.append('_replyto', contactEmail);
    formData.append('_subject', `Policy Upload — ${schoolName} (${contactName})`);
    formData.append('_autoresponse', `Hi ${contactName}, we've received your policy documents for ${schoolName}. Your written benchmark review will be in your inbox within 3 business days. — CharterSelect`);
    formData.append('Form Type', 'Policy Upload');
    formData.append('Contact Name', contactName);
    formData.append('School Name', schoolName);
    formData.append('Email', contactEmail);
    formData.append('Coverage Priority Ranking', priorityText);
    files.forEach(f => formData.append('attachment', f));

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
      if (res.ok) {
        setUploadSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setUploadError(data.error || 'Submission failed. Please try again or email aschwen@charterselect.com.');
      }
    } catch {
      setUploadError('Network error. Please check your connection and try again.');
    } finally {
      setUploadSubmitting(false);
    }
  };

  const peerStat = submitted ? getPeerStat(items[0].id) : null;

  return (
    <section className="cs-section cs-section--teal" id="contact">
      <div className="cs-section__inner" style={{maxWidth: 820}}>
        <div className="cs-eyebrow cs-eyebrow--on-teal">{SEC.eyebrow}</div>
        <h2 className="cs-h2-on-teal">{SEC.h2}</h2>
        <p className="cs-lead-on-teal" style={{marginBottom: 32}}>
          {SEC.paras[0]}
        </p>

        {/* ── Ranking rows ── */}
        <p className="cs-sr-only" id="rank-instructions">
          {FORM.srInstructions}
        </p>
        <div
          className="cs-rank"
          role="listbox"
          aria-orientation="vertical"
          aria-label="Coverage concern priority ranking"
          aria-describedby="rank-instructions"
        >
          {items.map((item, idx) => (
            <div
              key={item.id}
              ref={el => touchRowRefs.current[idx] = el}
              className={['cs-rank__row', dragging === idx ? 'is-dragging' : '', dragOver === idx && dragging !== idx ? 'is-over' : ''].join(' ')}
              draggable
              tabIndex={0}
              role="option"
              aria-selected={false}
              aria-posinset={idx + 1}
              aria-setsize={items.length}
              aria-label={`Priority ${idx + 1}: ${item.text}`}
              onKeyDown={e => handleRankKeyDown(e, idx)}
              onDragStart={e => onDragStart(e, idx)}
              onDragOver={e => onDragOver(e, idx)}
              onDrop={e => onDrop(e, idx)}
              onDragEnd={onDragEnd}
              onTouchStart={e => onTouchStartRow(e, idx)}
              onTouchMove={onTouchMoveRow}
              onTouchEnd={onTouchEndRow}
              style={{touchAction: 'none'}}
            >
              <div className="cs-rank__num" aria-hidden="true">{idx + 1}</div>
              <div className="cs-rank__label">{item.text}</div>
              <div className="cs-rank__handle" aria-hidden="true"><Lucide name="grip-vertical" size={18} /></div>
            </div>
          ))}
        </div>

        {/* ── After ranking: contact capture ── */}
        {hasRanked && !submitted && (
          <div className="cs-assess__result" style={{marginTop: 32}}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8}}>
              <Lucide name="check-circle" size={20} color="var(--cs-gold)" style={{flexShrink: 0, marginTop: 2}} />
              <p style={{margin: 0, color: '#fff', fontWeight: 600, fontSize: 15, lineHeight: 1.5}}>
                {FORM.topConcernPrefix} <span style={{color: 'var(--cs-gold)'}}>{items[0].text}</span>
              </p>
            </div>
            <p style={{margin: '0 0 4px', color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6}}>
              {FORM.prompt}
            </p>
            <form onSubmit={handleSubmit} style={{width: '100%'}}>
              {/* Honeypot: hidden from humans, bots fill it → server discards the submission */}
              <input type="text" name="website" tabIndex="-1" autoComplete="off" aria-hidden="true"
                     value={website} onChange={e => setWebsite(e.target.value)}
                     style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0}} />
              <div className="cs-upload__fields">
                <div className="cs-upload__field">
                  <label className="cs-upload__label" htmlFor="cc-name">{FORM.nameLabel} <span aria-hidden="true">*</span><span className="cs-sr-only">(required)</span></label>
                  <input id="cc-name" className="cs-upload__input" type="text" placeholder={FORM.namePlaceholder} value={contactName} onChange={e => setContactName(e.target.value)} required aria-required="true" />
                </div>
                <div className="cs-upload__field">
                  <label className="cs-upload__label" htmlFor="cc-school">{FORM.schoolLabel} <span aria-hidden="true">*</span><span className="cs-sr-only">(required)</span></label>
                  <input id="cc-school" className="cs-upload__input" type="text" placeholder={FORM.schoolPlaceholder} value={schoolName} onChange={e => setSchoolName(e.target.value)} required aria-required="true" />
                </div>
                <div className="cs-upload__field">
                  <label className="cs-upload__label" htmlFor="cc-email">{FORM.emailLabel} <span aria-hidden="true">*</span><span className="cs-sr-only">(required)</span></label>
                  <input id="cc-email" className="cs-upload__input" type="email" placeholder={FORM.emailPlaceholder} value={contactEmail} onChange={e => setContactEmail(e.target.value)} required aria-required="true" />
                </div>
              </div>
              {submitError && <div className="cs-upload__error" role="alert">{submitError}</div>}
              <button type="submit" className="cs-btn cs-btn--gold cs-upload__submit" disabled={!canSubmit}>
                {submitting
                  ? <><span className="cs-upload__spinner"><Lucide name="loader" size={16} /></span> {FORM.submitting}</>
                  : <><Lucide name="bar-chart-2" size={16} /> {FORM.submit}</>
                }
              </button>
              <div className="cs-upload__lock" style={{justifyContent: 'center'}}>
                <Lucide name="lock" size={13} />
                <span>{FORM.privacy}</span>
              </div>
            </form>
          </div>
        )}

        {/* ── Success: peer stat + soft CTAs ── */}
        {submitted && peerStat && (
          <div className="cs-assess__result" style={{marginTop: 32}} role="status" aria-live="polite">
            <div className="cs-peer-stat">
              <div className="cs-peer-stat__emoji">{peerStat.emoji}</div>
              <div>
                <div className="cs-peer-stat__headline">{peerStat.headline}</div>
                <p className="cs-peer-stat__body">{peerStat.body}</p>
              </div>
            </div>
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: '16px 0 0', lineHeight: 1.6}}>
              Thanks, <strong style={{color: '#fff'}}>{contactName}</strong>. CharterSelect will follow up with specifics for <strong style={{color: '#fff'}}>{schoolName}</strong>. Want to go deeper now?
            </p>
            <div className="cs-rank__ctas" style={{marginTop: 16}}>
              <a
                className="cs-btn cs-btn--gold"
                href={CALENDAR_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none', flex: 1, justifyContent: 'center'}}
              >
                <Lucide name="calendar" size={16} />
                {FORM.bookCall}
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Community / Stronger Together ---------- */
function Community() {
  const SEC = homeSection('community');
  return (
    <section className="cs-section cs-section--cream" id="community">
      <div className="cs-section__inner cs-community">
        <div className="cs-community__copy">
          <div className="cs-eyebrow">{SEC.eyebrow}</div>
          <h2>{SEC.h2}</h2>
          <p className="cs-lead">
            {SEC.paras[0]}
          </p>
          <a className="cs-btn cs-btn--primary" href="/commitment" style={{textDecoration:'none', marginTop:8, alignSelf:'flex-start'}}>
            {SEC.button} <Lucide name="arrow-right" size={16} />
          </a>
        </div>
        <div className="cs-community__seal">
          <img src="assets/logo-badge.png" alt="CharterSelect badge" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="cs-footer">
      {/* Mobile-only quick nav strip */}
      <div className="cs-footer__mobile-nav">
        <a href="/property-liability" className="cs-footer__mobile-btn">
          <Lucide name="shield" size={16} />
          Property &amp; Liability
        </a>
        <a href="/employee-benefits" className="cs-footer__mobile-btn">
          <Lucide name="heart-pulse" size={16} />
          Employee Benefits
        </a>
        <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="cs-footer__mobile-btn cs-footer__mobile-btn--gold">
          <Lucide name="calendar" size={16} />
          Book a Call
        </a>
      </div>

      <div className="cs-footer__inner">
        <div className="cs-footer__brand">
          <img src="assets/logo-no-slogan.svg" alt="CharterSelect — Charter School Insurance" className="cs-footer__logo" />
          <p>Any insurance you need - built for charter schools, not adapted to them. The only agency built exclusively for charter schools.</p>
        </div>
        <div className="cs-footer__cols">
          <div>
            <h5>Coverage</h5>
            <a href="/property-liability">Property &amp; Liability</a>
            <a href="/employee-benefits">Employee Benefits</a>
            <a href="/bond-compliance-review">Bond Compliance Review</a>
          </div>
          <div>
            <h5>Insights</h5>
            <a href="/insights/charter-school-employee-benefits">Benefits Revolution</a>
            <a href="/insights/charter-school-employee-benefits/benefits-transparency-audit">Benefits Transparency Audit</a>
          </div>
          <div>
            <h5>Company</h5>
            <a href="/why">Why CharterSelect</a>
            <a href="/commitment">Our Commitment</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
      <div className="cs-footer__bar">
        <span>© 2026 CharterSelect Insurance Solutions</span>
        <span className="cs-footer__nationwide">
          <svg className="cs-footer__flag" width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
            <rect width="22" height="14" rx="1.5" fill="#0E2A47" />
            <rect x="0" y="2" width="22" height="1.4" fill="#F5F1E8" />
            <rect x="0" y="4.8" width="22" height="1.4" fill="#F5F1E8" />
            <rect x="0" y="7.6" width="22" height="1.4" fill="#F5F1E8" />
            <rect x="0" y="10.4" width="22" height="1.4" fill="#F5F1E8" />
            <rect x="0" y="0" width="9" height="6.2" fill="#0E2A47" />
            <g fill="#C9A24A">
              <circle cx="2" cy="1.6" r="0.5" />
              <circle cx="4.5" cy="1.6" r="0.5" />
              <circle cx="7" cy="1.6" r="0.5" />
              <circle cx="3.25" cy="3.1" r="0.5" />
              <circle cx="5.75" cy="3.1" r="0.5" />
              <circle cx="2" cy="4.6" r="0.5" />
              <circle cx="4.5" cy="4.6" r="0.5" />
              <circle cx="7" cy="4.6" r="0.5" />
            </g>
          </svg>
          <span>Nationwide</span>
        </span>
      </div>
    </footer>
  );
}

Object.assign(window, { TopNav, Hero, StatsBar, Solutions, FeaturedTestimonial, WhyUs, UploadCta, Community, Footer });
