module.exports = {
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
