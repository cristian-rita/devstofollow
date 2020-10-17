module.exports = {
  siteMetadata: {
    title: 'devstofollow',
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
  ],
};
