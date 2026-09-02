import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const researchTracks = [
  {
    number: '01',
    title: '数字神经元',
    titleEn: 'Digital Neurons',
    description: '从形态结构到多区室模型，把生物学证据、参数来源和仿真结果放在同一条可审计链路中。',
    tags: ['SWC', 'Biophysics', 'SBI'],
  },
  {
    number: '02',
    title: '脑电智能分析',
    titleEn: 'EEG Intelligence',
    description: '将神经动力学先验带入表征学习，探索跨被试迁移、小样本校准与更可信的脑机接口。',
    tags: ['EEG', 'PINN', 'Transfer'],
  },
  {
    number: '03',
    title: '证据架构',
    titleEn: 'Evidence Systems',
    description: '让每个结论回到原始协议、样本和不确定性边界，为模型决策建立可复查的研究基础。',
    tags: ['Provenance', 'Audit', 'Open science'],
  },
];

const projects = [
  {
    index: 'A',
    title: 'Digital Neuron Assembly',
    subtitle: '可审计的 SWC → 多区室模型工作流',
    description: '把 Model、Simulator、Evaluator 与 Inference 拆成清晰模块，在单变量回归之后再进入联合参数推断。',
    stack: 'BRIAN2 · NEURON · JAXLEY · SBI',
  },
  {
    index: 'B',
    title: 'NeuroPIT',
    subtitle: '物理信息增强的 EEG 表征学习',
    description: '以神经动力学约束连接脑电特征与深度模型，关注跨数据集迁移、少样本适应和泄漏边界。',
    stack: 'EEG · FHN · TRANSFORMER · CALIBRATION',
  },
  {
    index: 'C',
    title: 'Evidence-grounded Review',
    subtitle: '从文献证据到模型参数的可追溯审计',
    description: '逐篇保留实验条件、记录模式与样本信息，避免把不同制备和协议下的数值直接拼成一个参数集。',
    stack: 'PROVENANCE · PROTOCOL · UNCERTAINTY',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">S/</span>
          <span>SSYEL</span>
        </a>

        <nav aria-label="主导航">
          <a href="#research">研究</a>
          <a href="#projects">项目</a>
          <a href="#about">关于</a>
        </nav>

        <a className="header-contact" href="https://github.com/ssyel2" target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Computational neuroscience · 2026</p>
          <h1>把神经系统，变成<br />可验证的计算模型。</h1>
          <p className="hero-lede">
            我关注数字神经元、生物物理建模与脑电智能分析，
            用可追溯的证据和可复现的代码连接实验数据与计算模型。
          </p>

          <div className="hero-actions">
            <a className={cn(buttonVariants({ size: 'lg' }), 'primary-action')} href="#research">
              查看研究 <ArrowDownRight aria-hidden="true" />
            </a>
            <a
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'secondary-action')}
              href="https://github.com/ssyel2"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <div className="hero-meta" aria-label="个人信息">
            <span>Based in Asia</span>
            <span>Open to collaboration</span>
            <a href="https://github.com/ssyel2" target="_blank" rel="noreferrer">github.com/ssyel2</a>
          </div>
        </div>

        <aside className="research-map" aria-label="研究方向概览">
          <div className="map-head">
            <span>Research map</span>
            <span className="map-status">Live / 03</span>
          </div>
          <div className="map-canvas" aria-hidden="true">
            <svg viewBox="0 0 520 420">
              <path className="map-path muted" d="M42 320 C128 320 126 76 232 76 C330 76 314 212 470 212" />
              <path className="map-path" d="M42 320 C145 320 146 162 238 162 C325 162 336 95 470 95" />
              <path className="map-path accent" d="M42 320 C154 320 183 280 258 280 C334 280 360 338 470 338" />
              <circle cx="42" cy="320" r="8" />
              <circle cx="238" cy="162" r="8" />
              <circle cx="258" cy="280" r="8" />
              <circle cx="470" cy="95" r="8" />
              <circle cx="470" cy="212" r="8" />
              <circle cx="470" cy="338" r="8" />
            </svg>
            <span className="map-label label-input">Evidence</span>
            <span className="map-label label-model">Model</span>
            <span className="map-label label-one">Digital neuron</span>
            <span className="map-label label-two">EEG + PINN</span>
            <span className="map-label label-three">Open science</span>
          </div>
          <div className="map-footer">
            <div><strong>03</strong><span>research tracks</span></div>
            <div><strong>01</strong><span>shared principle</span></div>
            <div><strong>∞</strong><span>questions ahead</span></div>
          </div>
        </aside>
      </section>

      <section className="research-section" id="research">
        <div className="section-intro">
          <p className="section-kicker">01 / Research focus</p>
          <h2>研究不是一组标签，<br />而是一条能被检查的路径。</h2>
          <p>从原始证据到最终模型，每一步都应该说明：数据来自哪里、改变了什么、结果意味着什么。</p>
        </div>
        <div className="track-list">
          {researchTracks.map((track) => (
            <article className="track" key={track.number}>
              <div className="track-number">{track.number}</div>
              <div className="track-main">
                <p>{track.titleEn}</p>
                <h3>{track.title}</h3>
                <span>{track.description}</span>
              </div>
              <div className="tag-list" aria-label={`${track.title}关键词`}>
                {track.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-head">
          <div>
            <p className="section-kicker light">02 / Selected work</p>
            <h2>正在推进的工作</h2>
          </div>
          <p>这里展示方法与方向，不用未经验证的数字装饰进度。</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.index}>
              <div className="project-index">{project.index}</div>
              <p className="project-subtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-stack">{project.stack}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-label">
          <p className="section-kicker">03 / About</p>
          <span className="rotating-mark" aria-hidden="true">↗</span>
        </div>
        <div className="about-copy">
          <h2>我相信好的计算研究，首先应该经得起复查。</h2>
          <div className="about-columns">
            <p>
              我的工作位于计算神经科学、机器学习和研究工程的交叉处。
              我喜欢把模糊的问题拆成可验证的模块，并把来源、假设和失败路径一起留下。
            </p>
            <p>
              当前关注数字神经元装配、物理信息增强的 EEG 分析，以及文献到模型之间的证据追踪。
              欢迎围绕神经建模、可复现研究与开放工具展开交流。
            </p>
          </div>
          <a className="text-link" href="https://github.com/ssyel2" target="_blank" rel="noreferrer">
            在 GitHub 上查看代码 <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="principles" aria-label="研究原则">
        <div><span>01</span><strong>Evidence first.</strong><p>先确认来源与协议，再谈参数。</p></div>
        <div><span>02</span><strong>One change at a time.</strong><p>一次只改变一个声明项。</p></div>
        <div><span>03</span><strong>Uncertainty belongs in the result.</strong><p>不确定性不是脚注，而是结论的一部分。</p></div>
      </section>

      <footer>
        <div>
          <p className="footer-kicker">Let&apos;s compare notes.</p>
          <h2>有一个值得验证的问题？</h2>
        </div>
        <a className="footer-link" href="https://github.com/ssyel2" target="_blank" rel="noreferrer">
          GitHub 上联系我 <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="footer-meta">
          <span>© 2026 SSYEL</span>
          <span>Built for open inquiry</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
