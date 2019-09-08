module.exports = {
  pathPrefix: "/f2e-cloud-storage",
  siteMetadata: {
    title: `Cloud Storage`,
    description: `藍白色系搭配的扁平風格設計；並且有整合搜尋和排序功能。 | Designed by Letitia73`,
    author: `@EasonChiang7178`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cloud-storage`,
        short_name: `cloud-storage`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#4CB5F5`,
        display: `minimal-ui`,
        icon: `src/images/cloud-storage-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
