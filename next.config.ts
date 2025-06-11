import { withPayload } from "@payloadcms/next/withPayload";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Your Next.js config here
  experimental: {
    reactCompiler: false,
  },
};


export default withPayload(nextConfig);