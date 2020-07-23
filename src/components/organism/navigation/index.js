import React, { useState, useContext } from "react"
import { FirebaseContext } from "lib/firebase"
import { SchoolContext } from "providers/school-provider"
import { Link, navigate } from "gatsby"
import useGetUser from "hooks/useGetUser"
import * as ROUTES from "constants/routes"
import * as ROLES from "constants/roles"
import {
  NavWrapper,
  Logo,
  NavLinksWrap,
  StyledLink,
  ProfileMenu,
  ProfilePreview,
  ProfileImg,
  ProfileName,
  DropDownMenu,
} from "./style"
import { SkeletonProfileNav } from "components/atoms/skeleton/profile-nav"
import ProfileImage from "assets/profile.png"
import { RiArrowDropDownLine, RiLogoutBoxLine } from "react-icons/ri"
import { AiOutlineUser } from "react-icons/ai"

import { BsArrowRightShort } from "react-icons/bs"
import { OutsideAlerter } from "hooks/useClickOutside"

export const Navigation = () => {
  const { currentUser, firebase } = useContext(FirebaseContext)
  const { school } = useContext(SchoolContext)
  const [toggleProfile, setToggleProfile] = useState(false)
  const url = typeof window !== "undefined" ? window.location.pathname : ""
  const { userData } = useGetUser()
  const user = userData && userData.getUser

  const schoolNameUI = currentUser && school ? school.name : "Pokerify"

  const checkIfLandingPage = component => {
    if (!url.includes("app")) {
      return component
    }
  }

  const pricingLink = (
    <li>
      <a href="#pricing">Pricing</a>
    </li>
  )

  const contactLink = (
    <li>
      <a href="#contact">Contatto</a>
    </li>
  )

  return (
    <NavWrapper>
      <Logo schoolName={schoolNameUI === "Pokerify" ? false : true}>
        <h1>
          <StyledLink logo="true" to={ROUTES.LANDING}>
            {schoolNameUI}
          </StyledLink>
        </h1>
      </Logo>
      <NavLinksWrap>
        {/* {checkIfLandingPage(pricingLink)} */}
        {/* {checkIfLandingPage(contactLink)} */}

        <li>
          <StyledLink to={ROUTES.HOME}>
            {(url.includes("app") && "Home") || "Accedi"}
            {currentUser && !url.includes("app") ? <BsArrowRightShort /> : null}
          </StyledLink>
        </li>

        {url.includes("app") ? (
          <ProfileMenu>
            {userData &&
            userData.getUser.firstName &&
            userData &&
            userData.getUser.lastName ? (
              <ProfilePreview onClick={() => setToggleProfile(true)}>
                <ProfileImg>
                  <img src={ProfileImage} alt="" />
                </ProfileImg>
                <ProfileName>
                  <h5>
                    {`${user && user.firstName} ${user && user.lastName}`}{" "}
                    <RiArrowDropDownLine />
                  </h5>
                  <p>{user && ROLES.convertRoleUI(user.role)}</p>
                </ProfileName>
              </ProfilePreview>
            ) : !currentUser ? null : (
              <SkeletonProfileNav />
            )}

            {toggleProfile ? (
              <DropDownMenu>
                <OutsideAlerter toggle={() => setToggleProfile(false)}>
                  <h5>Impostazioni</h5>
                  <ul>
                    <li>
                      <Link to={ROUTES.PROFILE}>
                        <AiOutlineUser /> Profilo
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          firebase.logout().then(() => {
                            setToggleProfile(false)
                            navigate(ROUTES.HOME)
                          })
                        }}
                      >
                        <RiLogoutBoxLine /> Esci
                      </a>
                    </li>
                  </ul>
                </OutsideAlerter>
              </DropDownMenu>
            ) : null}
          </ProfileMenu>
        ) : null}
      </NavLinksWrap>
    </NavWrapper>
  )
}
