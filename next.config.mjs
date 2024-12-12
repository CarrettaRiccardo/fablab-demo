/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: "cdn2.thecatapi.com",
            }
        ],
    }
};

export default nextConfig;
