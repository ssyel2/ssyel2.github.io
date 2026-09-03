'use client';
/* oxlint-disable next/no-img-element */

import { useState } from 'react';

type ResearchKey = 'fly' | 'fmri' | 'eeg';

const researchItems: Array<{
  id: ResearchKey;
  number: string;
  title: string;
  institution: string;
  role: string;
  description: string;
  tags: string[];
  facts: string[];
  caption: string;
}> = [
  {
    id: 'fly',
    number: '01',
    title: 'Biophysically Detailed Whole-Brain Modeling',
    institution: 'Tsinghua University',
    role: 'Research Assistant',
    description: 'How can a brain be rebuilt in a computer, one neuron at a time? I turn real neuron shapes and electrical behavior into digital cells, test where they fail, and assemble them toward a working whole-brain model of the fruit fly.',
    tags: ['Digital Brain', 'Neuron Modeling', 'Model Validation'],
    facts: [
      'Recreating how different fruit-fly neurons receive, transform, and pass on signals',
      'Building and testing digital versions of nine neuron classes, from vision to flight control',
      'Comparing simulated activity with experimental recordings',
      'Finding why a model can look convincing while still being wrong',
      'Connecting validated digital neurons into a whole-brain simulation',
    ],
    caption: 'Real Neurons → Digital Cells → Tested Models → Whole-Brain Network',
  },
  {
    id: 'fmri',
    number: '02',
    title: 'SpExNeuro — Overt-Speech fMRI',
    institution: 'Forschungszentrum Jülich',
    role: 'Incoming Visiting Student · Remote currently · On-site visit expected June 2027',
    description: 'What does the brain do while a person speaks? I am helping design a reliable way to record speech inside an MRI scanner, separate the voice from scanner noise and movement, and connect what is said with what the brain is doing.',
    tags: ['Speech & Brain', 'fMRI', 'Reliable Measurement'],
    facts: [
      'Designing speaking tasks that can be performed safely and naturally inside a scanner',
      'Recording the voice without losing it beneath loud scanner noise',
      'Reducing the image distortion caused by head and speech movement',
      'Linking cleaned speech with the brain activity recorded at the same moment',
      'Establishing a dependable foundation for future language and health research',
    ],
    caption: 'Speak in the Scanner → Clean the Data → Link Voice and Brain → Study Language',
  },
  {
    id: 'eeg',
    number: '03',
    title: 'NeuroPIT — Physics-Informed EEG Decoding',
    institution: 'University of Nottingham Ningbo China',
    role: 'Research Assistant',
    description: 'Can an EEG system learn a new person from only a handful of examples? I am building a brain–computer interface that uses how neural signals behave to adapt quickly and recognize imagined movements across people.',
    tags: ['EEG', 'Brain–Computer Interface', 'Fast Adaptation'],
    facts: [
      'Reading scalp signals while a person imagines moving a hand or foot',
      'Learning useful brain-signal patterns shared across participants',
      'Adapting the system to a new participant from just five examples',
      'Using knowledge of neural behavior to guide what the system learns',
      'Testing which ideas genuinely improve reliable cross-person decoding',
    ],
    caption: 'Brain Activity → Scalp EEG → Shared Patterns → Five Examples → Decode Intention',
  },
];

const news = [
  ['2026', 'Joined Tsinghua University as a Research Assistant working on biophysically detailed whole-brain modeling.'],
  ['2026', 'Joined the SpExNeuro research project at Forschungszentrum Jülich as an incoming visiting student, currently working remotely.'],
  ['2026', 'Started NeuroPIT, a physics-informed few-shot EEG motor-imagery decoding project.'],
  ['2026', 'Reached the Final Review Pool of the Kupcinet-Getz International Summer Science Program, Weizmann Institute of Science.'],
  ['2026', 'Submitted a first-author clinical AI manuscript to Computer Methods and Programs in Biomedicine.'],
  ['2026', 'Began serving as a peer reviewer for SAGE Journals.'],
  ['2025', 'Completed the Oxford Machine Learning Summer School with A+ (Top 1%).'],
  ['2025', 'Received an Oxford Summer School Scholarship.'],
  ['2025', 'Published a systematic review of clinical AI in SPIE Proceedings.'],
  ['2025', 'Received Third Prize / Best Poster at the UNNC FOSE UG/PGT Research Showcase.'],
];

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 16 16"><path d="M3 13 13 3M6 3h7v7" /></svg>;
}

