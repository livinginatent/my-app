import React, { useState } from "react";
import {
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledWrapper,
} from "./styles";
import { useAppDispatch } from "../hooks";
import { addUser, editUser, selectUsers } from "../features/userSlice";
import { useSelector } from "react-redux";

type Props = { onCloseModal: () => void; id: number };

const EditUser = ({ onCloseModal, id }: Props) => {
  const dispatch = useAppDispatch();

  const users = useSelector(selectUsers);
  const user = users.find((user) => user.id === id);

  console.log(user);

  const [formData, setFormData] = useState({
    email: user?.email,
    name: user?.name,
    location: user?.location,
    id: id,
  });

  console.log(formData.email);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editUser(formData));
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

export default EditUser;
