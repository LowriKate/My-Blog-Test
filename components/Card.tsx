import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 32px 32px;
  margin: 32px auto;
  max-width: 800px;
  box-shadow: 0px 11px 20px -10px ${({ theme }) => theme.colors.accent};
`;

export default Card;
