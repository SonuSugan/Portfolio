let audioCtx;

// Synthesizes a short, soft "click" tone with the Web Audio API instead of
// shipping an audio file — a quick sine blip with a fast exponential decay.
function playClick() {
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(720, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.09);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.11);
  } catch {
    // Audio isn't essential to the page working; fail silently.
  }
}

// Attaches one delegated click listener that plays the click sound whenever
// a button, link, or [role="button"] element is clicked anywhere on the page.
export function initClickSound() {
  if (typeof window === "undefined") return () => {};

  const handler = (e) => {
    const target = e.target.closest('button, a, [role="button"]');
    if (target) playClick();
  };

  document.addEventListener("click", handler);
  return () => document.removeEventListener("click", handler);
}
