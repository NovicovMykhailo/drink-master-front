import { createAsyncThunk } from '@reduxjs/toolkit';
import { filteredQuery } from '../../utils/utils'
import axios from 'axios';
import setAuthHeader from 'helpers/axiosHedder';


axios.defaults.baseURL = 'https://drink-master-back-end.onrender.com/';

export const fetchDrinks = createAsyncThunk( 'drinks/fetchDrinks', async ({ category, ingredient, q, page}, { getState, rejectWithValue }) => {

    const query = {
      ingrdient: ingredient ? ingredient : null,
      category: category ? category : null,
      q: q ? q : null,
      page: page > 1 ? page : 1,
    };

    const normanizedQuery = filteredQuery(query)
    const params = new URLSearchParams(normanizedQuery);

    try {
      const state = getState();
      const persistedToken = state.auth.token;
      setAuthHeader(persistedToken);

      const response = await axios.get(`api/search?${params}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }



);

export const fetchCategories = createAsyncThunk('drinks/fetchCategories', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('api/recipes/category-list');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchIngredients = createAsyncThunk('drinks/fetchIngredients', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const persistedToken = state.auth.token;
  try {
    setAuthHeader(persistedToken);
    const response = await axios.get('api/ingredients/list');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
