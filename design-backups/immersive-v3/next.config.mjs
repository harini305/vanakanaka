/** @type {import('next').NextConfig} */
const sectionRedirect = (source, hash) => ({ source, destination: `/#${hash}`, permanent: true });

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  // Former WordPress routes now live as sections of the single page.
  async redirects() {
    return [
      sectionRedirect("/classes", "classes"),
      sectionRedirect("/schedule", "schedule"),
      sectionRedirect("/the-studio", "studio"),
      sectionRedirect("/contact", "contact"),
      sectionRedirect("/yoga-client-intake-form", "intake"),
      { source: "/hello-world", destination: "/", permanent: true },
      { source: "/category/:slug*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
