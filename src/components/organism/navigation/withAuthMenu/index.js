import React, { useContext } from "react"
import { FirebaseContext } from "../../../../lib/firebase"
import { Link, navigate } from "gatsby"
import { OutsideAlerter } from "hooks/useClickOutside"
import * as ROUTES from "constants/routes"

import { DropDownMenu } from "./style"
import { RiLogoutBoxLine } from "react-icons/ri"
import { AiOutlineUser } from "react-icons/ai"

export const WithAuthMenu = ({
  props: { isMenuVisible, setIsMenuVisible },
}) => {
  const { firebase } = useContext(FirebaseContext)

  const handleLogout = () => {
    firebase.logout().then(() => {
      setIsMenuVisible(false)
      navigate(ROUTES.LOGIN)
    })
  }

  if (!isMenuVisible) return null

  return (
    <DropDownMenu>
      <OutsideAlerter toggle={() => setIsMenuVisible(false)}>
        <h5>Impostazioni</h5>
        <ul>
          <li>
            <Link to={ROUTES.PROFILE}>
              <AiOutlineUser /> Profilo
            </Link>
          </li>
          <li>
            <a onClick={handleLogout}>
              <RiLogoutBoxLine /> Esci
            </a>
          </li>
        </ul>
      </OutsideAlerter>
    </DropDownMenu>
  )
}
