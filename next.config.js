module.exports = {
  distDir: 'build',
  publicRuntimeConfig: {
    // add your public runtime environment variables here with NEXT_PUBLIC_*** prefix
  },
  webpack: (config) => {
    // extend your webpack configuration here
    return config;
  },
  images: {
    imageSizes: [16, 32, 48],
    domains: ['keaneauctioneers.com', 'photos-a.propertyimages.ie', 'b.dmlimg.com', 'www.kehoeproperty.com'],
  },
};
