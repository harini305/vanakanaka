/** @type {import('next').NextConfig} */
const sectionRedirect = (source, hash) => ({ source, destination: `/#${hash}`, permanent: true });

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  // Long browser caching for the site's photographs, so repeat visits don't
  // re-request them from the CDN. If a photo is replaced, give it a new filename.
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
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
