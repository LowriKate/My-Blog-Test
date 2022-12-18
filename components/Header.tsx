import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.4rem;
  text-align: center;
  padding: 16px;
  box-shadow: 0px 11px 20px -10px ${({ theme }) => theme.colors.accent};
  cursor: default;
`;

export default Header;
