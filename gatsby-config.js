const firebaseService = {
  type: "service_account",
  project_id: "pokerify-8dd70",
  private_key_id: "3b8eb0edd5b4f5f82eaca1fc4f62f9a7a5fc527f",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCXtnbchsPnrtei\nQ7jnG3dlefgLPRQ0rrlLWwMX+T+8/2ww0PR38goM0KOVf6fM/nzGJOKeKSiSXM0d\n5x02B6oz79e69slc6lvIWBf3vpjZtvp0scSDL+C3CLT3VYphAjaeoorpt8IWmfSe\n2VGWqRXk2iLd+gd1FjRtr9k9w7TXy8rzKvAkfRDg9UT0idByYLC11EVJpJP+rQ5t\ngkn/EJN8gdd6+Nr5JWhHdRssF145ZsTHysKaterdBlQPmHGneBy7majo5W+mFFJL\nC5jR7EmqEHjq7dDrbqjJ3ykKOEASCYoAZHyH0V7zfLHTkYNE7Uu8vK4RqCRNPKEH\npKWOybRBAgMBAAECggEAB/U56OQSH0isO5u3yuTwRLIQJm7EF5CusYWK9P/4WEPs\nUJHgBkamQPkqC4Els9AJis82f+YCyyKeXm+CuGnQg2bqTFP+SKcWZ2ePjPRCH5wZ\n08iGA/zymZyVpCpS1uHUgZ+0ZQFkPJFDeULxpP3Q4y86CFDBgWJydOp2HRJInc/D\nDzdSJKAngeetjPWINvNWQLLpA4MlVgBf66r/LCF8St1qbXtpl6rcf3s2uFXL4pt3\nXJ/2BNDB9dumTUf2e+5a7qSNIcJaVBEg3f4t5wQ/1hHXDKvflJIzf6WQ3kJ9Q/oB\nx5i/m0Ih0ZU/imiC4/7aiYDrDRRqURXdhKEirKMDTQKBgQDU7eqR7WeYlJ9NWRHs\naKKfuQiHjAa+Mw9/i6EckSW+UWBk29sh95xCMDNGmPRZlxG8ID5LzpE4BG4pwe5N\nPAejQL/HILaZ7PGHc6quWAE8UeQY6evKOKaAZIz1igEiNvytSsQpppyvFOkp5rd2\noKROkud9sI+JwFEPVyGbEK+7JwKBgQC2ZpQ+P0DZxhqU1rCfkKOwbFalwUdJ21/0\nAhsmsVy2zwJfURv0Zs4FOXW+w5pAZxphF5nFWqtH7+HzxbbFFREwZqimW3i5/Upw\njQe1sBh25J8SyoCUgQ2CF76KS5BXVgDXU9vPN8Il0y1zDL7YjNJR6FDQ6PevBFrn\nttFie35WVwKBgQC3h3ov3Zj1guTsHmG8i1Pgp/QaIS+OsSQio49yuAj4Sdv0EyyF\n0o703ebUavHyZqv6ozAO1zWEOw1ZILbuC1fp9t1WHXRGqFxmi+QJ8gDepRceAkIi\nQ0IAWKrG2PSxMQQJue/qlplmr3dpjluD/GKi9yxgwdZ2vTUhK9DjfzZ48QKBgBSd\nbV3Hql2ynSh7R0URhN6YsAZV3OfFCog6gLUT0KW8qcj6Es3BnMFMaDliRBnJTVrx\n3uhGQhuESiZSD0EhC2tL/v2mUvO6Y+JqnhdzyqANYMkv5+5g05UDd/6LYcntJ3Uu\nviYiaCf8QSPCqgMxj0fAmPmziuLV/Cw6JloaGQJLAoGADQibS6WfywB/1GNOtSnV\nJ1gjxMCWDa2FqPArhsKL4XEcNUFdBEldrS7Bq/oarW5UYDXjalXmUWnuyy7HVqRc\nT4YmeUrIfAgWcIvcpNHTXQOAPAhurp6GQig8u6VCxX8Yimh0WbaPL1E5wrlZjZit\nczqZVx9ElTGhV6a8NTzlMyE=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-u98mk@pokerify-8dd70.iam.gserviceaccount.com",
  client_id: "106624237689376074369",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-u98mk%40pokerify-8dd70.iam.gserviceaccount.com",
}

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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-firestore-easy`,
      options: {
        adminCredential: {
          credential: firebaseService, //See details for this option
          databaseURL: "https://pokerify-8dd70.firebaseio.com",
        },
        collections: [
          {
            collection: "courses",
            type: "Course",
          },
          {
            collection: "videos",
            type: "Video",
          },
          {
            collection: "users",
            type: "User",
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

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
