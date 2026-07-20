/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Legacy route compatibility from the previous settons.co.uk structure.
      { source: '/shop_bookaneyetest', destination: '/book', permanent: true },
      { source: '/bookaneyetest', destination: '/book', permanent: true },
      { source: '/shop_services', destination: '/eye-tests', permanent: true },
      { source: '/shop_about/:path*', destination: '/about', permanent: true },
      { source: '/shop_about', destination: '/about', permanent: true },
      { source: '/shop_testimonials', destination: '/about#testimonials', permanent: true },
      { source: '/contact_shop', destination: '/contact', permanent: true },
      { source: '/children', destination: '/childrens-eye-care', permanent: true },
      { source: '/eyewear/our_brands', destination: '/glasses-contact-lenses', permanent: true },
      { source: '/eyewear/:path*', destination: '/glasses-contact-lenses', permanent: true },
      { source: '/designer-eyewear', destination: '/glasses-contact-lenses', permanent: true },
      { source: '/eyehealth', destination: '/eye-tests', permanent: true },
      { source: '/offers', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;
