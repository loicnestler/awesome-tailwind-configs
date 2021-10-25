/** @type {import('next').NextConfig} */
module.exports = {
   reactStrictMode: true,
   async rewrites() {
      return [
         {
            source: "/config",
            destination: "/viewer/index.html",
         },
      ]
   },
}
