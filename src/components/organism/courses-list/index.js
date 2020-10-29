import React from "react"
import { findCardPosition, thirdSizeCard } from "utils/functions"
import { MediaCard } from "components/atoms/media-card"
import { SearchPlaceholder } from "components/atoms/search-placeholder"
import { CardLink } from "components/atoms/card-link"
import { VideosContainer } from "components/organism/videos-list/style"

export const CoursesList = ({
  filterState,
  query: { conditionalData: data, loading },
}) => {
  console.log("courseList", data)
  return (
    <VideosContainer>
      <SearchPlaceholder
        data={data}
        loading={loading}
        Component={
          data &&
          data.map(item => (
            <CardLink
              key={item.node.id}
              to={`/courses/${item.node.title
                .replace(/ /g, "-")
                .toLowerCase()}`}
              spanCard={findCardPosition(data, item)}
              thirdSize={thirdSizeCard(data, item)}
            >
              <MediaCard
                data={item.node}
                thirdSize={thirdSizeCard(data, item)}
                isCourse
              />
            </CardLink>
          ))
        }
      />
    </VideosContainer>
  )
}
