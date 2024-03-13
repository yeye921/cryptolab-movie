/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.themoviedb.org/3/',
    NEXT_PUBLIC_IMAGE_BASE_URL: 'http://image.tmdb.org/t/p/w342',
    NEXT_PUBLIC_ACCESS_TOKEN:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjMzM2ViZDA2MzE0NTZiODNhMTAzYjI0MDAwNmMxMCIsInN1YiI6IjY1ZjA4NTczMGUyOWEyMDE3YjM4Y2ExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iyM4L2Zu81mjX7F1cdikIeHMO2tobF2XXbDm23EvFPs',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
