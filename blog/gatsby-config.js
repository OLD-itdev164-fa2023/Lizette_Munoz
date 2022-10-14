module.exports = {
  siteMetadata: {
    title: `Blogs Inc.`,
    description: `ITDEV-164 Gatsby Blog`,
    author: `Lizette Munoz`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name:`Lizette Munoz`,
      company:`Blogs Inc.`,
      address:`PO Box 1234`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
     {
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId:`y0x56jdc8q42`,
        accessToken:`GWntaaIQ8g2wgW9HKDseTmja9yFUXJ4RR6TFh-3ucOM`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
   
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
