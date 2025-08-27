/** @type {import("next").NextConfig} */
const config = {
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Content-Security-Policy",
						value:
							"frame-ancestors 'self' https://warpcast.com https://www.warpcast.com https://client.warpcast.com https://miniapps.farcaster.xyz https://*.farcaster.xyz",
					},
					{
						key: "X-Frame-Options",
						value: "ALLOWALL",
					},
					{
						key: "Cross-Origin-Opener-Policy",
						value: "same-origin-allow-popups",
					},
				],
			},
		];
	},
};

export default config;
