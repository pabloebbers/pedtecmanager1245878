import styled from "styled-components";
import { HeaderProps } from "../../../data/@types/Header/Header.type";

export const HeaderContainer = styled.header<Partial<HeaderProps>>`
  height: 15vh;
  padding-left: 15%;
  padding-right: 15%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 1600px) {
    padding-top: 0px;
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (max-width: 768px) {
    padding-top: 20px;
  }

  @media (max-width: 500px) {
    height: 11vh;
    padding: 0;
    padding-top: 10px;
  }

  @media (max-width: 375px) {
    padding-top: 5px;
  }

  ${({ scrolled, HeaderbgColorOnScroll }) =>
    scrolled &&
    `
    background-color: ${HeaderbgColorOnScroll};
    transition: background-color 0.5s ease;
  `}

  .navbar-nav {
    gap: 50px;

    @media (max-width: 1024px) {
      gap: 20px;
    }
  }

  .navbar-brand img {
    width: 200px;

    @media (max-width: 1600px) {
      width: 120px;
    }

    @media (max-width: 1100px) {
      width: 90px;
    }
  }

  a {
    position: relative;
    ${({ scrolled, HeaderLinksColorOnScroll }) =>
      scrolled &&
      `
    color: ${HeaderLinksColorOnScroll} !important;
  `}
    color: ${({ HeaderLinkColor }) => HeaderLinkColor} !important;
    font-size: 2rem;
    transition: 0.5s ease;

    @media (max-width: 1280px) {
      font-size: 1.5rem;
    }

    &:hover::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: rgba(0, 0, 0, 0.8);
      bottom: -2px;
      left: 0;
    }
  }

  .navbar-collpase.collapsing a {
    color: #000;
    font-size: 1rem;
  }

  .navbar-collapse.show {
    background: #fff;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .navbar-collapse.show a {
    color: #000;
    font-size: 1rem;
  }
`;
