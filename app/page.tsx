"use client";
import { useDispatch, useSelector } from "react-redux";
import sampleUsers from "./sampleUsers";
import {
  StyledItemBar,
  StyledItemBarColumn,
  StyledUser,
  StyledItemTitle,
  StyledWrapper,
  StyledDeleteButton,
  StyledAddButton,
  StyledModalWrapper,
  StyledEditButton,
} from "./styles";
import { deleteUser, selectUsers } from "./features/userSlice";
import { useAppDispatch } from "./hooks";
import { useState } from "react";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

type Props = {};

const Home = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editStates, setEditStates] = useState<{ [userId: number]: boolean }>(
    {}
  );
  const users = useSelector(selectUsers);
  const dispatch = useAppDispatch();
  const handleAddModal = () => {
    setIsOpen(true);
  };
  const handleEditModal = (userId: number) => {
    setEditStates((prevState) => ({
      ...prevState,
      [userId]: true,
    }));
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleEditCloseModal = (userId:number) => {
    setEditStates((prevState)=>({
      ...prevState,
      [userId]:false
    }))
  };
  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUser(userId));
  };

  return (
    <>
      <StyledWrapper>
        <StyledItemBar>
          <StyledItemBarColumn>Name</StyledItemBarColumn>
          <StyledItemBarColumn>ID</StyledItemBarColumn>
          <StyledItemBarColumn>Email</StyledItemBarColumn>
          <StyledItemBarColumn>Location</StyledItemBarColumn>
        </StyledItemBar>
        {users.map((user) => (
          <StyledUser key={user.id}>
            <StyledItemTitle>{user.name}</StyledItemTitle>
            <StyledItemTitle>{user.id}</StyledItemTitle>
            <StyledItemTitle>{user.email}</StyledItemTitle>
            <StyledItemTitle>{user.location}</StyledItemTitle>
            <StyledDeleteButton onClick={() => handleDeleteUser(user.id)}>
              X
            </StyledDeleteButton>
            <StyledEditButton onClick={()=>handleEditModal(user.id)}>Edit</StyledEditButton>
            {editStates[user.id] ? (
              <StyledModalWrapper>
                <EditUser
                  key={user.id}
                  id={user.id}
                  onCloseModal={()=>handleEditCloseModal(user.id)}
                ></EditUser>
              </StyledModalWrapper>
            ) : null}
          </StyledUser>
        ))}

        <StyledAddButton onClick={handleAddModal}>Add New User</StyledAddButton>
        {isOpen ? (
          <StyledModalWrapper>
            <AddUser onCloseModal={handleCloseModal} />
          </StyledModalWrapper>
        ) : null}
      </StyledWrapper>
    </>
  );
};

export default Home;
