import type { MetadataRoute } from 'next';

const routes = [
  '',
  'book',
  'eye-tests',
  'specialist-eye-care',
  'glasses-contact-lenses',
  'childrens-eye-care',
  'about',
  'contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.settons.co.uk';
  return routes.map((route) => ({
    url: `${base}/${route}`,
    lastModified: new Date(),
  }));
}
