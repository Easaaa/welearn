import React from "react"
import * as ROUTES from "constants/routes"
import { WithAuthNav } from "./withAuthNav"
import useGetUser from "hooks/useGetUser"
import { CgMenuRight } from "react-icons/cg"
import {
  NavWrapper,
  Logo,
  NavLinksWrap,
  NavLinksWrapMobile,
  StyledLink,
  LiStyledLogin,
  MobileButton,
  StyledPopup,
} from "./style"

const NavLinksComponent = () => (
  <NavLinksWrapMobile>
    <li>
      <a href="#pricing">Pricing</a>
    </li>
    <li>
      <a href="#contact">Contact</a>
    </li>
    <LiStyledLogin>
      <StyledLink to={ROUTES.LOGIN}>Login</StyledLink>
    </LiStyledLogin>
  </NavLinksWrapMobile>
)

const isWindow = typeof window !== "undefined" ? window.location.pathname : null

const WrapperRouter = ({ children }) => {
  const isWindow =
    typeof window !== "undefined" ? window.location.pathname : null
  if (isWindow === ROUTES.LANDING) {
    return children
  } else return <WithAuthNav />
}

export const Navigation = () => {
  const { userData } = useGetUser()
  const logo = (isWindow === ROUTES.LANDING && "WeLearn") || userData.schoolName
  return (
    <WrapperRouter>
      <NavWrapper>
        <Logo>
          <h1>
            <StyledLink logo="true" to={ROUTES.LANDING}>
              {logo}
            </StyledLink>
          </h1>
        </Logo>
        <StyledPopup
          trigger={
            <MobileButton>
              <CgMenuRight />
            </MobileButton>
          }
          modal
        >
          <NavLinksComponent />
        </StyledPopup>

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
