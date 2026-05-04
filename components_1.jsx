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
  <i data-lucide={name} style={{ width: size, height: size, color }} className={className} />
);

/* ---------- Top Nav ---------- */
function TopNav({ onCta }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="cs-nav">
      <div className="cs-nav__inner">
        <a className="cs-nav__brand" href="index.html">
          <img src="assets/logo-horizontal.png" alt="CharterSelect" />
        </a>
        <nav className="cs-nav__links">
          <a href="property-liability.html">Property &amp; Liability</a>
          <a href="employee-benefits.html">Employee Benefits</a>
          <a href="why.html">Why CharterSelect</a>
          <a href="commitment.html">Our Commitment</a>
          <a href="about.html">About</a>
        </nav>
        <div className="cs-nav__cta">
          <a className="cs-link" href="mailto:aschwen@charterselect.com">Contact</a>
          <a className="cs-btn cs-btn--primary cs-btn--sm" href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>
            Get a Review
          </a>
        </div>
        {/* Hamburger — mobile only */}
        <button
          className="cs-nav__hamburger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <Lucide name={open ? 'x' : 'menu'} size={24} />
        </button>
      </div>
      {/* Mobile dropdown */}
      {open && (
        <div className="cs-nav__mobile-menu" onClick={() => setOpen(false)}>
          <a href="property-liability.html">Property &amp; Liability</a>
          <a href="employee-benefits.html">Employee Benefits</a>
          <a href="why.html">Why CharterSelect</a>
          <a href="commitment.html">Our Commitment</a>
          <a href="about.html">About</a>
          <a href="mailto:aschwen@charterselect.com">Contact</a>
          <a href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer" className="cs-nav__mobile-cta">Get a Review</a>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="cs-hero">
      <div className="cs-hero__inner">
        <div className="cs-hero__copy">
          <div className="cs-eyebrow">Insurance Solutions for Charter Schools</div>
          <h1 className="cs-display">
            Protection<br/>with purpose.
          </h1>
          <p className="cs-lead">
            Any insurance you need — built for charter schools, not adapted to them. We protect what matters so you can focus on students, growth, and your mission.
          </p>

          {/* ── Need selector ── */}
          <div className="cs-need-selector">
            <p className="cs-need-selector__label">What are you looking for?</p>
            <div className="cs-need-selector__btns">
              <a className="cs-need-btn" href="property-liability.html">
                <Lucide name="shield" size={20} />
                <span>Property &amp; Liability Insurance</span>
                <Lucide name="arrow-right" size={16} className="cs-need-btn__arrow" />
              </a>
              <a className="cs-need-btn" href="employee-benefits.html">
                <Lucide name="heart-pulse" size={20} />
                <span>Employee Benefits</span>
                <Lucide name="arrow-right" size={16} className="cs-need-btn__arrow" />
              </a>
              <a className="cs-need-btn" href={CALENDAR_LINK} target="_blank" rel="noopener noreferrer"
                style={{background:'#FBBF24', borderColor:'#FBBF24', color:'#1F2937'}}>
                <i data-lucide="star" style={{width:20, height:20, color:'#1F2937', flexShrink:0}} />
                <span>Both — I want a full coverage review</span>
                <i data-lucide="arrow-right" style={{width:16, height:16, color:'#1F2937', opacity:0.7, flexShrink:0}} />
              </a>
            </div>
          </div>

          <div className="cs-hero__actions" style={{marginTop: 24}}>
            <button className="cs-btn cs-btn--secondary" onClick={() => window.open(CALENDAR_LINK, '_blank')}>
              <Lucide name="calendar" size={16} />
              Book a 20-min Call
            </button>
          </div>
          <div className="cs-hero__trust">
            <Lucide name="shield-check" size={16} />
            <span>Complimentary benchmark review · No obligation</span>
          </div>
        </div>
        <div className="cs-hero__art">
          <img src="assets/logo-icon.png" alt="CharterSelect" className="cs-hero__mark" />
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats Bar ---------- */
function StatsBar() {
  const stats = [
    { num: '90+', label: 'Schools Helped' },
    { num: '250+', label: 'Campuses' },
    { num: '2011', label: 'Serving Since' },
    { kind: 'usa', label: 'Nationwide' },
  ];
  return (
    <section className="cs-stats">
      <div className="cs-stats__inner">
        {stats.map(s => (
          <div className="cs-stat" key={s.label}>
            {s.kind === 'usa' ? (
              <div className="cs-stat__usa" aria-label="United States">
                <img src="assets/usa-outline-transparent.png" alt="United States map" />
              </div>
            ) : (
              <div className="cs-stat__num">{s.num}</div>
            )}
            <div className="cs-stat__lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Solutions / Value Props ---------- */
function Solutions() {
  const items = [
    { icon: 'shield-check', title: 'Property & Liability', body: 'Authorizer-compliant coverage built around leased or owned facilities, shared campuses, and educators legal liability. The errors we find most often are big, and could mean the end of your mission if that claim hits.' },
    { icon: 'graduation-cap', title: 'Employee Benefits', body: 'Your HR coordinator is running open enrollment, answering claims questions, and chasing billing errors — alone. We take that off their plate. One-on-one enrollment support for every employee. A concierge that fights surprise bills on your staff\'s behalf. And funding structures that put pharmacy rebates directly back in your school\'s budget.' },
    { icon: 'compass', title: 'Risk Guidance', body: 'Year-round advisory, contract review, claims advocacy, renewal benchmarking, and board level risk briefings. Not just a quote at renewal.' },
    { icon: 'handshake', title: 'Partnership Model', body: 'Independent and carrier agnostic. We represent you, not the insurer who pays the biggest bonus. Responsiveness, Follow Through, Innovation and Expertise are core to how we operate.' },
  ];
  return (
    <section className="cs-section" id="solutions">
      <div className="cs-section__inner">
        <div className="cs-section__head">
          <div className="cs-eyebrow">Solutions</div>
          <h2>Insurance built for charter schools — not adapted to them.</h2>
        </div>
        <div className="cs-grid cs-grid--4">
          {items.map(it => (
            <article className="cs-card" key={it.title}>
              <div className="cs-card__icon"><Lucide name={it.icon} size={22} /></div>
              <h4 className="cs-card__title">{it.title}</h4>
              <p className="cs-card__body">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Featured Testimonial (standalone, appears before WhyUs) ---------- */
function FeaturedTestimonial() {
  return (
    <section style={{background:'var(--cs-teal)', padding:'80px 32px'}}>
      <div style={{maxWidth:860, margin:'0 auto'}}>
        {/* Outcome badge */}
        <div style={{display:'flex', justifyContent:'center', marginBottom:32}}>
          <div style={{display:'inline-flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.25)', borderRadius:999, padding:'7px 18px', fontSize:12, fontWeight:700, letterSpacing:'0.13em', textTransform:'uppercase', color:'var(--cs-gold)'}}>
            <Lucide name="check-circle" size={13} color="var(--cs-gold)" />
            Saved nearly $100K annually · Same or better coverage
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
          Aaron boldly claimed he could save us $100,000 annually in premiums with the same or better coverage — and he did just that. Aaron makes the process tolerable and, more importantly, does the work so your staff does not have to.
        </p>

        {/* Attribution with headshot */}
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:20}}>
          <img
            src="randal.jpeg"
            alt="Randal C. Shaffer"
            style={{width:72, height:72, borderRadius:'50%', objectFit:'cover', objectPosition:'center top', border:'3px solid var(--cs-gold)', flexShrink:0, boxShadow:'0 4px 16px rgba(0,0,0,0.25)'}}
          />
          <div>
            <div style={{fontFamily:'var(--font-body)', fontWeight:700, fontSize:16, color:'#fff', marginBottom:3}}>Randal C. Shaffer</div>
            <div style={{fontSize:13, color:'rgba(255,255,255,0.7)', lineHeight:1.4}}>CEO / Superintendent · Trinity Basin Preparatory</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why CharterSelect (split) ---------- */
const TESTIMONIALS = [
  {
    outcome: 'Trusted partner · Recommended without hesitation',
    quote: "Aaron is one of the hardest working partners I've had the good fortune to come across. I get to work with him at a mutual client and see first hand how Aaron and his team want only the best for their charter school clients. I would recommend him and the charter school team to any of my clients.",
    name: "Stacey Lawrence",
    role: "CEO & Founder",
    school: "GrowthFit Partners LLC",
  },
  {
    found: 'Gap found: Workers Comp missing entirely — school carrying exposure without knowing it',
    outcome: 'Workers Comp added · No premium increase · Coverage gap closed',
    quote: "He worked with us to add Workers Compensation without spending any more money than we were spending on our insurance package without it. His knowledge of the products and the needs of charter schools is deep.",
    name: "Anita Howe & Ana Valdovinos",
    role: "HR Manager · Business Manager",
    school: "Newman International Academy",
  },
];

function WhyUs() {
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

  const points = [
    'Specialists who only serve charter schools — not one of 500 client types.',
    'Independent and carrier-agnostic. We tell you when to stay put.',
    'We name what your current broker hasn\'t flagged — umbrella gaps on educators legal liability, retroactive date errors, and D&O coverage that is leaving millions of coverage on the table.',
    'A portion of every policy we write supports the communities your school serves.',
  ];

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
          <div className="cs-eyebrow">Why CharterSelect</div>
          <h2>Solutions built for your mission.</h2>
          <p className="cs-lead">
            Charter schools operate differently than districts and differently from one another. We bring the patience to listen and the depth to act.
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
        >
          {t.found && (
            <div style={{display:'flex', alignItems:'flex-start', gap:8, background:'#fef9ec', border:'1px solid #fde68a', borderRadius:8, padding:'8px 12px', marginBottom:12, fontSize:12, color:'#78350f', lineHeight:1.4}}>
              <Lucide name="search" size={13} color="#b45309" style={{flexShrink:0, marginTop:1}} />
              <span>{t.found}</span>
            </div>
          )}
          {t.outcome && (
            <div style={{display:'inline-flex', alignItems:'center', gap:6, background:'var(--cs-teal-50)', color:'var(--cs-teal)', fontSize:11, fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', padding:'4px 10px', borderRadius:999, marginBottom:12}}>
              <Lucide name="check-circle" size={12} />
              {t.outcome}
            </div>
          )}
          <Lucide name="quote" size={28} />
          <p className="cs-quote">"{t.quote}"</p>
          <div className="cs-quote-attr">
            <strong>{t.name}</strong><br/>
            <span>{t.role} · {t.school}</span>
          </div>
          {/* Nav row: prev · dots · next */}
          <div style={{display:'flex', alignItems:'center', gap:12, marginTop:22}}>
            <button style={btnStyle} onClick={handlePrev} aria-label="Previous testimonial"
              onMouseEnter={e => { e.currentTarget.style.background='var(--cs-teal)'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.color='var(--cs-teal)'; }}>
              <Lucide name="chevron-left" size={20} />
            </button>
            <div style={{display:'flex', gap:8, flex:1, justifyContent:'center'}}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`cs-quote-dot ${i === idx ? 'is-active' : ''}`}
                  onClick={() => handleDot(i)}
                  aria-label={`Show testimonial ${i + 1}`}
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
  const ITEMS = [
    { id: 0, text: 'Your umbrella policy sits over Educators Legal Liability, adding million(s) in coverage to D&O, EPLI, & Failure to Educate limits.' },
    { id: 1, text: 'Coverage to repair/replace damaged property due to water damage.' },
    { id: 2, text: 'If there was a total loss at campus, you\'d have enough coverage to rebuild your campus, and money to provide temporary space to continue educating.' },
    { id: 3, text: 'A fraudulent invoice your school paid as a result of a phishing scam would be covered.' },
    { id: 4, text: 'A student seriously injured with no health insurance has their medical bills covered.' },
  ];

  const [items, setItems] = React.useState(ITEMS);
  const [dragging, setDragging] = React.useState(null);
  const [dragOver, setDragOver] = React.useState(null);
  const [hasRanked, setHasRanked] = React.useState(false);

  const [contactName, setContactName] = React.useState('');
  const [schoolName, setSchoolName] = React.useState('');
  const [contactEmail, setContactEmail] = React.useState('');
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(null);
  const [showUpload, setShowUpload] = React.useState(false);

  // Upload form state
  const [files, setFiles] = React.useState([]);
  const [uploadSubmitting, setUploadSubmitting] = React.useState(false);
  const [uploadSubmitted, setUploadSubmitted] = React.useState(false);
  const [uploadError, setUploadError] = React.useState(null);

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

  const canSubmit = contactName.trim() && schoolName.trim() && contactEmail.trim() && !submitting;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setSubmitError(null);

    const priorityText = items.map((item, i) => `${i + 1}. ${item.text}`).join('\n');
    const body = new URLSearchParams();
    body.append('_replyto', contactEmail);
    body.append('_subject', `Coverage Check — ${schoolName} (${contactName})`);
    body.append('_autoresponse', `Hi ${contactName}, thanks for completing the CharterSelect coverage check! Your #1 concern was: "${items[0].text}". Aaron will be in touch shortly. — CharterSelect`);
    body.append('Form Type', 'Coverage Check / Ranking');
    body.append('Contact Name', contactName);
    body.append('School Name', schoolName);
    body.append('Email', contactEmail);
    body.append('Top Concern', items[0].text);
    body.append('Full Priority Ranking', priorityText);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: 'POST', body, headers: { Accept: 'application/json' } });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setSubmitError(data.error || 'Submission failed — please try again.');
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
        <div className="cs-eyebrow cs-eyebrow--on-teal">Charter School Coverage Check</div>
        <h2 className="cs-h2-on-teal">Rank these coverage areas by how much they concern you.</h2>
        <p className="cs-lead-on-teal" style={{marginBottom: 32}}>
          Drag to reorder — most concerning at the top. We'll start your benchmark review there.
        </p>

        {/* ── Ranking rows ── */}
        <div className="cs-rank">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={['cs-rank__row', dragging === idx ? 'is-dragging' : '', dragOver === idx && dragging !== idx ? 'is-over' : ''].join(' ')}
              draggable
              onDragStart={e => onDragStart(e, idx)}
              onDragOver={e => onDragOver(e, idx)}
              onDrop={e => onDrop(e, idx)}
              onDragEnd={onDragEnd}
            >
              <div className="cs-rank__num">{idx + 1}</div>
              <div className="cs-rank__label">{item.text}</div>
              <div className="cs-rank__handle"><Lucide name="grip-vertical" size={18} /></div>
            </div>
          ))}
        </div>

        {/* ── After ranking: contact capture ── */}
        {hasRanked && !submitted && (
          <div className="cs-assess__result" style={{marginTop: 32}}>
            <div style={{display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 8}}>
              <Lucide name="check-circle" size={20} color="var(--cs-gold)" style={{flexShrink: 0, marginTop: 2}} />
              <p style={{margin: 0, color: '#fff', fontWeight: 600, fontSize: 15, lineHeight: 1.5}}>
                Your #1 concern: <span style={{color: 'var(--cs-gold)'}}>{items[0].text}</span>
              </p>
            </div>
            <p style={{margin: '0 0 4px', color: 'rgba(255,255,255,0.75)', fontSize: 14, lineHeight: 1.6}}>
              Enter your name and email to submit your ranking and see how you compare to other charter school leaders.
            </p>
            <form onSubmit={handleSubmit} style={{width: '100%'}}>
              <div className="cs-upload__fields">
                <div className="cs-upload__field">
                  <label className="cs-upload__label">Your Name *</label>
                  <input className="cs-upload__input" type="text" placeholder="Jane Smith" value={contactName} onChange={e => setContactName(e.target.value)} required />
                </div>
                <div className="cs-upload__field">
                  <label className="cs-upload__label">School Name *</label>
                  <input className="cs-upload__input" type="text" placeholder="Lincoln Charter Academy" value={schoolName} onChange={e => setSchoolName(e.target.value)} required />
                </div>
                <div className="cs-upload__field">
                  <label className="cs-upload__label">Your Email *</label>
                  <input className="cs-upload__input" type="email" placeholder="jane@yourschool.org" value={contactEmail} onChange={e => setContactEmail(e.target.value)} required />
                </div>
              </div>
              {submitError && <div className="cs-upload__error">{submitError}</div>}
              <button type="submit" className="cs-btn cs-btn--gold cs-upload__submit" disabled={!canSubmit}>
                {submitting
                  ? <><span className="cs-upload__spinner"><Lucide name="loader" size={16} /></span> Submitting…</>
                  : <><Lucide name="bar-chart-2" size={16} /> Submit My Rankings</>
                }
              </button>
              <div className="cs-upload__lock" style={{justifyContent: 'center'}}>
                <Lucide name="lock" size={13} />
                <span>Your info stays private · No sales call required · No obligation</span>
              </div>
            </form>
          </div>
        )}

        {/* ── Success: peer stat + soft CTAs ── */}
        {submitted && peerStat && (
          <div className="cs-assess__result" style={{marginTop: 32}}>
            <div className="cs-peer-stat">
              <div className="cs-peer-stat__emoji">{peerStat.emoji}</div>
              <div>
                <div className="cs-peer-stat__headline">{peerStat.headline}</div>
                <p className="cs-peer-stat__body">{peerStat.body}</p>
              </div>
            </div>
            <p style={{color: 'rgba(255,255,255,0.7)', fontSize: 13, margin: '16px 0 0', lineHeight: 1.6}}>
              Thanks, <strong style={{color: '#fff'}}>{contactName}</strong>. Aaron will review your full ranking for <strong style={{color: '#fff'}}>{schoolName}</strong> and follow up. Want to go deeper now?
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
                Book a 20-min Call
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
  return (
    <section className="cs-section" id="community">
      <div className="cs-section__inner cs-community">
        <div className="cs-community__copy">
          <div className="cs-eyebrow">Stronger Together</div>
          <h2>Strong schools build strong communities.</h2>
          <p className="cs-lead">
            A portion of CharterSelect profits supports the nonprofits and community initiatives that make a lasting impact alongside the schools we serve.
          </p>
          <a className="cs-link cs-link--lg" href="commitment.html">Our Commitment <Lucide name="arrow-right" size={16} /></a>
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
        <a href="property-liability.html" className="cs-footer__mobile-btn">
          <Lucide name="shield" size={16} />
          Property &amp; Casualty
        </a>
        <a href="employee-benefits.html" className="cs-footer__mobile-btn">
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
          <img src="assets/logo-horizontal.png" alt="CharterSelect" className="cs-footer__logo" />
          <p>Any insurance you need - built for charter schools, not adapted to them. The only agency built exclusively for charter schools.</p>
        </div>
        <div className="cs-footer__cols">
          <div>
            <h5>Coverage</h5>
            <a href="property-liability.html">Property &amp; Casualty</a>
            <a href="employee-benefits.html">Employee Benefits</a>
          </div>
          <div>
            <h5>Company</h5>
            <a href="why.html">Why CharterSelect</a>
            <a href="commitment.html">Our Commitment</a>
            <a href="mailto:aschwen@charterselect.com">Contact</a>
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
