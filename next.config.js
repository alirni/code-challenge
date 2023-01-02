const path = require('path');

module.exports = {
  pageExtensions: ['jsx', 'js'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  redirects: async function () {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/movie',
        destination: '/home',
        permanent: true,
      },
    ];
  },

  webpack: (config, options) => {
    config.resolve = {
      extensions: ['.json', '.js', ...config.resolve.extensions],
      ...config.resolve,
    };

    return config;
  },
};
