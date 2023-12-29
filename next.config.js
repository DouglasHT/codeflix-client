/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	/* config options here */
	images: {
		remotePatterns: [{ protocol: "https", hostname: "m.media-amazon.com" }],
	},
};

module.exports = nextConfig;
