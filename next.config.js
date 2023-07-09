/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true, // ([true: status code 308] [false: status code 307])
      },
    ]
  }
}

module.exports = nextConfig
