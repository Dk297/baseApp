// src/store/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  name: string;
  avatar: string;
  token: string;
}

const initialState: AuthState = {
  name: '',
  avatar: '',
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<AuthState>) => {
      return { ...state, ...action.payload };
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: () => initialState,
  },
});

export const { setProfile, updateName, updateAvatar, setToken, logout } =
  authSlice.actions;
export default authSlice.reducer;
