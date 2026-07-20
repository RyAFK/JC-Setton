import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyMobileBar } from '@/components/layout/StickyMobileBar';
import { SkipLink } from '@/components/layout/SkipLink';
import { ConsentBanner } from '@/components/ConsentBanner';
import { practice } from '@/content/practice';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.settons.co.uk'),
  title: {
    default: 'J.C. Setton Opticians | Independent Opticians in West Wickham',
    template: '%s | J.C. Setton Opticians',
  },
  description:
    'Thorough, personal eye care in West Wickham. Routine eye tests, advanced retinal imaging, children’s vision and specialist contact lenses at J.C. Setton Opticians.',
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'J.C. Setton Opticians',
    title: 'J.C. Setton Opticians | Independent Opticians in West Wickham',
    description:
      'Thorough, personal eye care in West Wickham — routine eye tests, retinal imaging, children’s vision and specialist contact lenses.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Optician',
  name: practice.name,
  image: undefined,
  telephone: practice.phone.display,
  email: practice.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: practice.address.line1,
    addressLocality: practice.address.town,
    postalCode: practice.address.postcode,
    addressCountry: 'GB',
  },
  url: 'https://www.settons.co.uk',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <SkipLink />
        <Header />
        <main id="main-content" className="pb-[76px] lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileBar />
        <ConsentBanner />
      </body>
    </html>
  );
}
