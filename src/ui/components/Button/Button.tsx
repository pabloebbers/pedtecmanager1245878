import { ButtonProps } from "../../../data/@types/Button/Button.type";
import { ButtonContainer } from "../../styles/Button/Button.style";

const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer
      ButtonBackground={props.ButtonBackground}
      ButtonTextColor={props.ButtonTextColor}
      className="d-flex justify-content-center mt-3"
    >
      <a href={props.ButtonHref}>
        <button className=" d-flex align-items-center">
          {props.children}
          <span>{props.buttonTxt}</span>
        </button>
      </a>
    </ButtonContainer>
  );
};

export default Button;
