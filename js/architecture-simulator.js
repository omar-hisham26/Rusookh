/**
 * Rusookh Live Architecture Reactor Simulator
 * Renders real-time particle packet transfers between microservices,
 * calculates latency metrics, and synchronizes with WebAudio acoustic pulses.
 */

class ArchitectureSimulator {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.nodes = [];
    this.packets = [];
    this.animId = null;
    this.activeStep = 0;
    this.isRunning = false;
  }

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.setupNodes();
    this.startLoop();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = Math.max(380, rect.height);
    this.setupNodes();
  }

  setupNodes() {
    if (!this.canvas) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const isRtl = document.documentElement.dir === 'rtl';

    // 5 architecture tiers across horizontal space
    const count = 5;
    this.nodes = [];

    const labels = [
      { id: 'client', title: 'Client Tier', icon: '📱', color: '#00F2FE' },
      { id: 'edge', title: 'Edge Armor', icon: '🛡️', color: '#38EF7D' },
      { id: 'ai', title: 'Neural Core', icon: '⚡', color: '#FF007A' },
      { id: 'microservices', title: 'Microservices', icon: '⚙️', color: '#7928CA' },
      { id: 'database', title: 'Encrypted DB', icon: '🗄️', color: '#4FACFE' },
    ];

    for (let i = 0; i < count; i++) {
      const stepIndex = isRtl ? (count - 1 - i) : i;
      const x = (w * 0.1) + ((w * 0.8) / (count - 1)) * i;
      const y = h * 0.5 + Math.sin(i * 1.5) * 20;

      this.nodes.push({
        index: stepIndex,
        x,
        y,
        radius: 36,
        pulse: 0,
        ...labels[stepIndex]
      });
    }

    // Sort by logical progression (0 -> 1 -> 2 -> 3 -> 4)
    this.nodes.sort((a, b) => a.index - b.index);
  }

  injectPacket() {
    if (this.isRunning) return;
    this.isRunning = true;
    if (window.sound) {
      window.sound.whoosh(0.5, 0.4);
    }

    const logEl = document.getElementById('arch-terminal-log');
    const updateLog = (key) => {
      if (logEl && window.i18n) {
        logEl.innerHTML = `<span class="text-emerald-400 font-mono font-bold">[TELEMETRY]</span> ${window.i18n.t(key)}`;
      }
    };

    updateLog('arch_log_sending');

    // Sequential jump through nodes
    const jumpNode = (nodeIdx) => {
      if (nodeIdx >= this.nodes.length) {
        this.isRunning = false;
        updateLog('arch_log_complete');
        if (window.sound) window.sound.triumph(0.5);
        return;
      }

      const node = this.nodes[nodeIdx];
      node.pulse = 1.0;
      if (window.sound) window.sound.packetPing(nodeIdx);

      // Log messages per node
      if (nodeIdx === 1) updateLog('arch_log_edge');
      if (nodeIdx === 2) updateLog('arch_log_ai');
      if (nodeIdx === 3) updateLog('arch_log_services');

      // Spawn traveling particles to next node if available
      if (nodeIdx < this.nodes.length - 1) {
        const nextNode = this.nodes[nodeIdx + 1];
        this.spawnTraveler(node, nextNode, () => {
          jumpNode(nodeIdx + 1);
        });
      } else {
        setTimeout(() => jumpNode(nodeIdx + 1), 400);
      }
    };

    jumpNode(0);
  }

  spawnTraveler(fromNode, toNode, onComplete) {
    const duration = 400; // ms
    const startTime = performance.now();

    const packet = {
      fromX: fromNode.x,
      fromY: fromNode.y,
      toX: toNode.x,
      toY: toNode.y,
      color: toNode.color,
      startTime,
      duration,
      onComplete
    };

    this.packets.push(packet);
  }

  startLoop() {
    const render = () => {
      this.draw();
      this.animId = requestAnimationFrame(render);
    };
    render();
  }

  draw() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const now = performance.now();

    ctx.clearRect(0, 0, w, h);

    // 1. Draw glowing connecting bus lines between nodes
    for (let i = 0; i < this.nodes.length - 1; i++) {
      const a = this.nodes[i];
      const b = this.nodes[i + 1];

      // Outer Glow Line
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Cyber Dash Energy flow
      ctx.beginPath();
      ctx.setLineDash([8, 12]);
      ctx.lineDashOffset = -now * 0.035;
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = 'rgba(0, 242, 254, 0.35)';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 2. Draw Traveling Data Packets
    for (let i = this.packets.length - 1; i >= 0; i--) {
      const p = this.packets[i];
      const elapsed = now - p.startTime;
      const progress = Math.min(1, elapsed / p.duration);

      const curX = p.fromX + (p.toX - p.fromX) * progress;
      const curY = p.fromY + (p.toY - p.fromY) * progress;

      // Glow aura
      const grad = ctx.createRadialGradient(curX, curY, 2, curX, curY, 22);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.3, p.color);
      grad.addColorStop(1, 'rgba(0,0,0,0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(curX, curY, 22, 0, Math.PI * 2);
      ctx.fill();

      // Core photon
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(curX, curY, 5, 0, Math.PI * 2);
      ctx.fill();

      if (progress >= 1) {
        if (p.onComplete) p.onComplete();
        this.packets.splice(i, 1);
      }
    }

    // 3. Draw Nodes (Tiers)
    this.nodes.forEach((node) => {
      // Pulse decay
      if (node.pulse > 0) {
        node.pulse = Math.max(0, node.pulse - 0.035);

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (1 - node.pulse) * 35, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 242, 254, ${node.pulse * 0.7})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Outer glass ring
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      ctx.fill();
      ctx.strokeStyle = node.pulse > 0 ? '#00F2FE' : 'rgba(255, 255, 255, 0.16)';
      ctx.lineWidth = node.pulse > 0 ? 3 : 1.5;
      ctx.stroke();

      // Inner Icon
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.icon, node.x, node.y);

      // Node Label
      ctx.font = '600 12px "Space Grotesk", sans-serif';
      ctx.fillStyle = node.pulse > 0 ? '#00F2FE' : '#94a3b8';
      ctx.fillText(node.title, node.x, node.y + node.radius + 22);
    });
  }
}

window.archSim = new ArchitectureSimulator();
