import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchToDoLogin = createAsyncThunk(
  "todo/fetchToDoLogin",
  async (user) => {
    console.log(user);
    const res = await axios.post("http://localhost:8000/v1/auth/login", user);
    return res.data;
  }
);
export const fetchToDoRegister = createAsyncThunk(
  "todo/fetchToDoRegister",
  async (user) => {
    const res = await axios.post(
      "http://localhost:8000/v1/auth/register",
      user
    );
    return res.data;
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      isFetching: false,
      currentUser: null,
      error: false,
      success: false,
    },
  },
  // reducer: {
  //   loginStart: (state) => {
  //     state.login.isFetching = true;
  //   },
  //   loginSuccess: (state, action) => {
  //     state.login.isFetching = false;
  //     state.login.currentUser = action.payload;
  //     state.login.error = false;
  //   },
  //   loginFailed: (state) => {
  //     state.login.isFetching = false;
  //     state.login.error = true;
  //   },
  //},
  extraReducers: {
    [fetchToDoLogin.pending]: (state) => {
      state.login.isFetching = true;
    },
    [fetchToDoLogin.fulfilled]: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      console.log(action.payload);
      state.login.error = false;
    },
    [fetchToDoLogin.rejected]: (state) => {
      state.login.isFetching = false;
      state.login.error = true;
    },

    [fetchToDoRegister.pending]: (state) => {
      state.register.isFetching = true;
    },
    [fetchToDoRegister.fulfilled]: (state, action) => {
      state.register.isFetching = false;
      state.register.currentUser = action.payload;
      console.log(action.payload);
      state.register.error = false;
      state.register.success = true;
    },
    [fetchToDoRegister.rejected]: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
  },
});
//export const { loginStart, loginFailed, loginSuccess } = authSlice.actions;
export const selecAuthLogin = (state) => state.auth.login.currentUser;
export const selecAuthRegister = (state) => state.auth.register.success;
export default authSlice.reducer;
