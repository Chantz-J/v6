require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `v6`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve:"gatsby-plugin-vanilla-extract",
      options: {
        identifiers: `short`,
        // topLevelAwait: true
      },
    }, /*"gatsby-plugin-support-chat",*/ /*{
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
          singularName: "resume",
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

  {
    resolve: 'gatsby-plugin-local-search',
    options: {
      // A unique name for the search index. This should be descriptive of
      // what the index contains. This is required.
      name: 'articles',

      // Set the search engine to create the index. This is required.
      // The following engines are supported: flexsearch, lunr
      engine: 'lunr',

      // Provide options to the engine. This is optional and only recommended
      // for advanced users.
      //
      // Note: Only the flexsearch engine supports options.
      engineOptions: 'speed',

      // GraphQL query used to fetch all data for the search index. This is
      // required.
      query: `
        allStrapiArticle {
          nodes {
            id
            slug
            title
            description
          }
        }
      `,

      // Field used as the reference value for each document.
      // Default: 'id'.
      ref: 'id',

      // List of keys to index. The values of the keys are taken from the
      // normalizer function below.
      // Default: all fields
      index: ['slug','title', 'description',],

      // List of keys to store and make available in your UI. The values of
      // the keys are taken from the normalizer function below.
      // Default: all fields
      store: ['id', 'slug', 'title'],

      // Function used to map the result from the GraphQL query. This should
      // return an array of items to index in the form of flat objects
      // containing properties to index. The objects must contain the `ref`
      // field above (default: 'id'). This is required.
      normalizer: ({ data }) =>
        data.allStrapiArticle.nodes.map((node) => ({
          slug: node.slug,
          title: node.title,
          description: node.description,
        })),
    },
  },


]

};