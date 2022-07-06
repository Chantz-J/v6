require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `v6`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-vanilla-extract", /*"gatsby-plugin-support-chat",*/ /*{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": ""
    }
  }*/ "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-transformer-remark", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: "gatsby-source-strapi",
    options: {
      apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
      accessToken: process.env.STRAPI_TOKEN,
      collectionTypes: [
        {
          singularName: "article",
          queryParams: {
            publicationState:
              process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
            populate: {
              cover: "*",
              blocks: {
                populate: "*",
              },
            },
          },
        },
        {
          singularName: "author",
        },
        {
          singularName: "category",
        },
      ],
      singleTypes: [
        {
          singularName: "about",
          queryParams: {
            populate: {
              blocks: {
                populate: "*",
              },
            },
          },
        },
        {
          singularName: "global",
          queryParams: {
            populate: {
              favicon: "*",
              defaultSeo: {
                populate: "*",
              },
            },
          },
        },
      ],
    },
  },
]

};