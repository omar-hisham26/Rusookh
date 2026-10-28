/**
 * Rusookh Cinematic Sound Engine
 * Powered entirely by Web Audio API — Zero external sound files required.
 * Generates procedural film-grade sound effects: ambient cosmic hum, whooshes,
 * holographic card shifts, futuristic clicks, chords, and packet pings.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.ambientGain = null;
    this.ambientOsc1 = null;
    this.ambientOsc2 = null;
    this.noiseBuf = null;
    this.isMuted = true; // start muted until user clicks/enables sound
    this.hasInteracted = false;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.isMuted ? 0 : 0.45;

      const masterFilter = this.ctx.createBiquadFilter();
      masterFilter.type = 'lowpass';
      masterFilter.frequency.value = 8500;
      this.master.connect(masterFilter);
      masterFilter.connect(this.ctx.destination);

      // Procedural Pink/White Noise buffer for sweeps & whooshes
      const sampleRate = this.ctx.sampleRate;
      const bufferLength = Math.floor(sampleRate * 2.5);
      this.noiseBuf = this.ctx.createBuffer(1, bufferLength, sampleRate);
      const data = this.noiseBuf.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferLength; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }

      this.startAmbientDrone();
    } catch (e) {
      console.warn('AudioContext not supported or blocked:', e);
    }
  }

  ensureContext() {
    if (!this.ctx) this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.ensureContext();
    this.isMuted = !this.isMuted;
    if (this.master && this.ctx) {
      const now = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.setTargetAtTime(this.isMuted ? 0 : 0.45, now, 0.1);
    }
    return !this.isMuted;
  }

  setMuted(mute) {
    this.isMuted = mute;
    if (this.master && this.ctx) {
      const now = this.ctx.currentTime;
      this.master.gain.setTargetAtTime(this.isMuted ? 0 : 0.45, now, 0.1);
    }
  }

  startAmbientDrone() {
    if (!this.ctx || !this.master) return;
    try {
      const now = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, now);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.06, now + 3);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, now);

      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc1.type = 'sawtooth';
      this.ambientOsc1.frequency.setValueAtTime(55, now); // A1 note

      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientOsc2.type = 'sine';
      this.ambientOsc2.frequency.setValueAtTime(55.6, now); // slight beat detune

      this.ambientOsc1.connect(filter);
      this.ambientOsc2.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.master);

      this.ambientOsc1.start(now);
      this.ambientOsc2.start(now);
    } catch (err) {
      console.warn('Ambient drone error:', err);
    }
  }

  // Cinematic Whoosh transition
  whoosh(duration = 0.85, volume = 0.7) {
    if (this.isMuted || !this.ctx || !this.master || !this.noiseBuf) return;
    try {
      const t = this.ctx.currentTime;
      const d = Math.max(0.3, Math.min(duration, 2.0));
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuf;
      src.loop = true;

      const bp = this.ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.Q.setValueAtTime(1.8, t);
      bp.frequency.setValueAtTime(180, t);
      bp.frequency.exponentialRampToValueAtTime(1400, t + d * 0.45);
      bp.frequency.exponentialRampToValueAtTime(260, t + d);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(0.38 * volume, t + d * 0.35);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + d);

      src.connect(bp);
      bp.connect(gain);
      gain.connect(this.master);

      src.start(t);
      src.stop(t + d + 0.05);
    } catch (e) {}
  }

  // Tactile futuristic interface click
  click(volume = 0.5) {
    if (this.isMuted || !this.ctx || !this.master) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, t);
      osc.frequency.exponentialRampToValueAtTime(400, t + 0.035);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.25 * volume, t + 0.003);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);

      osc.connect(gain);
      gain.connect(this.master);

      osc.start(t);
      osc.stop(t + 0.04);
    } catch (e) {}
  }

  // 3D Card Hologram shift
  cardShift(freqMultiplier = 1, volume = 0.6) {
    if (this.isMuted || !this.ctx || !this.master) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      const base = 280 * freqMultiplier;
      osc.frequency.setValueAtTime(base, t);
      osc.frequency.exponentialRampToValueAtTime(base * 1.8, t + 0.08);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.22 * volume, t + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);

      osc.connect(gain);
      gain.connect(this.master);

      osc.start(t);
      osc.stop(t + 0.15);
    } catch (e) {}
  }

  // Network packet flow ping (used in dynamic architecture diagram)
  packetPing(nodeIndex = 0) {
    if (this.isMuted || !this.ctx || !this.master) return;
    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
      const freq = notes[nodeIndex % notes.length];

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);

      osc.connect(gain);
      gain.connect(this.master);

      osc.start(t);
      osc.stop(t + 0.3);
    } catch (e) {}
  }

  // Grand cinematic triumph / confirmation chime
  triumph(volume = 0.6) {
    if (this.isMuted || !this.ctx || !this.master) return;
    try {
      const t = this.ctx.currentTime;
      const freqs = [329.63, 440, 554.37, 659.25, 880]; // E maj / A maj chord
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        const startTime = t + idx * 0.045;
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.15 * volume, startTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.2);

        osc.connect(gain);
        gain.connect(this.master);

        osc.start(startTime);
        osc.stop(startTime + 1.3);
      });
    } catch (e) {}
  }
}

// Global Sound instance
window.sound = new SoundEngine();
