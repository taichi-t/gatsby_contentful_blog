const dotenv = require("dotenv")

if (process.env.NODE_ENV !== "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `バンハンター`,
    author: `盆地デベロッパー`,
    description: `バンクーバーのウェブ系カレッジで一から ウェブを学ぶ人。
    現地の生活や、テック系や、 趣味を発信しようと思います`,
    siteUrl: `https://canajapa.com`,
    social: {
      twitter: `EndTaichi`,
      instagram: `nabagibasan`,
      github: `taichi-t`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans JP`,
            variants: [`400`, `700`],
          },
          {
            family: `Source Code Pro`,
            variants: [`400`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_TRAKING_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: false,
              noInlineHighlight: false,
              throwInlineCodeLanguageWarning: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],

              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },

              scapeEntities: {},
            },
          },

          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              withWebp: true,
              loading: "eager",
              backgroundColor: "#dadada",
            },
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `バンハンター`,
        short_name: `バンハンター`,
        start_url: `/`,
        background_color: `#fef9e4`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-theme-material-ui`,
    `@contentful/gatsby-transformer-contentful-richtext`,
  ],
}
