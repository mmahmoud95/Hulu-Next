/** @type {import('next').NextConfig} */
module.exports = {
    // reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "links.papareact.com",
            },
            {
                protocol: "https",
                hostname: "image.tmdb.org",
            },
        ],
    },
};
