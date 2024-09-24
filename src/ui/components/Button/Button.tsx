import { ButtonProps } from "../../../data/@types/Button/Button.type";
import { ButtonContainer } from "../../styles/Button/Button.style";

const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer
      ButtonBackground={props.ButtonBackground}
      ButtonTextColor={props.ButtonTextColor}
      className="d-flex justify-content-center mt-3"
<<<<<<< HEAD
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
=======
    >
      <a href={props.ButtonHref}>
        <button className=" d-flex align-items-center">
          {props.children}
          <span>{props.buttonTxt}</span>
>>>>>>> b3aa649c6754ecaeeaf62c41fc84a58551560920
        </button>
      </a>
    </ButtonContainer>
  );
};

export default Button;
