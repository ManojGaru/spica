import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/SPICA-Logo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { MyContext } from "App.js";
import { productsCards } from "components/features/VerticalWithAlternateImageAndText.js";
import {Link} from 'react-router-dom';

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-900 hocus:text-primary-900
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const DivDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 8.7rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
const DivDropdownContents = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 15rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DivDropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DivDropdownContent} {
    display: block;
  }
`;

const DivDropdowns = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DivDropdownContents} {
    display: block;
  }
`;

const SpanDropdownTitle = styled.div`
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const ItemDropdown = styled.p`
  padding: 0.3rem;

  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */

  const { selectedProduct, setSelectedProduct } = useContext(MyContext);

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/#">
      <DivDropdown>
      <SpanDropdownTitle>Company</SpanDropdownTitle>
      <DivDropdownContent>
        <ItemDropdown>
        <NavLink href="/about">About Us</NavLink>
          </ItemDropdown>
        <ItemDropdown> <NavLink href="/about">Leadership</NavLink>
          </ItemDropdown>
      </DivDropdownContent>
    </DivDropdown>
      </NavLink>
      <NavLink href="/#">
      <DivDropdown>
      <SpanDropdownTitle>Offerings</SpanDropdownTitle>
      <DivDropdownContent>
        <ItemDropdown>Services</ItemDropdown>
        {/* <ItemDropdown>Leadership</ItemDropdown> */}
        <ItemDropdown>
        <DivDropdowns>
      <SpanDropdownTitle>
        Products</SpanDropdownTitle>
      <DivDropdownContents>
        <ItemDropdown><Link to="/product/1" onClick={()=>setSelectedProduct(productsCards[0])}>SMC 5G Packet core</Link></ItemDropdown>
        <ItemDropdown><Link to="/product/2" onClick={()=>setSelectedProduct(productsCards[1])}>Ubiorca</Link></ItemDropdown>
        <ItemDropdown><Link to="/product/3" onClick={()=>setSelectedProduct(productsCards[2])}>Cygnus</Link></ItemDropdown>
      </DivDropdownContents>
    </DivDropdowns>
        </ItemDropdown>
      </DivDropdownContent>
    </DivDropdown>

      </NavLink>
      <NavLink href="/about">Customers</NavLink>
      <NavLink href="/#">Partners</NavLink>
      <NavLink href="/#">Resources</NavLink>
      <NavLink href="/news">News & Events</NavLink>
      <NavLink href="/career">Careers</NavLink>
      <NavLink href="/contact">Contact</NavLink>
      
      {/* <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink> */}
      {/* <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="/#">Sign Up</PrimaryLink> */}
    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img style={{width:'8.5rem'}} src={logo} alt="logo" />
      {/* Treact */}
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
