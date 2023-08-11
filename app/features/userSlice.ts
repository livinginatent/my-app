"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import sampleUsers from "../sampleUsers";

interface User {
  id: number;
  name: string | undefined;
  email: string | undefined;
  location: string | undefined;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: sampleUsers,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    editUser: (state, action: PayloadAction<User>) => {
      const editedUser = action.payload
      const index = state.users.findIndex((item) => item.id === action.payload.id);
      if(index!==-1){
        state.users[index] = editedUser
      }
    },
  },
});

export const { addUser, deleteUser,editUser } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;

export default usersSlice.reducer;
