import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localStorage';
import { registerUserThunk, loginUserThunk, updateUserThunk, clearStoreThunk } from './userThunk';


const initialState = {
    isLoading: false,
    isSideBarOpen: false,
    user: getUserFromLocalStorage()
}

export const registerUser = createAsyncThunk(
    'user/registerUser',(user, thunkAPI) => {
        return registerUserThunk('/auth/register', user, thunkAPI)
    }
);

export const loginUser = createAsyncThunk(
    'user/loginUser', (user, thunkAPI) => {
        return loginUserThunk('/auth/login', user, thunkAPI)
    }
);

export const updateUser = createAsyncThunk(
  'user/updateUser',
    (user, thunkAPI) => {
       return updateUserThunk('/auth/updateUser', user, thunkAPI)
  }
);

export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSideBarOpen = !state.isSideBarOpen
        },
        logoutUser: (state, { payload }) => {
            state.user = null
            state.isSideBarOpen = false
            removeUserFromLocalStorage()
            if (payload) {
                toast.success(payload)
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user } = payload
                state.loading = false
                state.user = user
                addUserToLocalStorage(user)
                toast.success(`Hello dear ${user.name}`)
            })
            .addCase(registerUser.rejected, (state , { payload }) => {
                state.loading = false
                toast.error(payload)
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { user } = payload
                state.loading = false
                state.user = user
                addUserToLocalStorage(user)
                toast.success(`Welcome back ${user.name}`)
            })
            .addCase(loginUser.rejected, (state , { payload }) => {
                state.loading = false
                toast.error(payload)
            })
            .addCase(updateUser.pending, (state) => {
                state.loading = true
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                const { user } = payload
                state.loading = false
                state.user = user
                addUserToLocalStorage(user)
                toast.success('user updated')
            })
            .addCase(updateUser.rejected, (state , { payload }) => {
                state.loading = false
                toast.error(payload)
            })
            .addCase(clearStore.rejected, () => {
                toast.error('there was an error')
            })
    }
})

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;