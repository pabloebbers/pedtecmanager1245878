import styled from "styled-components";
import { FirstSectionProps } from "../../../data/@types/FirstSection/FirstSection.type";

export const FirstSectionContainer = styled.section<FirstSectionProps>`
  background: ${(props) => props.FirstSectionBackground};
  padding-top: 20vh;
  padding-left: 150px;
  padding-right: 150px;
  padding-bottom: 50px;

  @media (max-width: 1024px) {
    padding-top: 19vh;
    padding-left: 0;
    padding-right: 0;
  }

  @media (max-width: 1100px) {
    padding-top: 19vh;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 500px) {
    padding-top: 14vh;
    padding-left: 20px;
    padding-right: 20px;
  }

  h1 {
    font-weight: 700;
    line-height: 70px;
    font-size: 50px;
    color: ${(props) => props.FirstSectionTitleColor};

    @media (max-width: 1024px) {
      font-size: 40px;
      line-height: 50px;
    }
  }

  p {
    color: ${(props) => props.FirstSectionTextColor};
    font-weight: 400;
    font-size: 20px;
  }
  
  button {
    padding: 10px 30px;
    border: none;
  }

`;

/*
  button {
    width: 250px;
    height: 50px;
    background: #25d366;
    color: #fff;
    border: none;
    padding: 10px 50px;

    svg {
      margin-right: 10px;
    }
  }
  */