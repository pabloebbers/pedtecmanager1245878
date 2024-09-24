import styled from "styled-components";
import { SecondSectionProps } from "../../../data/@types/SecondSection/SecondSection.type";

export const SecondSectionContainer = styled.section<Partial<SecondSectionProps>>`
  background: ${(props) => props.SecondSectionBackground};
  padding-top: 50px;
  padding-bottom: 50px;

  h2 {
    margin: 10px 0;
    font-size: 30px;
    font-weight: bold;
    color: ${(props) => props.SecondSectionTitleColor};
  }

  p {
    color: ${(props)=> props.SecondSectionTextColor};
    font-size: 24px;
    margin: 10px 0;
  }

  button {
    padding: 10px 30px;
    border: none;
  }
`;