import React, { useContext, useState } from "react"
import { SchoolContext } from "../../providers/school-provider"
import { useStaticQuery, graphql } from "gatsby"

import { SearchBar } from "../../components/atoms/search-bar"
import { Layout } from "../../components/organism/layout"
import { Filters } from "../../components/organism/filters"
import { VideosList } from "../../components/organism/videos-list"
import { Section } from "../../components/atoms/section"

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
  const loading = false
  const data = useStaticQuery(graphql`
    {
      allVideo {
        edges {
          node {
            id
            title
            createdAt
            description
            duration
            madeByFullName
            madeByID
            role
            type
            store
            schoolId
            wistiaId
          }
        }
      }
    }
  `)

  const filterDataWithToggle =
    filterState.toggle &&
    data.allVideo.edges.filter(item =>
      item.node[filterState.filterFor].includes(filterState.filterVal)
    )

  // render filtered by search or not
  const conditionalData =
    (searchFilter.toggle &&
      data.allVideo.edges.filter(item =>
        item.node.title.toLowerCase().includes(searchFilter.value)
      )) ||
    (filterState.toggle && filterDataWithToggle) ||
    data?.allVideo.edges

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
          data={data && data.allVideo.edges}
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
