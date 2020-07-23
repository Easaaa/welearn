import React from "react"
import { MediaCard } from "components/atoms/media-card"
import { VideosContainer } from "./style"
import { CardLink } from "components/atoms/card-link"
import { SearchPlaceholder } from "components/atoms/search-placeholder"
import { findCardPosition, thirdSizeCard } from "utils/functions"

export const VideosList = ({ data, loading, filter }) => {
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
              to={`/app/videos/${item.title.replace(/ /g, "-").toLowerCase()}`}
              spanCard={findCardPosition(data, item)}
              thirdSize={thirdSizeCard(data, item)}
            >
              <MediaCard data={item} thirdSize={thirdSizeCard(data, item)} />
            </CardLink>
          ))
        }
      />
    </VideosContainer>
  )
}
