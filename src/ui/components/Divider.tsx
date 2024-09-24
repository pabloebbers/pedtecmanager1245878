import styled from "styled-components";

const Divider = styled.div<{ color?: string }>`
  position: absolute; /* Permite sobreposição */
  width: 50%; /* 50% da largura da tela */
  height: 4px; /* Espessura da linha */
  background-color: ${({ color }) => color || 'black'}; /* Cor da linha customizável */
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta para centralizar perfeitamente */
  z-index: 10; /* Garante que fique acima dos outros elementos */
  pointer-events: none; /* Não interfere em eventos de clique */
`;

export default Divider;