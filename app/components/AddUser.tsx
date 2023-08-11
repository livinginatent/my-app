import React, { useState } from "react";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from "./styles";
import { useAppDispatch } from "../hooks";
import { addUser, selectUsers } from "../features/userSlice";
import { useSelector } from "react-redux";

type Props = { onCloseModal: () => void };

const AddUser = ({onCloseModal}: Props) => {
  
  const dispatch = useAppDispatch();

  const users = useSelector(selectUsers)
  const existingIds = users.map((user)=>user.id)
  const newId = existingIds.length > 0 ? Math.min(...existingIds) - 1 : 1


  const [formData, setFormData] = useState({
    email: '',
    name: '',
    location: '',
    id: newId
  });


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addUser(formData))
    onCloseModal();
  };
  
  return (
    <>
      
      <StyledWrapper onSubmit={onSubmit}>
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          onChange={handleInputChange}
          name="email"
          value={formData.email}
          type="email"
        ></StyledInput>
        <StyledLabel>Name</StyledLabel>
        <StyledInput
          onChange={handleInputChange}
          name="name"
          value={formData.name}
          type="text"
        ></StyledInput>
        <StyledLabel>Location</StyledLabel>
        <StyledInput
          onChange={handleInputChange}
          name="location"
          value={formData.location}
          type="text"
        ></StyledInput>
        <StyledButton>Submit</StyledButton>
      </StyledWrapper>
    </>
  );
};

export default AddUser;
