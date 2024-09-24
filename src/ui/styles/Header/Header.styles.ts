import styled from "styled-components";
import { HeaderProps } from "../../../data/@types/Header/Header.type";

export const HeaderContainer = styled.header<Partial<HeaderProps>>`
<<<<<<< HEAD
  height: 12vh; /* Diminuiu ainda mais a altura da barra */
  padding-left: 15%;
  padding-right: 15%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease, height 0.3s ease;

  @media (max-width: 1600px) {
=======
  height: 15vh;
  padding-left: 15%;
  padding-right: 15%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 1600px) {
    padding-top: 0px;
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (max-width: 768px) {
<<<<<<< HEAD
    padding-top: 10px; /* Reduzida a margem superior */
  }

  @media (max-width: 500px) {
    height: 9vh; /* Reduzi ainda mais para telas menores */
    padding: 0;
    padding-top: 5px;
  }

  @media (max-width: 375px) {
    padding-top: 3px;
=======
    padding-top: 20px;
  }

  @media (max-width: 500px) {
    height: 11vh;
    padding: 0;
    padding-top: 10px;
  }

  @media (max-width: 375px) {
    padding-top: 5px;
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
  }

  ${({ scrolled, HeaderbgColorOnScroll }) =>
    scrolled &&
    `
    background-color: ${HeaderbgColorOnScroll};
<<<<<<< HEAD
    height: 8vh; /* Diminuiu a altura da barra ao rolar */
=======
    transition: background-color 0.5s ease;
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
  `}

  .navbar-nav {
    gap: 50px;

    @media (max-width: 1024px) {
      gap: 20px;
    }
  }

  .navbar-brand img {
<<<<<<< HEAD
    width: ${({ scrolled }) => (scrolled ? '80px' : '150px')}; /* Diminuído mais o logo */
    margin-top: ${({ scrolled }) => (scrolled ? '0px' : '-5px')}; /* Ajuste mínimo para centralizar melhor */

    @media (max-width: 1600px) {
      width: ${({ scrolled }) => (scrolled ? '70px' : '100px')}; /* Ajustes para telas menores */
      margin-top: ${({ scrolled }) => (scrolled ? '0px' : '-5px')};
    }

    @media (max-width: 1100px) {
      width: ${({ scrolled }) => (scrolled ? '60px' : '80px')};
      margin-top: ${({ scrolled }) => (scrolled ? '0px' : '-3px')};
=======
    width: 200px;

    @media (max-width: 1600px) {
      width: 120px;
    }

    @media (max-width: 1100px) {
      width: 90px;
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
    }
  }

  a {
    position: relative;
    ${({ scrolled, HeaderLinksColorOnScroll }) =>
      scrolled &&
      `
<<<<<<< HEAD
      color: ${HeaderLinksColorOnScroll} !important;
      font-size: 1.2rem; /* Reduzi o tamanho da fonte */
    `}
    color: ${({ HeaderLinkColor }) => HeaderLinkColor} !important;
    font-size: ${({ scrolled }) => (scrolled ? '1.2rem' : '1.8rem')}; /* Diminuído ainda mais o tamanho da fonte */
    transition: 0.5s ease;

    @media (max-width: 1280px) {
      font-size: ${({ scrolled }) => (scrolled ? '0.9rem' : '1.3rem')}; /* Ajuste para telas menores */
    }
  }
`;




=======
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
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
