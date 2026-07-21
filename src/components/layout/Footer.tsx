import Link from 'next/link';
import { nav, practice } from '@/content/practice';

export function Footer() {
  return (
    <footer className="bg-ink-900 pb-28 pt-16 text-white lg:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-xl font-semibold">J.C. Setton Opticians</p>
            <p className="mt-2 text-sm text-white/70">
              Independent opticians in West Wickham, providing thorough, personal eye care.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Explore
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/85 hover:text-white hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Visit
            </h2>
            <address className="mt-3 space-y-1 text-sm not-italic text-white/85">
              <p>{practice.address.line1}</p>
              <p>{practice.address.town}</p>
              <p>{practice.address.postcode}</p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Contact
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={practice.phone.href} className="font-semibold text-white hover:underline">
                  {practice.phone.display}
                </a>
              </li>
              <li>
                <a href={`mailto:${practice.email}`} className="text-white/85 hover:text-white hover:underline">
                  {practice.email}
                </a>
              </li>
              <li>
                <Link href="/book" className="text-white/85 hover:text-white hover:underline">
                  Book an appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} J.C. Setton Opticians. All rights reserved.</p>
          <p>Company information sourced from public records where cited.</p>
        </div>
      </div>
    </footer>
  );
}
