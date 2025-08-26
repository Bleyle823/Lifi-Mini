/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    turbopack: {
      // Explicitly set root to this workspace to silence inferred root warning
      root: __dirname,
    },
  },
};

export default config;
