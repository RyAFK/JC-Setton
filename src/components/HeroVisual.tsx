/**
 * Hero graphic placeholder: a Snellen eye chart coming into sharp focus
 * within a trial-lens dial. No authentic practice photography was
 * available to this build, so rather than use generic stock/AI
 * "healthcare" imagery, this is a clearly-a-graphic illustration grounded
 * in an actual optometry instrument (a trial lens) and the eye test itself.
 *
 * To use a real photo instead: drop the file at
 * `public/images/hero-practice.jpg` and swap <LensChartGraphic> in
 * Hero.tsx for a Next.js <Image> pointing at it (set width/height to avoid
 * layout shift, and write alt text describing what is actually shown).
 */

const TICK_COUNT = 24;
const TICKS = Array.from({ length: TICK_COUNT }, (_, i) => {
  const angle = (i / TICK_COUNT) * Math.PI * 2;
  const cx = 200;
  const cy = 200;
  return {
    x1: cx + 188 * Math.cos(angle),
    y1: cy + 188 * Math.sin(angle),
    x2: cx + 178 * Math.cos(angle),
    y2: cy + 178 * Math.sin(angle),
  };
});

export function LensChartGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Illustration of an eye test chart coming into sharp focus within a trial lens, representing a thorough eye examination"
    >
      <defs>
        <radialGradient id="lensGradient" cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#eef4fa" />
          <stop offset="100%" stopColor="#dbe8f4" />
        </radialGradient>
        <filter id="lensBlurLarge">
          <feGaussianBlur stdDeviation="2.4" />
        </filter>
        <filter id="lensBlurMedium">
          <feGaussianBlur stdDeviation="1.3" />
        </filter>
      </defs>

      <circle cx="200" cy="200" r="196" fill="url(#lensGradient)" />
      <circle cx="200" cy="200" r="188" fill="none" stroke="#2b6693" strokeWidth="2" opacity="0.55" />
      <g stroke="#2b6693" strokeWidth="2" opacity="0.55">
        {TICKS.map((t, i) => (
          <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
        ))}
      </g>

      <g style={{ fontFamily: 'var(--font-display)' }} textAnchor="middle" fill="#0f1f33">
        <text x="200" y="96" fontSize="46" filter="url(#lensBlurLarge)" opacity="0.45">
          E
        </text>
        <text x="200" y="146" fontSize="34" filter="url(#lensBlurMedium)" opacity="0.65">
          F P
        </text>
        <text x="200" y="192" fontSize="25">
          T O Z
        </text>
        <text x="200" y="228" fontSize="19">
          L P E D
        </text>
        <text x="200" y="258" fontSize="15" filter="url(#lensBlurMedium)" opacity="0.6">
          P E C F D
        </text>
        <text x="200" y="284" fontSize="12" filter="url(#lensBlurLarge)" opacity="0.4">
          E D F C Z P
        </text>
      </g>

      <line x1="140" y1="212" x2="260" y2="212" stroke="#154a72" strokeWidth="1" opacity="0.3" />
      <circle cx="200" cy="200" r="6" fill="none" stroke="#154a72" strokeWidth="1.4" opacity="0.5" />

      <g style={{ fontFamily: 'var(--font-display)' }} fontSize="10" fill="#5c6f85" textAnchor="middle">
        <text x="200" y="42">
          0
        </text>
        <text x="326" y="204">
          +2
        </text>
        <text x="74" y="204">
          -2
        </text>
        <text x="200" y="366">
          6/6
        </text>
      </g>
    </svg>
  );
}
