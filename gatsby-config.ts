import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  // pathPrefix: `/Gatsby-Tutorials-All-In-One`,
  pathPrefix: `/`,
  siteMetadata: {
    title: `gatsby-react-app`,
    siteUrl: `https://gatsby-react-app.xgqfrms.xyz`,
    // siteMetadata
    description: `Come and enjoy an experience of a lifetime! Watch whales with us!`,
    author: `@xgqfrms`,
    keywords: `Gatsby, React, SSR, TypeScript, SEO`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    // mdx
    "gatsby-plugin-mdx",
    // 1. load local markdown file
    {
      resolve: `gatsby-source-filesystem`,
      // options: {
      //   name: `blog`,
      //   path: `${__dirname}/src/blog`,
      // },
      options: {
        name: `blog`,
        path: `./src/blog`,
      },
      __key: "blog"
    },
    // 2. convert markdown file to HTML & frontmatter
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
  ]
};

export default config;