function MiniSchematic({ type }: { type: ResearchKey }) {
  if (type === 'fly') {
    return (
      <svg className="mini-schematic" viewBox="0 0 180 88" aria-hidden="true">
        <path d="M14 65c25 0 19-35 46-35 20 0 20 23 42 23 25 0 21-30 61-30" />
        <path className="accent-line" d="M14 65h38m8-35 18 23m24 0 27-20" />
        {[14, 60, 102, 163].map((x, i) => <circle key={x} cx={x} cy={[65, 30, 53, 23][i]} r="4" />)}
      </svg>
    );
  }
  if (type === 'fmri') {
    return (
      <svg className="mini-schematic" viewBox="0 0 180 88" aria-hidden="true">
        <rect x="66" y="15" width="49" height="58" rx="24" />
        <path d="M8 48c7-24 14 24 21 0s14 24 21 0 14 24 21 0m45 0c7-13 14 13 21 0s14 13 21 0 8 0 14-9" />
        <path className="accent-line" d="M52 48h12m52 0h15" />
      </svg>
    );
  }
  return (
    <svg className="mini-schematic" viewBox="0 0 180 88" aria-hidden="true">
      <path d="M37 70c-14-9-17-39-4-51 13-13 39-8 45 9 6 18-6 30-6 42" />
      {[28, 40, 54, 69].map((x, i) => <circle key={x} cx={x} cy={[32, 20, 19, 31][i]} r="3" />)}
      <path d="M78 46h18m4 0c7-22 14 22 21 0s14 22 21 0 14 22 22-5" />
      <path className="accent-line" d="M96 34v24" />
    </svg>
  );
}

function FlyDiagram() {
  return (
    <svg className="research-diagram" viewBox="0 0 920 290" aria-label="Real neurons are rebuilt as digital cells, tested against recordings, and connected into a brain network">
      <title>From real neurons to a digital brain network</title>
      <defs><marker id="fly-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" /></marker></defs>
      <g className="diagram-step step-1">
        <path className="diagram-line" d="M45 180c20-8 12-58 47-56 29 2 14 39 43 42 26 2 30-38 62-37m-104-5-18-34m58 77-4 46m18-52 28 34" />
        <circle className="diagram-node strong" cx="93" cy="124" r="10" /><text x="45" y="255">REAL NEURON</text>
      </g>
      <path className="diagram-arrow step-2" d="M205 145h45" markerEnd="url(#fly-arrow)" />
      <g className="diagram-step step-2">
        <path className="diagram-line segmented" d="M272 185c20-8 12-58 47-56 29 2 14 39 43 42 26 2 30-38 62-37" />
        {[283, 310, 341, 378, 414].map((x, i) => <circle key={x} cx={x} cy={[172, 133, 157, 158, 137][i]} r="5" />)}
        <text x="273" y="255">DIGITAL NEURON</text>
      </g>
      <path className="diagram-arrow step-3" d="M432 145h38" markerEnd="url(#fly-arrow)" />
      <g className="diagram-step step-3 markov">
        <circle cx="505" cy="105" r="17" /><circle cx="566" cy="105" r="17" /><circle cx="566" cy="168" r="17" /><circle cx="505" cy="168" r="17" />
        <path className="diagram-line" d="M523 105h24m19 18v27m-18 18h-25m-18-18v-27" />
        <text x="494" y="110">C₁</text><text x="555" y="110">C₂</text><text x="556" y="173">O</text><text x="500" y="173">I</text><text x="473" y="255">SIGNAL RULES</text>
      </g>
      <path className="diagram-arrow step-4" d="M600 145h34" markerEnd="url(#fly-arrow)" />
      <g className="diagram-step step-4">
        <path className="trace reference" d="M650 175c20 0 18-75 34-75s13 75 30 75 16-52 31-52 12 52 30 52" />
        <path className="trace simulated" d="M650 184c18 0 18-70 35-70s13 70 29 70 16-47 31-47 12 47 30 47" />
        <text x="652" y="255">TEST &amp; COMPARE</text>
      </g>
      <path className="diagram-arrow step-5" d="M786 145h29" markerEnd="url(#fly-arrow)" />
      <g className="diagram-step step-5 network">
        <circle className="diagram-node strong" cx="852" cy="137" r="8" />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const points = [[825, 90], [871, 88], [897, 128], [884, 181], [839, 187], [811, 147]];
          return <g key={i}><path className="diagram-line thin" d={`M852 137L${points[i][0]} ${points[i][1]}`} /><circle className="diagram-node" cx={points[i][0]} cy={points[i][1]} r="5" /></g>;
        })}
        <text x="813" y="255">BRAIN NETWORK</text>
      </g>
    </svg>
  );
}

