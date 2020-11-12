import React, { useContext } from 'react';
import { FirebaseContext } from '../../../../lib/firebase';
import { Link, navigate } from 'gatsby';
import useGetUser from 'hooks/useGetUser';

import { OutsideAlerter } from 'hooks/useClickOutside';
import * as ROUTES from 'constants/routes';

import { DropDownMenu } from './style';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';

export const WithAuthMenu = ({
  props: { isMenuVisible, setIsMenuVisible },
  isMobile,
}) => {
  const { firebase } = useContext(FirebaseContext);
  const { userData, userLoad } = useGetUser();
  const displayName =
    (userData && `${userData?.firstName} ${userData?.lastName}`) || `...`;

  const handleLogout = () => {
    firebase.logout().then(() => {
      setIsMenuVisible(false);
      navigate(ROUTES.LOGIN);
    });
  };

  if (!isMenuVisible && !isMobile) return null;

  return (
    <DropDownMenu isMobile={isMobile}>
      <OutsideAlerter toggle={() => setIsMenuVisible(false)}>
        <h5>Settings</h5>
        <ul>
          <li>
            <p>Logged in as {displayName}</p>
          </li>
          <li>
            <Link to={ROUTES.PROFILE}>
              <AiOutlineUser /> Profile
            </Link>
          </li>
          <li>
            <a onClick={handleLogout}>
              <RiLogoutBoxLine /> Log Out
            </a>
          </li>
        </ul>
      </OutsideAlerter>
    </DropDownMenu>
  );
};
