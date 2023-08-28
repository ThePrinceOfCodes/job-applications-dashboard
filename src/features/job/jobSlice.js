import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { getUserFromLocalStorage } from '../../utils/localStorage';

const initialState = {
    isLoading: false,
    position: '',
    company: '',
    jobLocation: '',
    jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
    jobType: 'full-time',
    statusOptions: ['interview', 'declined', 'pending'],
    status: 'pending',
    isEditing: false,
    editJobId: '',
};

export const createJob = createAsyncThunk(
    'job/createJob', (job, thunkAPI) => {
        try {
            
        } catch (error) {
            
        }
    }
)

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value
        },
        clearValues: () => {
            return initialState
        }        
    },
    extraReducers: (builder) => {
        builder
            .addCase(createJob.pending, (state) => {
                
            })
            .addCase(createJob.fulfilled, (state) => {
                    
            })
            .addCase(createJob.rejected, (state) => {
                
            })
            .addDefaultCase((state) => {
                
            })
    }
});

export const { handleChange, clearValues } = jobSlice.actions

export default jobSlice.reducer;