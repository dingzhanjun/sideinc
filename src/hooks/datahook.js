import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

export const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, isError: false };
    case 'FETCH_SUCCESS':
      localStorage.setItem('property-list', JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export const useDataApi = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  useEffect(() => {
    let canceled = false;
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(url, {
          headers: {
            Authorization: 'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz', // this token can be replace
          },
        });

        if (!canceled) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        console.log(error);
        if (!canceled) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };
    if (url) {
      fetchData();
    }
    return () => {
      canceled = true;
    };
  }, [url]);

  return [state, setUrl];
};
