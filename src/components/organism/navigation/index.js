import React, { useState } from 'react';
import { Link } from 'gatsby';
import * as ROUTES from 'constants/routes';
import { WithAuthNav } from './withAuthNav';
import useGetUser from 'hooks/useGetUser';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { BsArrowUpRight } from 'react-icons/bs';
import { WithAuthMenu } from './withAuthMenu';
import {
  NavWrapper,
  Logo,
  NavLinksWrap,
  NavLinksWrapMobile,
  StyledLink,
  LiStyledLogin,
  MobileButton,
  StyledPopup,
  SimpleLi,
  CtaContainer,
} from './style';

const NavLinksComponent = () => (
  <NavLinksWrapMobile>
    <li>
      <a href='#pricing'>Pricing</a>
    </li>
    <li>
      <a href='#contact'>Contact</a>
    </li>
    <LiStyledLogin>
      <StyledLink to={ROUTES.LOGIN}>Login</StyledLink>
    </LiStyledLogin>
  </NavLinksWrapMobile>
);

const isWindow =
  typeof window !== 'undefined' ? window.location.pathname : null;

const WrapperRouter = ({ children }) => {
  const isWindow =
    typeof window !== 'undefined' ? window.location.pathname : null;
  if (isWindow === ROUTES.LANDING) {
    return children;
  } else return <WithAuthNav />;
};

export const Navigation = () => {
  const { userData } = useGetUser();
  const logo =
    (isWindow === ROUTES.LANDING && 'WeLearn') || userData?.schoolName || 'WEL';
  return (
    <WrapperRouter>
      <NavWrapper>
        <Logo>
          <h1>
            <StyledLink logo='true' to={ROUTES.LANDING}>
              {logo}
            </StyledLink>
          </h1>
        </Logo>

        {/*    <StyledPopup
          trigger={
            <MobileButton>
              <CgMenuRight />
            </MobileButton>
          }
          modal>
          <NavLinksComponent />
        </StyledPopup> */}
      </NavWrapper>
    </WrapperRouter>
  );
};

export const MobileNavWithAuth = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const MenuBtnIcon = (navIsVisible && <CgClose />) || <CgMenuRight />;
  const URL_ADMIN = 'https://loving-easley-893aaa.netlify.app/login';

  return (
    <>
      <MobileButton onClick={() => setNavIsVisible(!navIsVisible)}>
        {MenuBtnIcon}
      </MobileButton>

      {navIsVisible && (
        <NavLinksWrapMobile>
          <SimpleLi>
            <Link to={ROUTES.HOME}>Home</Link>
          </SimpleLi>
          {/* <LiStyledLogin className='secondary'>
            <StyledLink to={ROUTES.REGISTER}>Settings</StyledLink>
          </LiStyledLogin> */}
          <SimpleLi>
            <Link to={URL_ADMIN}>
              Lunch Admin App <BsArrowUpRight />
            </Link>
          </SimpleLi>
          <WithAuthMenu
            props={{ isMenuVisible, setIsMenuVisible }}
            isMobile={true}
          />

          <CtaContainer></CtaContainer>
        </NavLinksWrapMobile>
      )}
    </>
  );
};
