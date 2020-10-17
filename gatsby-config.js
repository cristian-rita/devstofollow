module.exports = {
  siteMetadata: {
    title: 'Devs To Follow',
    siteUrl: 'https://devstofollow.com',
    description: 'A list of the best developers to learn programming from.',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-113720588-2`,
      },
    },
  ],
};
