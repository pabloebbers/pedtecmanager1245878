import styled from "styled-components";
import { ButtonProps } from "../../../data/@types/Button/Button.type";

export const ButtonContainer = styled.div<Partial<ButtonProps>>`
  a {
    text-decoration: none;
  }
  button {
    background-color: ${(props) => props.ButtonBackground};
    color: ${(props) => props.ButtonTextColor};
  }
`;
