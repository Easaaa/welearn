module.exports = {
  siteMetadata: {
    title: `Pokerify`,
    author: {
      name: `Leonardo Tononi`,
      summary: `A human.`,
    },
    description: `A personal project that perhaps will worth a croissant in the near future. `,
    siteUrl: `https://pokerify.app`,
    social: {
      twitter: `pokerify`,
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-resolve-src",
    {
      resolve: "gatsby-source-firestore",
      options: {
        credential: require("./src/lib/service-account.json"),
        types: [
          {
            type: "Video",
            collection: "videos",
            map: doc => ({
              type: doc.type,
              id: doc.id,
              title: doc.title,
              wistiaId: doc.wistiaId,
              role: doc.role,
              store: doc.store,
              description: doc.description,
              createdAt: doc.createdAt,
              schoolId: doc.schoolId,
              madeByID: doc.madeByID,
              madeByFullName: doc.madeByFullName,
              duration: doc.duration,
            }),
          },
          {
            type: "Course",
            collection: "courses",
            map: doc => ({
              schoolId: doc.schoolId,
              madeByID: doc.madeByID,
              madeByFullName: doc.madeByFullName,
              title: doc.title,
              subtitle: doc.subtitle,
              description: doc.description,
              role: doc.role,
              type: doc.type,
              coverLink: doc.coverLink,
              createdAt: doc.createdAt,
              lessons: doc.lessons,
              store: doc.store,
              id: doc.id,
            }),
          },
        ],
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pokerify - Poker School`,
        short_name: `pokerify`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    /*  {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Product", "Plan", "Subscription"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: false,
      },
    }, */

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