function FmriDiagram() {
  return (
    <svg className="research-diagram" viewBox="0 0 920 290" aria-label="Speech is recorded in an MRI scanner, cleaned of noise and movement, and linked with brain activity">
      <title>Connecting speech with brain activity inside an MRI scanner</title>
      <defs><marker id="fmri-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" /></marker></defs>
      <g className="diagram-step step-1"><path className="trace simulated" d="M27 145c12-39 24 39 36 0s24 39 36 0 24 39 36 0" /><text x="35" y="235">SPEECH TASK</text></g>
      <path className="diagram-arrow step-2" d="M142 145h44" markerEnd="url(#fmri-arrow)" />
      <g className="diagram-step step-2 scanner"><rect x="205" y="68" width="130" height="142" rx="64" /><rect x="233" y="97" width="74" height="84" rx="38" /><path className="diagram-line" d="M177 145h103" /><circle className="diagram-node strong" cx="257" cy="145" r="7" /><text x="214" y="235">MRI ACQUISITION</text></g>
      <g className="diagram-step step-3 noise"><path d="M354 92l10 20 10-20 10 20 10-20 10 20 10-20m-55 71 18-10m-18 10 14 15m-14-15-3-18" /><text x="356" y="235">NOISE + MOTION</text></g>
      <path className="diagram-arrow step-4" d="M435 145h43" markerEnd="url(#fmri-arrow)" />
      <g className="diagram-step step-4 correction"><rect x="498" y="88" width="133" height="112" rx="8" /><path className="trace reference" d="M513 145c10-26 20 26 30 0s20 26 30 0 20 26 30 0" /><path className="accent-stroke" d="M518 176h92" /><text x="493" y="235">CLEAN + STABILIZE</text></g>
      <path className="diagram-arrow step-5" d="M647 145h39" markerEnd="url(#fmri-arrow)" />
      <g className="diagram-step step-5 split"><path className="diagram-line" d="M701 145 760 103m-59 42 59 42" /><circle className="diagram-node" cx="760" cy="103" r="7" /><circle className="diagram-node" cx="760" cy="187" r="7" /><text x="721" y="80">VOICE</text><text x="713" y="222">BRAIN</text></g>
      <g className="diagram-step step-6 converge"><path className="diagram-line" d="M767 103 854 145m-87 42 87-42" /><rect x="842" y="115" width="58" height="60" rx="29" /><text x="824" y="235">LANGUAGE MAP</text></g>
    </svg>
  );
}

function EegDiagram() {
  return (
    <svg className="research-diagram" viewBox="0 0 920 290" aria-label="Brain activity becomes scalp EEG, shared patterns are learned, and five examples adapt the system to a new person">
      <title>Adapting EEG decoding to a new person from five examples</title>
      <defs><marker id="eeg-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 8 4 0 8Z" /></marker></defs>
      <g className="diagram-step step-1 populations"><circle className="diagram-node strong" cx="72" cy="135" r="8" /><circle className="diagram-node" cx="37" cy="102" r="6" /><circle className="diagram-node" cx="111" cy="96" r="6" /><circle className="diagram-node" cx="115" cy="173" r="6" /><circle className="diagram-node" cx="38" cy="177" r="6" /><path className="diagram-line" d="M72 135 37 102m35 33 39-39m-39 39 43 38m-43-38-34 42" /><text x="30" y="235">BRAIN ACTIVITY</text></g>
      <path className="diagram-arrow step-2" d="M137 140h35" markerEnd="url(#eeg-arrow)" />
      <g className="diagram-step step-2 head"><path d="M224 63c-45 17-49 112-8 143m8-143c44-8 75 17 78 53 2 25-14 37-14 67v23h-72" />{[210, 230, 254, 278].map((x, i) => <circle key={x} className="electrode" cx={x} cy={[93, 72, 69, 85][i]} r="5" />)}<path className="diagram-line thin" d="M210 93c22 24 42 40 78 45" /><text x="188" y="235">HEAD + SENSORS</text></g>
      <path className="diagram-arrow step-3" d="M310 140h35" markerEnd="url(#eeg-arrow)" />
      <g className="diagram-step step-3"><path className="trace simulated" d="M360 112c9-27 18 27 27 0s18 27 27 0 18 27 27 0" /><path className="trace reference" d="M360 151c9-18 18 18 27 0s18 18 27 0 18 18 27 0" /><path className="trace muted" d="M360 184c9-12 18 12 27 0s18 12 27 0 18 12 27 0" /><text x="375" y="235">SCALP EEG</text></g>
      <path className="diagram-arrow step-4" d="M455 140h33" markerEnd="url(#eeg-arrow)" />
      <g className="diagram-step step-4 transformer">{[0, 1, 2].map(i => <rect key={i} x={505 + i * 24} y={93 + i * 13} width="70" height="78" rx="5" />)}<text x="501" y="235">SHARED PATTERNS</text></g>
      <path className="diagram-arrow step-5" d="M612 140h33" markerEnd="url(#eeg-arrow)" />
      <g className="diagram-step step-5 shots">{[0, 1, 2, 3, 4].map(i => <circle key={i} className="diagram-node" cx={667 + (i % 3) * 24} cy={119 + Math.floor(i / 3) * 35} r="7" />)}<text x="651" y="235">FIVE EXAMPLES</text></g>
      <path className="diagram-arrow step-6" d="M735 140h34" markerEnd="url(#eeg-arrow)" />
      <g className="diagram-step step-6 output"><rect x="790" y="92" width="98" height="94" rx="7" /><path className="accent-stroke" d="M814 155v-28m24 28V112m24 43v-47" /><text x="799" y="235">DECODE INTENT</text></g>
    </svg>
  );
}

