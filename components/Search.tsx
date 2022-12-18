import styled from "styled-components";

const Search = styled.input`
  background-color: white;
  border-radius: 16px;
  padding: 16px 16px;
  font-size: 1.4rem;
  margin: 32px auto;
  display: block;
  max-width: 800px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  box-shadow: 0px 11px 20px -10px ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  cursor: text;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

export default Search;
