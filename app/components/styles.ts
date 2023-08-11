import { styled } from 'styled-components';
export const StyledWrapper = styled.form`
  height: 500px;
  width: 500px;
  border: 2px solid red;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: black;
`;

export const StyledInput = styled.input`
  width: 450px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  &:enabled {
    opacity: 1;
  }
  opacity: 1;
`;

