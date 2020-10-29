import React, { useContext } from "react"
import { FirebaseContext } from "../../../lib/firebase"
import * as ROUTES from "constants/routes"
import { WithAuthNav } from "./withAuthNav"

import {
  NavWrapper,
  Logo,
  NavLinksWrap,
  StyledLink,
  LiStyledLogin,
} from "./style"

const WrapperRouter = ({ children }) => {
  if (window?.location.pathname === ROUTES.LANDING) {
    return children
  } else return <WithAuthNav />
}

export const Navigation = () => {
  const { currentUser } = useContext(FirebaseContext)

  return (
    <WrapperRouter>
      <NavWrapper>
        <Logo>
          <h1>
            <StyledLink logo="true" to={ROUTES.LANDING}>
              WeLearn
            </StyledLink>
          </h1>
        </Logo>
        <NavLinksWrap>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <LiStyledLogin>
            <StyledLink to={ROUTES.LOGIN}>Login</StyledLink>
          </LiStyledLogin>
        </NavLinksWrap>
      </NavWrapper>
    </WrapperRouter>
  )
}
