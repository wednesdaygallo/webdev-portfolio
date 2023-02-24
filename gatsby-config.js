module.exports = {
  siteMetadata: {
    siteUrl: "http://www.wednesdaygallo.com",
    title: "Wednesday Gallo",
    description: 'Web Development Portfolio'
  },
  plugins: [
    "gatsby-plugin-sass",
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
      icon: 'src/images/icon.png',
      },
    },
  ],
};
