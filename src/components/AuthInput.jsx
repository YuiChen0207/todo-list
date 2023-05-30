import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f8fa;
  width: 100%;
  height: 54px;
  border-bottom: 2px solid black;
`;
const StyledLabel = styled.label`
  font-size: 14;
  color: '#696974';
  text-align: start;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: #f5f8fa;
  border-radius: 0px;
`;

<<<<<<< HEAD
const AuthInput = ({ label, placeholder, value, type, onChange }) => {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type || 'text'}
        placeholder={placeholder || ''} // 如果外層沒有帶入 props 就預設給一個空字串
        value={value || ''} // 如果外層沒有帶入 props 就預設給一個空字串
        onChange={(e) => onChange?.(e.target.value)}
      />
=======
const AuthInput = () => {
  return (
    <StyledContainer>
      <StyledLabel>label</StyledLabel>
      <StyledInput type="text" placeholder="placeholder" />
>>>>>>> 8700042235de5fd5803b7250e53ad1b7232cf8c0
    </StyledContainer>
  );
};

export default AuthInput;
