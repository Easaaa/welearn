import React from "react"
// import { SkeletonCard } from "components/atoms/skeleton/card"
import styled from "styled-components"
import NotFoundImg from "assets/not-found.svg"
import { PageLoader } from "components/atoms/page-loader"

export const Img = styled.img`
  width: 300px;
  position: absolute;
  left: 50%;
  margin-left: -150px;
`

export const SearchPlaceholder = ({ loading, data, Component }) => {
  const itemNumb = data && data.length

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (data && itemNumb === 0) || data === undefined ? (
        <Img src={NotFoundImg} alt="person searching on the floor" />
      ) : (
        Component
      )}
    </>
  )
}
