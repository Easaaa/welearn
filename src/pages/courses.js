import React, { useContext, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CourseContext } from "../providers/course-provider"
import { SchoolContext } from "../providers/school-provider"

import { Layout } from "components/organism/layout/"
import { Filters } from "components/organism/filters"
import { CoursesList } from "components/organism/courses-list"
import { SearchBar } from "components/atoms/search-bar"
import { Section } from "components/atoms/section"
import PrivateRoute from "components/atoms/privateRoute"

const filterDefaultState = {
  toggle: false,
  filterFor: null,
  filterVal: null,
  limit: 10,
}

const CoursesPage = () => {
  const [filterState, setFilterState] = useState(filterDefaultState)
  const { school } = useContext(SchoolContext)
  const { courseState, setCourseState } = useContext(CourseContext)
  const [searchFilter, setSearchFilter] = useState({
    toggle: false,
    value: "",
  })

  const data = useStaticQuery(graphql`
    {
      allCourse {
        edges {
          node {
            title
            coverLink
            createdAt
            description
            id
            lessons {
              description
              duration
              lesson
              notes
              title
              wistiaId
            }
            madeByFullName
            madeByID
            role
            schoolId
            store
            subtitle
            type
            updatedAt
          }
        }
      }
    }
  `)

  const loading = false

  useEffect(() => {
    if (data) {
      let array = []
      if (!courseState) {
        data.allCourse.edges.map(item => {
          array.push({
            courseId: item.node.id,
            currentLesson: 0,
            wistiaId: null,
          })
        })
        setCourseState(array)
      } else {
        data.allCourse.edges.map(item => {
          if (courseState.findIndex(x => x.courseId === item.node.id) !== -1)
            return
          else {
            setCourseState(state => [
              ...state,
              { courseId: item.node.id, currentLesson: 0, wistiaId: null },
            ])
          }
        })
      }
    }
  }, [data])

  const conditionalData = searchFilter.toggle
    ? data.allCourse.edges.filter(item =>
        item.node.title.toLowerCase().includes(searchFilter.value)
      )
    : data && data.allCourse.edges

  return (
    <PrivateRoute>
      <Layout>
        <Section container="twoElEnd">
          <SearchBar search={{ searchFilter, setSearchFilter }} />
          <Filters
            filter={{
              setFilterState,
              filterState,
              filterDefaultState,
            }}
            data={data && data.allCourse.edges}
          />
        </Section>

        <CoursesList
          filterState={filterState}
          query={{ conditionalData, loading }}
        />
      </Layout>
    </PrivateRoute>
  )
}

export default CoursesPage
