import React, { useContext, useState } from "react"
import { SchoolContext } from "src/providers/school-provider"
import { gql, useQuery } from "@apollo/client"

import { SearchBar } from "../../../components/atoms/search-bar"
import { Layout } from "../../../components/organism/layout"
import { Filters } from "../../../components/organism/filters"
import { VideosList } from "../../../components/organism/videos-list"
import { Section } from "../../../components/atoms/section"

export const GET_SCHOOL_VIDEOS = gql`
  query($schoolId: ID!, $filterFor: String, $filterVal: String, $limit: Int) {
    getSchoolVideos(
      schoolId: $schoolId
      filterFor: $filterFor
      filterVal: $filterVal
      limit: $limit
    ) {
      id
      title
      wistiaId
      createdAt
      role
      description
      store
      madeByFullName
      schoolId
      type
      duration
    }
  }
`

const filterDefaultState = {
  filterFor: null,
  filterVal: null,
  limit: 20,
  toggle: false,
}

const VideosPage = () => {
  const { school } = useContext(SchoolContext)
  const [filterState, setFilterState] = useState(filterDefaultState)
  const [searchFilter, setSearchFilter] = useState({
    toggle: false,
    value: "",
  })

  const { error, loading, data } = useQuery(GET_SCHOOL_VIDEOS, {
    variables: {
      schoolId: school && school.id,
      filterFor: filterState.filterFor,
      filterVal: filterState.filterVal,
      limit: filterState.limit,
    },
    refetchQueries: [
      {
        query: GET_SCHOOL_VIDEOS,
        variables: {
          schoolId: school && school.id,
          filterFor: filterState && filterState.filterFor,
          filterVal: filterState && filterState.filterVal,
          limit: filterState && filterState.limit,
        },
      },
    ],
  })

  // render filtered by search or not
  const conditionalData = searchFilter.toggle
    ? data.getSchoolVideos.filter(item =>
        item.title.toLowerCase().includes(searchFilter.value)
      )
    : data && data.getSchoolVideos

  return (
    <Layout>
      <Section container="twoElEnd">
        <SearchBar search={{ searchFilter, setSearchFilter }} />
        <Filters
          filter={{
            setFilterState,
            filterState,
            filterDefaultState,
            setSearchFilter,
          }}
          data={data && data.getSchoolVideos}
        />
      </Section>
      <VideosList
        data={conditionalData}
        loading={loading}
        filterState={filterState}
      />
    </Layout>
  )
}

export default VideosPage
