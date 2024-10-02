/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom next js bảo mật các đường dẫn bên ngoài
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // dùng logging nếu log mà build không in ra
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
