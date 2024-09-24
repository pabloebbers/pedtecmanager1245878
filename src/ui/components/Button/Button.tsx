import { ButtonProps } from "../../../data/@types/Button/Button.type";
import { ButtonContainer } from "../../styles/Button/Button.style";

const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer
      ButtonBackground={props.ButtonBackground}
      ButtonTextColor={props.ButtonTextColor}
      className="d-flex justify-content-center mt-3"
      style={{ borderRadius: ".25rem" }} // Ajuste do border-radius
    >
      <a href={props.ButtonHref}>
        <button 
          className="d-flex align-items-center"
          style={{
            height: "4rem", // Altura aumentada
            fontSize: "1.25rem", // Tamanho da fonte aumentado
            borderRadius: ".25rem" // Ajuste do border-radius no botão
          }}
          onClick={props.onClick} // Adicionando onClick no botão
        >
          {props.children}
          <span><b>{props.buttonTxt}</b></span>
        </button>
      </a>
    </ButtonContainer>
  );
};

export default Button;
