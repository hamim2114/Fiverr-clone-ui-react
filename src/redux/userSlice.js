import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    loading: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.error = true;
    },
    logout: (state) => {
      state.user = null
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout} = userSlice.actions;
export default userSlice.reducer;
