import React, { useContext, useEffect, useState } from "react"
import { FirebaseContext } from "lib/firebase"
import { CourseContext } from "providers/course-provider"
import { SchoolContext } from "providers/school-provider"

import { Layout } from "components/organism/layout/"
import { Filters } from "components/organism/filters"
import { CoursesList } from "components/organism/courses-list"
import { SearchBar } from "components/atoms/search-bar"
import { Section } from "components/atoms/section"

import { gql, useQuery } from "@apollo/client"

export const GET_COURSES = gql`
  query($schoolId: ID!, $filterFor: String, $filterVal: String, $limit: Int) {
    getCourses(
      schoolId: $schoolId
      filterFor: $filterFor
      filterVal: $filterVal
      limit: $limit
    ) {
      id
      title
      subtitle
      description
      role
      type
      createdAt
      madeByID
      madeByFullName
      schoolId
      coverLink
      lessons {
        title
        wistiaId
        description
        notes
        lesson
        duration
      }
    }
  }
`

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

  const { error, loading, data } = useQuery(GET_COURSES, {
    variables: {
      schoolId: school && school.id,
      filterFor: filterState.filterFor,
      filterVal: filterState.filterVal,
      limit: filterState.limit,
    },
    refetchQueries: [
      {
        query: GET_COURSES,
        variables: {
          schoolId: school && school.id,
          filterFor: filterState && filterState.filterFor,
          filterVal: filterState && filterState.filterVal,
          limit: filterState && filterState.limit,
        },
      },
    ],
  })

  useEffect(() => {
    if (data && data.getCourses) {
      let array = []
      if (!courseState) {
        data.getCourses.map(item => {
          array.push({ courseId: item.id, currentLesson: 0, wistiaId: null })
        })
        setCourseState(array)
      } else {
        data.getCourses.map(item => {
          if (courseState.findIndex(x => x.courseId === item.id) !== -1) return
          else {
            setCourseState(state => [
              ...state,
              { courseId: item.id, currentLesson: 0, wistiaId: null },
            ])
          }
        })
      }
    }
  }, [data])

  const conditionalData = searchFilter.toggle
    ? data.getCourses.filter(item =>
        item.title.toLowerCase().includes(searchFilter.value)
      )
    : data && data.getCourses

  return (
    <Layout>
      <Section container="twoElEnd">
        <SearchBar search={{ searchFilter, setSearchFilter }} />
        <Filters
          filter={{
            setFilterState,
            filterState,
            filterDefaultState,
          }}
          data={data && data.getSchoolVideos}
        />
      </Section>

      <CoursesList
        filterState={filterState}
        query={{ conditionalData, loading }}
      />
    </Layout>
  )
}

export default CoursesPage
