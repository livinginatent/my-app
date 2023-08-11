import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledItemBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Divide into 4 equal columns */
  background-color: lightgray;
  border: 2px solid black;
  border-radius: 5px;
`;

export const StyledItemBarColumn = styled.div`
  padding: 10px;
  text-align: center;
`;

export const StyledUser = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto; /* Divide into 4 equal columns */
  border: 2px solid black;
  margin: 5px 0;
  align-items: center;
`;

export const StyledModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledDeleteButton = styled.button``;

export const StyledEditButton = styled.button`
width: max-content;
`

export const StyledAddButton = styled.button`
  width: max-content;
`;

export const StyledItemTitle = styled.div`
  padding: 10px;
  text-align: center;
`;