function ResearchDiagram({ type }: { type: ResearchKey }) {
  return <div className="research-detail-diagram is-active">{type === 'fly' ? <FlyDiagram /> : type === 'fmri' ? <FmriDiagram /> : <EegDiagram />}</div>;
}

const externalLinks = [
  ['GS', 'Google Scholar', 'https://scholar.google.com/citations?user=M53eolYAAAAJ&hl=en'],
  ['W', 'Web of Science · PKR-5994-2026', 'https://www.webofscience.com/wos/author/record/PKR-5994-2026'],
  ['GH', 'GitHub', 'https://github.com/ssyel2'],
  ['ID', 'ORCID', 'https://orcid.org/0009-0003-9724-9581'],
  ['X', 'X / Twitter', 'https://x.com/yinshuangx74130'],
];

export default function Home() {
  const [expanded, setExpanded] = useState<ResearchKey | null>(null);
  const [showOlderNews, setShowOlderNews] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#bio" aria-label="Enze Li, back to top"><span className="brand-mark">EL</span><span>Enze Li</span></a>
        <nav aria-label="Primary navigation">
          {['Bio', 'Research', 'Publications', 'Experience', 'News', 'Misc'].map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="header-contact" href="mailto:ssyel2@nottingham.edu.cn">Email <ArrowIcon /></a>
      </header>

      <section className="hero" id="bio">
        <div className="hero-copy">
          <p className="eyebrow">Computational Neuroscience <span>·</span> Neuroengineering <span>·</span> AI for Science</p>
          <h1>Enze Li</h1>
          <p className="hero-statement">I study biological intelligence across scales, from biophysical neural dynamics and brain signals to brain-inspired learning systems.</p>
          <div className="hero-status">
            <strong>Year 2 Engineering Student at UNNC</strong>
            <span>Research at Tsinghua University &amp; Forschungszentrum Jülich</span>
          </div>
          <p className="hero-secondary">Kupcinet-Getz International Summer Science Program <strong>Final Review Pool</strong>, Weizmann Institute of Science · Undergraduate Researcher in Medical AI, Neuroengineering &amp; AI4S</p>
          <div className="academic-links" aria-label="Academic and social profiles">
            {externalLinks.map(([icon, label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}><span>{icon}</span></a>)}
            <a href="mailto:ssyel2@nottingham.edu.cn" aria-label="Email Enze Li" title="ssyel2@nottingham.edu.cn"><span>@</span></a>
          </div>
        </div>
        <div className="portrait-column">
          <figure className="portrait-frame"><img src="./assets/images/enze-li.jpg" alt="Enze Li profile artwork" /></figure>
          <div className="portrait-note"><span>UNNC · Tsinghua · FZJ · Weizmann</span><span>Ningbo / Remote</span></div>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="section-heading"><p className="section-kicker">01 / Current focus</p><h2>Current Research</h2><p>Three questions across scales: how to build a digital brain, how to measure the speaking brain, and how to make brain–computer interfaces adapt to people.</p></div>
        <div className="research-cards">
          {researchItems.map(item => {
            const isOpen = expanded === item.id;
            return (
              <article className={`research-card ${isOpen ? 'open' : ''}`} key={item.id}>
                <button type="button" onClick={() => setExpanded(isOpen ? null : item.id)} aria-expanded={isOpen} aria-controls={`research-detail-${item.id}`}>
                  <div className="research-card-top"><span>{item.number}</span><span>{isOpen ? 'Close' : 'Explore'} {isOpen ? '−' : '+'}</span></div>
                  <MiniSchematic type={item.id} />
                  <p className="research-institution">{item.institution}</p><h3>{item.title}</h3><p className="research-role">{item.role}</p><p className="research-description">{item.description}</p>
                  <div className="research-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </button>
                {isOpen && (
                  <div className="research-detail" id={`research-detail-${item.id}`}>
                    <ResearchDiagram type={item.id} />
                    <p className="diagram-caption">{item.caption}</p>
                    <div className="detail-grid"><ul>{item.facts.map(fact => <li key={fact}>{fact}</li>)}</ul><div className="supervision">{item.id === 'fly' && <><span>Supervisors</span><p><a href="https://www.hy.tsinghua.edu.cn/hyen/info/1161/1119.htm" target="_blank" rel="noreferrer">Prof. Hexi Baoyin <ArrowIcon /></a><br />Prof. Bin Cheng</p></>}{item.id === 'fmri' && <><span>Group / supervisors</span><p><a href="https://www.fz-juelich.de/en/inm/inm-7" target="_blank" rel="noreferrer">Brain Variability Research Group / INM-7 <ArrowIcon /></a><br />Prof. Simon Eickhoff · Dr. Susanne Weis</p></>}{item.id === 'eeg' && <><span>Supervisor</span><p><a href="https://www.nottingham.edu.cn/cn/Science-Engineering/People/Profile.aspx?id=e5d4ef32-a493-4daf-8b34-babc3487d469&language=zh" target="_blank" rel="noreferrer">Dr. Kian Ming Lim <ArrowIcon /></a></p></>}</div></div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="publications-section" id="publications">
        <div className="section-heading split"><div><p className="section-kicker">02 / Research output</p><h2>Selected Publications</h2></div><p>Two current outputs. Status labels are deliberately explicit.</p></div>
        <div className="publication-list">
          <article className="publication-card"><div className="publication-meta"><span>2026</span><span>Manuscript under review</span></div><div><h3>An End-to-End Clinical AI Ecosystem for Assessment</h3><p>Enze Li</p><p className="publication-venue">Under review at <em>Computer Methods and Programs in Biomedicine</em></p><div className="research-tags"><span>Medical AI</span><span>Medical Image Analysis</span><span>Foundation Models</span></div></div><span className="status-pill">Under review</span></article>
          <article className="publication-card"><div className="publication-meta"><span>2025</span><span>Proceedings</span></div><div><h3>A Systematic Review of Traditional and Deep Learning Algorithms in Intelligent Healthcare</h3><p>Enze Li</p><p className="publication-venue">Proceedings of the 2nd International Conference on Communication, Information and Digital Technologies</p><div className="research-tags"><span>Clinical AI</span><span>Systematic Review</span><span>Deep Learning</span></div></div><a className="paper-link" href="https://doi.org/10.1117/12.3090538" target="_blank" rel="noreferrer">Paper <ArrowIcon /></a></article>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-heading"><p className="section-kicker">03 / Academic path</p><h2>Education &amp;<br />Experience</h2></div>
        <div className="timeline-columns">
          <div className="timeline-column"><h3>Education &amp; selected training</h3>
            <article><time>2024 — 2028 (Expected)</time><h4>University of Nottingham Ningbo China</h4><p><strong>BEng (Hons) Chemical and Environmental Engineering</strong></p></article>
            <article><time>2026 — Present</time><h4>University of Oxford</h4><p><strong>Advanced Project · Machine Learning for Computer Vision</strong></p><small>Academic project, not a degree program · Supervisor: <a href="https://eng.ox.ac.uk/people/jens-rittscher" target="_blank" rel="noreferrer">Prof. Jens Rittscher <ArrowIcon /></a></small></article>
            <article><time>2025</time><h4>University of Oxford</h4><p><strong>Oxford Machine Learning Summer School · A+ (Top 1%)</strong></p><small>Selected academic training · Instructor: <a href="https://eng.ox.ac.uk/people/adel-bibi" target="_blank" rel="noreferrer">Dr. Adel Bibi <ArrowIcon /></a></small></article>
            <article><time>Mar 2025 — Jan 2026</time><h4>Imperial College London</h4><p><strong>Advanced Project Courses</strong></p><small>Academic training, not a degree program · Neuroengineering and Neurotechnology 97/100 · Brain-Machine Interfaces 88/100</small></article>
          </div>
          <div className="timeline-column"><h3>Research experience</h3>
            <article><time>2026 — Present</time><h4>Tsinghua University</h4><p><strong>Research Assistant — Biophysically Detailed Whole-Brain Modeling</strong></p><small>Computational Neuroscience · Biophysical Modeling · SBI</small></article>
            <article><time>2026 — Present</time><h4><a href="https://www.fz-juelich.de/en/inm/inm-7" target="_blank" rel="noreferrer">Forschungszentrum Jülich <ArrowIcon /></a></h4><p><strong>Incoming Visiting Student — SpExNeuro Project</strong></p><small>Remote currently · On-site visit expected June 2027 · fMRI · Speech · Neuroimaging</small></article>
            <article><time>Jan 2026 — Present</time><h4>University of Nottingham Ningbo China</h4><p><strong>Research Assistant — NeuroPIT</strong></p><small>EEG · BCI · Physics-Informed Learning · Few-Shot Learning</small></article>
            <article><time>Jun 2025 — Mar 2026</time><h4>Independent Research Project</h4><p><strong>First-Author Researcher — Medical Image Analysis</strong></p><small>End-to-end computer-aided diagnosis · Classification · Segmentation · Interactive foundation-model components · Independent blind-test cohort</small></article>
            <article><time>Jan 2025 — Aug 2025</time><h4>Independent Research</h4><p><strong>Systematic Review of Clinical AI</strong></p><small>Traditional algorithms · Deep learning · Intelligent healthcare</small></article>
          </div>
        </div>
        <div className="recognition-row">
          <div><span>Selected recognition</span><h3><a href="https://info.weizmann.ac.il/en/kupcinet-getz-international-summer-program" target="_blank" rel="noreferrer">Kupcinet-Getz International Summer Science Program <ArrowIcon /></a></h3><p><strong>Weizmann Institute of Science — Final Review Pool, 2026</strong><br />Selection recognition; not program attendance or acceptance.</p></div>
          <div><span>Also</span><p>Oxford Summer School Scholarship — 2025<br />Third Prize / Best Poster, FOSE UG/PGT Research Showcase, UNNC — 2025<br />Peer Reviewer, THC / SAGE Journals — 2026–Present</p></div>
        </div>
      </section>

      <section className="news-section" id="news">
        <div className="section-heading"><p className="section-kicker">04 / Updates</p><h2>News</h2></div>
        <div className="news-list">{news.slice(0, showOlderNews ? news.length : 6).map(([year, item], index) => <article key={`${year}-${item}`}><time>{year}</time><p>{item}</p>{index < 3 && <span>New</span>}</article>)}</div>
        <button className="news-toggle" type="button" aria-expanded={showOlderNews} onClick={() => setShowOlderNews(value => !value)}>{showOlderNews ? 'Hide older news' : 'Show older news'} <span>{showOlderNews ? '−' : '+'}</span></button>
      </section>

      <section className="misc-section" id="misc">
        <div className="section-heading"><p className="section-kicker">05 / Beyond research</p><h2>Beyond Research</h2></div>
        <div className="misc-grid"><article><span>01 / Sports</span><h3>Movement and competition.</h3><p>Outside research, I enjoy table tennis, cycling, and chess. I follow football closely, especially Real Madrid, Bayern Munich, and the French national team.</p></article><article><span>02 / Music</span><h3>British music to Lo Ta-yu.</h3><p>My music taste ranges from British music to Lo Ta-yu, and cycling is usually my preferred way to explore somewhere new.</p></article><article><span>03 / Reading</span><h3>Classics, science, and a little randomness.</h3><p>I keep a personal reading list spanning scientific classics, the history of ideas, and world literature—and built a tiny random book-draw tool to choose what to read next.</p></article><div className="smile" aria-hidden="true">:)</div></div>
      </section>

      <footer><div><strong>Enze Li</strong><p>Computational Neuroscience · Neuroengineering · AI for Science</p></div><div className="footer-links"><a href="mailto:ssyel2@nottingham.edu.cn">Email</a><a href="https://orcid.org/0009-0003-9724-9581" target="_blank" rel="noreferrer">ORCID</a><a href="https://github.com/ssyel2" target="_blank" rel="noreferrer">GitHub</a></div><span>© 2026 Enze Li</span></footer>
    </main>
  );
}
