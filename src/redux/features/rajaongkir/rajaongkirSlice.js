import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApiProvince, fetchApiCities } from '../../actions/rajaongkirAction';
// Define the async thunk to fetch data from the API
export const fetchListProvince = createAsyncThunk('api/fetchListProvince', async () => {
  return fetchApiProvince();
});
export const fetchListCities = createAsyncThunk('api/fetchListCities', async (id) => {
  return fetchApiCities(id);
});

// Create the slice
const apiSlice = createSlice({
  name: 'api',
  initialState: {
    provinces: null,
    cities: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProvince.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchListProvince.fulfilled, (state, action) => {
        state.isLoading = false;
        state.provinces = action.payload;
      })
      .addCase(fetchListProvince.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchListCities.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchListCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = action.payload;
      })
      .addCase(fetchListCities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  },
});

export default apiSlice.reducer;
