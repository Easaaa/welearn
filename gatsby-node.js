const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const videoComponent = path.resolve(`./src/templates/video.js`)
  const resultVideo = await graphql(
    `
      {
        allVideo {
          edges {
            node {
              madeByFullName
              madeByID
              role
              schoolId
              store
              title
              wistiaId
              type
              description
              id
              createdAt
              duration
            }
          }
        }
      }
    `
  )

  if (resultVideo.errors) {
    throw resultVideo.errors
  }

  // Create blog posts pages.
  const videos = resultVideo.data.allVideo.edges

  videos.forEach((video, index) => {
    const pathURL = video && video.node.title.replace(/ /g, "-").toLowerCase()
    createPage({
      path: `app/videos/${pathURL}`,
      component: videoComponent,
      context: {
        video: video,
        id: video.node.id,
      },
    })
  })

  // COURSE CREATION

  const courseComponent = path.resolve(`./src/templates/course.js`)
  const resultCourse = await graphql(
    `
      {
        allCourse {
          edges {
            node {
              schoolId
              madeByID
              madeByFullName
              title
              subtitle
              description
              role
              type
              coverLink
              createdAt
              id
              lessons {
                title
                wistiaId
                description
                notes
                lesson
                duration
              }
              store
            }
          }
        }
      }
    `
  )

  if (resultCourse.errors) {
    throw resultCourse.errors
  }

  // Create blog posts pages.
  const courses = resultCourse.data.allCourse.edges

  courses.forEach((course, index) => {
    const pathURL = course && course.node.title.replace(/ /g, "-").toLowerCase()
    createPage({
      path: `app/courses/${pathURL}`,
      component: courseComponent,
      context: {
        course: course,
        id: course.node.id,
      },
    })
  })
}
