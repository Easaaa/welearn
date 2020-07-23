import React from "react"
import Carousel, { consts } from "react-elastic-carousel"
//https://sag1v.github.io/react-elastic-carousel/easing
import { DirButton, CarouselPaginationWrapper, Circle } from "./style"

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"

const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? <MdNavigateBefore /> : <MdNavigateNext />
  return (
    <DirButton onClick={onClick} disabled={isEdge}>
      {pointer}
    </DirButton>
  )
}

const paginationUI = ({ pages, activePage, onClick }) => {
  return (
    <CarouselPaginationWrapper>
      {pages.map(page => {
        const isActivePage = activePage === page
        return (
          <Circle
            key={page}
            onClick={() => onClick(page)}
            active={isActivePage}
            isActivePage={isActivePage}
          />
        )
      })}
    </CarouselPaginationWrapper>
  )
}

export const CarouselWrapper = ({ filterState, children }) => {
  let item = filterState ? 1 : 3

  return (
    <Carousel
      itemToShow={item}
      renderArrow={myArrow}
      renderPagination={paginationUI}
    >
      {children}
    </Carousel>
  )
}
