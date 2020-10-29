import React, { useState, useContext } from "react"
import { FirebaseContext } from "../../../lib/firebase"
import * as ROUTES from "constants/routes"

import { NavWrapper, StyledLink, NavItem } from "./style"
import { MdSchool } from "react-icons/md"
import { BsCollectionPlayFill, BsGrid1X2 } from "react-icons/bs"

export const SchoolNav = () => {
  const { currentUser } = useContext(FirebaseContext)

  const url = typeof window !== "undefined" ? window.location.pathname : ""

  if (currentUser && (window?.location.pathname === "/") === true) return null
  if (currentUser && (window?.location.pathname === "/") === false)
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
      </NavWrapper>
    )
  else return null
}
