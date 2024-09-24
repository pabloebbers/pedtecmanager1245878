import styled from "styled-components";
import { FooterProps } from "../../../data/@types/Footer/Footer.type";

export const FooterContainer = styled.footer<Partial<FooterProps>>`
  padding-top: 50px;
  background: ${(props) => props.FooterBackground};

  p,
  h3 {
    color: ${(props) => props.FooterTextColors};
  }

  hr {
    margin-top: 15px;
  }
`;
