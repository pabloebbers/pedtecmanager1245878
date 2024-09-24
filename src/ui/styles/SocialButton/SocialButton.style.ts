import styled from "styled-components";

export const SocialButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; 
  gap: 4px; 

  a {
    flex: 1 0 calc(25% - 8px); 
    margin: 2px;
    max-width: 60px; 
  }

  img {
    max-width: 100%; 
  }
`;
