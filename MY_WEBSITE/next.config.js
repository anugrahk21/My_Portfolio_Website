/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: [
    //   "media.licdn.com",
    //   "analyticsindiamag.com",
    //   "www.marktechpost.com",
    //   "runacap.com",
    //   "www.aibase.com",
    //   "hub.docker.com",
    //   "huggingface.co",
    //   "arxiv.org",
    //   "d12aarmt01l54a.cloudfront.net", // Added cloudfront domain
    //   "abs.twimg.com", // Added Twitter image domain
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "date-fns",
      "framer-motion",
      "posthog-js",
      "@radix-ui/react-avatar",
      "@radix-ui/react-dialog",
      "@radix-ui/react-slot",
      "@radix-ui/react-tooltip",
    ],
  },
};

module.exports = nextConfig;
