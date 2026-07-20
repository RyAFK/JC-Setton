/**
 * Hero visual placeholder.
 *
 * No authentic photography of the practice was available to this build (see
 * project notes). Rather than use generic stock/AI "healthcare" photography,
 * this renders a calm, editorial illustration referencing an eye
 * examination — clearly a graphic, not a photo standing in for one.
 *
 * To use a real photo instead: drop the file at
 * `public/images/hero-practice.jpg` and swap this component's markup for a
 * Next.js <Image> pointing at it (set width/height to avoid layout shift,
 * and write alt text describing what is actually shown).
 */
export function HeroVisual() {
  return (
    <figure
      className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl2 bg-gradient-to-br from-practice-teal-light via-white to-practice-gold-light shadow-card sm:aspect-square lg:aspect-[4/5]"
      role="img"
      aria-label="Illustration of an optometrist examining a patient's eyes using retinal imaging equipment, in a calm consulting room"
    >
      <svg
        viewBox="0 0 400 480"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <rect width="400" height="480" fill="none" />
        <circle cx="200" cy="190" r="120" fill="#0f5c5c" opacity="0.06" />
        <circle cx="200" cy="190" r="80" fill="#0f5c5c" opacity="0.08" />
        {/* Simple line illustration: patient profile + phoropter/imaging device */}
        <path
          d="M120 260c0-44 36-80 80-80s80 36 80 80"
          stroke="#0f5c5c"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="200" cy="150" r="46" stroke="#0f5c5c" strokeWidth="3" fill="#faf8f4" />
        <circle cx="184" cy="146" r="6" fill="#0f5c5c" />
        <circle cx="216" cy="146" r="6" fill="#0f5c5c" />
        <path d="M178 168c6 6 12 8 22 8s16-2 22-8" stroke="#0f5c5c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* imaging device arm */}
        <path
          d="M300 220c20-8 36 4 36 24s-16 30-36 22"
          stroke="#b6862c"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="308" cy="246" r="14" stroke="#b6862c" strokeWidth="3" fill="#f6ecd9" />
        {/* base / desk line */}
        <path d="M60 400h280" stroke="#0f5c5c" strokeWidth="2" opacity="0.25" strokeLinecap="round" />
        <path d="M120 260v70M280 260v70" stroke="#0f5c5c" strokeWidth="3" opacity="0.5" strokeLinecap="round" />
      </svg>
      <figcaption className="sr-only">
        Illustration representing a thorough, unhurried eye examination at J.C. Setton Opticians
      </figcaption>
    </figure>
  );
}
