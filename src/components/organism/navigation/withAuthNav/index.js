import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../../../lib/firebase';

import useGetUser from 'hooks/useGetUser';
import * as ROUTES from 'constants/routes';
import * as ROLES from 'constants/roles';

import { WithAuthMenu } from '../withAuthMenu';
import { MobileNavWithAuth } from '../index';
import {
  NavWrapper,
  Logo,
  NavLinksWrap,
  StyledLink,
  StyledLinkGoTo,
  ProfileMenu,
  ProfilePreview,
  ProfileImg,
} from '../style';
import { RiArrowDropDownLine } from 'react-icons/ri';

export const WithAuthNav = () => {
  const { currentUser } = useContext(FirebaseContext);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const { userData, userLoad } = useGetUser();
  const userIsAdmin =
    userData?.role === ROLES.LEVEL_4 ||
    (userData?.role === ROLES.LEVEL_5 && true) ||
    false;
  const URL_ADMIN = 'https://loving-easley-893aaa.netlify.app/login';

  return (
    <NavWrapper>
      <Logo>
        <h1>
          <StyledLink logo='true' to={ROUTES.LANDING}>
            WeLearn
          </StyledLink>
        </h1>
      </Logo>

      <MobileNavWithAuth />
      <NavLinksWrap>
        <li>
          <StyledLink to={(!currentUser && ROUTES.LANDING) || ROUTES.HOME}>
            Home
          </StyledLink>
        </li>

        {currentUser ? (
          <ProfileMenu>
            <ProfilePreview onClick={() => setIsMenuVisible(true)}>
              <ProfileImg>
                <RiArrowDropDownLine /> Settings
              </ProfileImg>
            </ProfilePreview>

            <WithAuthMenu props={{ setIsMenuVisible, isMenuVisible }} />
          </ProfileMenu>
        ) : null}

        {userIsAdmin && (
          <li>
            <StyledLinkGoTo target='_blank' to={URL_ADMIN}>
              Admin App
            </StyledLinkGoTo>
          </li>
        )}
      </NavLinksWrap>
    </NavWrapper>
  );
};

/* {user?.firstName && user?.lastName ? (
  <ProfilePreview onClick={() => setIsMenuVisible(true)}>
    <ProfileImg>
      <img src={ProfileImage} alt="" />
    </ProfileImg>
    <ProfileName>
      <h5>
        {`${user?.firstName} ${user?.lastName}`}{" "}
        <RiArrowDropDownLine />
      </h5>
      <p>{user && ROLES.convertRoleUI(user.role)}</p>
    </ProfileName>
  </ProfilePreview>
) : !currentUser ? null : (
  <SkeletonProfileNav />
)} */
