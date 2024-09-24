import styled from "styled-components";
import { ThirdSectionProps } from "../../../data/@types/ThirdSection/ThirdSection.type";

export const ThirdSectionContainer = styled.section<Partial<ThirdSectionProps>>`
  background: ${(props) => props.ThirdSectionBackground};
  padding-top: 50px;
  padding-bottom: 50px;
  
  h2 {
    color: ${(props) => props.ThirdSectionTitleColor};
    font-size: 30px;
    font-weight: bold;
  }

  p {
    color: ${(props) => props.ThirdSectionTextColor};
    font-size: 24px;
  }

  button {
    padding: 10px 30px;
    border: none;
    margin-bottom: 30px;
  }
`;
