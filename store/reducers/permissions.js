import { createSlice } from '@reduxjs/toolkit';

const permissions = createSlice({
  name: 'permissions',
  initialState: {},
  reducers: {
    setPermission(state, action) {
      return {
        ...state,
        ...action.payload
      };
    },
  }
});

export const { setPermission } = permissions.actions;

export default permissions.reducer;
