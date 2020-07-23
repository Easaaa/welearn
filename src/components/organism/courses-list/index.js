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
  return (
    <VideosContainer>
      <SearchPlaceholder
        data={data}
        loading={loading}
        Component={
          data &&
          data.map(item => (
            <CardLink
              key={item.id}
              to={`/app/courses/${item.title.replace(/ /g, "-").toLowerCase()}`}
              spanCard={findCardPosition(data, item)}
              thirdSize={thirdSizeCard(data, item)}
            >
              <MediaCard
                data={item}
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
