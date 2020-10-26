import React, { useState, useContext } from "react"
import { FirebaseContext } from "../../../lib/firebase"
import * as ROUTES from "constants/routes"

import { NavWrapper, StyledLink, NavItem } from "./style"
import { MdSchool } from "react-icons/md"
import { BsCollectionPlayFill, BsGrid1X2 } from "react-icons/bs"
import VideosImg from "assets/laptop.jpeg"
import CoursesImg from "assets/book.jpeg"

export const SchoolNav = () => {
  const { currentUser } = useContext(FirebaseContext)
  const [toggleSoon, setToggleSoon] = useState(false)

  const url = typeof window !== "undefined" ? window.location.pathname : ""
  const checkIfLandingPage = () => {
    if (!url.includes("app")) {
      return true
    } else return false
  }

  if (currentUser && checkIfLandingPage() === true) return null

  if (currentUser && checkIfLandingPage() === false)
    return (
      <NavWrapper>
        <StyledLink to={ROUTES.COURSES}>
          <NavItem active={url.includes("courses") ? true : false}>
            <p>
              <MdSchool /> Corsi
            </p>
          </NavItem>
        </StyledLink>
        <StyledLink to={ROUTES.VIDEOS}>
          <NavItem active={url.includes("videos") ? true : false}>
            <p>
              <BsCollectionPlayFill /> Video
            </p>
          </NavItem>
        </StyledLink>
        <StyledLink>
          <NavItem
            active={url.includes("charts") ? true : false}
            onClick={() => {
              setToggleSoon(true)
              setTimeout(() => {
                setToggleSoon(false)
              }, 3000)
            }}
          >
            {!toggleSoon ? (
              <p>
                <BsGrid1X2 /> Quiz
              </p>
            ) : (
              <p style={{ color: "#b43828" }}>Prossimamente</p>
            )}
          </NavItem>
        </StyledLink>
      </NavWrapper>
    )
  else return null
}
