/**
 * Rusookh Cinematic Stage & 3D Card Theater Controller
 * Implements 3D Coverflow, interactive mouse tilt, cosmic nebula canvas,
 * and the Film Mode Director timeline.
 */

class CinematicStage {
  constructor() {
    this.currentCardIndex = 2; // middle card active
    this.totalCards = 5;
    this.isFilmModeActive = false;
    this.filmTimelineTimer = null;
    this.starCanvas = null;
    this.starCtx = null;
    this.stars = [];
  }

  init() {
    this.initNebulaStarfield();
    this.init3DCardTheater();
    this.initTerminal();
    this.bindMouseTilt();
  }

  // 1. Cosmic Nebula Starfield Canvas
  initNebulaStarfield() {
    this.starCanvas = document.getElementById('nebula-canvas');
    if (!this.starCanvas) return;
    this.starCtx = this.starCanvas.getContext('2d');

    const resize = () => {
      this.starCanvas.width = window.innerWidth;
      this.starCanvas.height = window.innerHeight;
      this.initStars();
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      this.drawStars();
      requestAnimationFrame(render);
    };
    render();
  }

  initStars() {
    const count = Math.floor((this.starCanvas.width * this.starCanvas.height) / 10000);
    this.stars = [];
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: Math.random() * this.starCanvas.width,
        y: Math.random() * this.starCanvas.height,
        radius: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.2 + 0.05,
        flickerSpeed: Math.random() * 0.02 + 0.005,
      });
    }
  }

  drawStars() {
    const ctx = this.starCtx;
    const w = this.starCanvas.width;
    const h = this.starCanvas.height;
    ctx.clearRect(0, 0, w, h);

    this.stars.forEach((star) => {
      star.y -= star.speed;
      if (star.y < 0) star.y = h;

      star.alpha += Math.sin(performance.now() * star.flickerSpeed) * 0.01;
      star.alpha = Math.max(0.2, Math.min(0.9, star.alpha));

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.shadowBlur = star.radius > 1 ? 6 : 0;
      ctx.shadowColor = '#00F2FE';
      ctx.fill();
    });
  }

  // 2. 3D Card Theater (Coverflow Matrix)
  init3DCardTheater() {
    this.updateCardPositions();

    // Arrows
    const prevBtn = document.getElementById('theater-prev-btn');
    const nextBtn = document.getElementById('theater-next-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.stepCard(-1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.stepCard(1);
      });
    }

    // Direct card click
    const cards = document.querySelectorAll('.theater-card');
    cards.forEach((card, idx) => {
      card.addEventListener('click', () => {
        if (this.currentCardIndex !== idx) {
          this.currentCardIndex = idx;
          this.updateCardPositions();
          if (window.sound) window.sound.cardShift(1 + idx * 0.15);
        }
      });
    });

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        const dir = document.documentElement.dir === 'rtl' ? -1 : 1;
        this.stepCard(dir);
      } else if (e.key === 'ArrowLeft') {
        const dir = document.documentElement.dir === 'rtl' ? 1 : -1;
        this.stepCard(dir);
      }
    });
  }

  stepCard(direction) {
    this.currentCardIndex = (this.currentCardIndex + direction + this.totalCards) % this.totalCards;
    this.updateCardPositions();
    if (window.sound) window.sound.cardShift(1 + (this.currentCardIndex * 0.2));
  }

  updateCardPositions() {
    const cards = document.querySelectorAll('.theater-card');
    const isRtl = document.documentElement.dir === 'rtl';

    cards.forEach((card, idx) => {
      let offset = idx - this.currentCardIndex;

      // Handle wrapping for smooth 3D carousel effect
      if (offset > 2) offset -= this.totalCards;
      if (offset < -2) offset += this.totalCards;

      const factor = isRtl ? -1 : 1;
      const translateX = offset * (window.innerWidth < 768 ? 140 : 220) * factor;
      const translateZ = -Math.abs(offset) * 160;
      const rotateY = -offset * 32 * factor;
      const opacity = Math.max(0.2, 1 - Math.abs(offset) * 0.32);
      const scale = Math.max(0.75, 1 - Math.abs(offset) * 0.12);
      const zIndex = 50 - Math.abs(offset) * 10;

      card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;

      if (offset === 0) {
        card.classList.add('active-card');
        card.classList.remove('inactive-card');
      } else {
        card.classList.remove('active-card');
        card.classList.add('inactive-card');
      }
    });

    // Update active badge indicator in sidebar
    const counterEl = document.getElementById('theater-active-counter');
    if (counterEl) {
      counterEl.textContent = `0${this.currentCardIndex + 1} / 05`;
    }
  }

  // 3. Realistic 3D Tilt on Hover for Cards & Elements
  bindMouseTilt() {
    const tiltContainers = document.querySelectorAll('.interactive-tilt');
    tiltContainers.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -12;
        const rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        // Specular glow highlight position
        const glare = card.querySelector('.specular-glare');
        if (glare) {
          glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 60%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        const glare = card.querySelector('.specular-glare');
        if (glare) {
          glare.style.background = 'transparent';
        }
      });
    });
  }

  // 4. Interactive Terminal
  initTerminal() {
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('terminal-output');
    if (!input || !output) return;

    const executeCommand = (cmdText) => {
      const clean = cmdText.trim().toLowerCase();
      if (!clean) return;

      const userLine = document.createElement('div');
      userLine.className = 'text-cyan-400 font-mono my-1';
      userLine.innerHTML = `<span class="text-emerald-400">rusookh@core:~$</span> ${clean}`;
      output.appendChild(userLine);

      let responseHTML = '';
      if (clean === 'help') {
        responseHTML = `
          <div class="text-slate-300 font-mono space-y-1 my-1 pl-2">
            <div><span class="text-amber-400 font-bold">stack</span> - View technologies & architecture foundations</div>
            <div><span class="text-amber-400 font-bold">philosophy</span> - View Rusookh design & engineering doctrine</div>
            <div><span class="text-amber-400 font-bold">projects</span> - List flagship shipped applications</div>
            <div><span class="text-amber-400 font-bold">contact</span> - Dispatch communication handshake</div>
            <div><span class="text-amber-400 font-bold">clear</span> - Clear terminal buffer</div>
          </div>
        `;
      } else if (clean === 'stack') {
        responseHTML = `
          <div class="text-emerald-300 font-mono space-y-1 my-1 pl-2">
            <div>🚀 <strong class="text-white">Mobile:</strong> Swift (iOS Native), Kotlin (Android), Flutter 3.x, Offline-First SQLite/WatermelonDB</div>
            <div>🌐 <strong class="text-white">Web & Edge:</strong> Next.js 15, TanStack, React 19, Vite, TailwindCSS, Cloudflare Workers (V8 Isolates)</div>
            <div>⚡ <strong class="text-white">Backend & Core:</strong> Go, Rust, Node.js/Bun, Python, gRPC, WebSockets, Kafka, Docker, K8s</div>
            <div>🧠 <strong class="text-white">AI & Automation:</strong> LangChain, LlamaIndex, Vector DBs (Qdrant/Pinecone), Multi-Agent Swarms</div>
            <div>🔒 <strong class="text-white">Security:</strong> OAuth2.0, AES-GCM 256, Zero-Trust, Automated Pentesting Pipelines</div>
          </div>
        `;
      } else if (clean === 'philosophy') {
        responseHTML = `
          <div class="text-cyan-300 font-mono my-1 pl-2 italic">
            "We reject ephemeral web trends and generic AI templates. Every software system we ship is engineered with mathematical rigidity, film-grade visual delight, and perpetual resilience."
          </div>
        `;
      } else if (clean === 'projects') {
        responseHTML = `
          <div class="text-slate-300 font-mono space-y-1 my-1 pl-2">
            <div>[01] <strong class="text-amber-300">Rebalance:</strong> Precision Nutrition & Fitness Ecosystem.</div>
            <div>[02] <strong class="text-emerald-300">Viro:</strong> Instant Multi-Vendor Logistics & Dispatching Grid.</div>
            <div>[03] <strong class="text-cyan-300">Rusookh Core:</strong> Enterprise Autonomous Neural Agents Engine.</div>
          </div>
        `;
      } else if (clean === 'contact') {
        responseHTML = `
          <div class="text-slate-300 font-mono my-1 pl-2">
            <div>Direct Signal: <a href="https://wa.me/966567848419" target="_blank" class="text-emerald-400 underline font-bold">WhatsApp (+966)</a></div>
            <div>Email: <a href="mailto:contact@russokh.com" class="text-cyan-400 underline">contact@russokh.com</a></div>
            <div>HQ: Al Madinah Al Munawwarah, Kingdom of Saudi Arabia.</div>
          </div>
        `;
      } else if (clean === 'clear') {
        output.innerHTML = '';
        return;
      } else {
        responseHTML = `<div class="text-red-400 font-mono my-1">Command '${clean}' not recognized. Type <span class="text-amber-400 font-bold">help</span> for available commands.</div>`;
      }

      const resDiv = document.createElement('div');
      resDiv.innerHTML = responseHTML;
      output.appendChild(resDiv);
      output.scrollTop = output.scrollHeight;

      if (window.sound) window.sound.click(0.4);
    };

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const val = input.value;
        input.value = '';
        executeCommand(val);
      }
    });

    // Preset quick command buttons
    window.runTerminalCommand = (cmd) => {
      executeCommand(cmd);
      const termSection = document.getElementById('section-collective');
      if (termSection) {
        termSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  }

  // 5. Cinematic Film Mode Director
  toggleFilmMode() {
    this.isFilmModeActive = !this.isFilmModeActive;
    const body = document.body;
    const hudBtn = document.getElementById('film-mode-toggle-btn');
    const timelineBar = document.getElementById('film-timeline-progress');

    if (this.isFilmModeActive) {
      body.classList.add('film-mode-active');
      if (hudBtn) {
        hudBtn.innerHTML = `<span>⏹️</span> <span>إيقاف الفيلم (Stop Film)</span>`;
        hudBtn.classList.add('bg-red-500/20', 'border-red-500/50');
      }

      // Unmute sound for the cinematic experience
      if (window.sound && window.sound.isMuted) {
        window.sound.toggleMute();
        const soundBtn = document.getElementById('sound-toggle-btn');
        if (soundBtn) soundBtn.textContent = '🔊 ' + window.i18n.t('sound_on');
      }

      if (window.sound) {
        window.sound.whoosh(1.2, 0.8);
      }

      // Sequence Director: Scrolls through acts with choreographed actions
      const scenes = [
        { id: 'section-hero', duration: 4500, action: () => { window.sound?.triumph(0.4); } },
        { id: 'section-theater', duration: 7000, action: () => {
          this.stepCard(1);
          setTimeout(() => this.stepCard(1), 2200);
          setTimeout(() => this.stepCard(1), 4400);
        }},
        { id: 'section-architecture', duration: 6000, action: () => {
          if (window.archSim) window.archSim.injectPacket();
        }},
        { id: 'section-works', duration: 6500, action: () => { window.sound?.whoosh(0.8, 0.5); } },
        { id: 'section-collective', duration: 5000, action: () => { window.runTerminalCommand('stack'); } },
        { id: 'section-contact', duration: 4000, action: () => { window.sound?.triumph(0.7); } },
      ];

      let sceneIndex = 0;
      let totalDuration = scenes.reduce((acc, s) => acc + s.duration, 0);
      let elapsed = 0;

      const playNextScene = () => {
        if (!this.isFilmModeActive) return;

        if (sceneIndex >= scenes.length) {
          // Loop or stop
          this.toggleFilmMode();
          return;
        }

        const scene = scenes[sceneIndex];
        const el = document.getElementById(scene.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
        if (scene.action) scene.action();

        sceneIndex++;
        this.filmTimelineTimer = setTimeout(playNextScene, scene.duration);
      };

      playNextScene();
    } else {
      body.classList.remove('film-mode-active');
      clearTimeout(this.filmTimelineTimer);
      if (hudBtn) {
        hudBtn.innerHTML = `<span>🎬</span> <span data-i18n="film_mode_btn">${window.i18n.t('film_mode_btn')}</span>`;
        hudBtn.classList.remove('bg-red-500/20', 'border-red-500/50');
      }
    }
  }
}

window.cinematicStage = new CinematicStage();
