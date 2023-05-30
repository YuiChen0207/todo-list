<<<<<<< HEAD
import { useAuth } from 'contexts/AuthContext';
=======
>>>>>>> 8700042235de5fd5803b7250e53ad1b7232cf8c0
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 0 16px;
  p {
    font-size: 14px;
    font-weight: 300;
    margin: 2rem 0 1rem;
  }
`;

const StyledButton = styled.button`
  padding: 0;
  border: 0;
  background: none;
  vertical-align: baseline;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: pointer;
  outline: 0;

  font-size: 14px;
  font-weight: 300;
  margin: 2rem 0 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = ({ todos }) => {
<<<<<<< HEAD
  const { logout } = useAuth;
  const todosLength = todos.length;

  const handleClick = () => {
    logout();
  };

  return (
    <StyledFooter>
      <p>剩餘項目數： {todosLength}</p>
      <StyledButton onClick={handleClick}>登出</StyledButton>
=======
  const todosLength = todos.length;

  return (
    <StyledFooter>
      <p>剩餘項目數： {todosLength}</p>
      <StyledButton>登出</StyledButton>
>>>>>>> 8700042235de5fd5803b7250e53ad1b7232cf8c0
    </StyledFooter>
  );
};

export default Footer;
