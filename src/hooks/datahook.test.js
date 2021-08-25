import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import { dataFetchReducer, useDataApi } from './datahook';
import MockAdapter from "axios-mock-adapter";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
};

describe('hooks/datahook.js', () => {
  describe('dataFetchReducer()', () => {
    it('processes action FETCH_INIT correctly', () => {
      const newState = {
        data: [],
        isLoading: true,
        isError: false,
      };
      expect(dataFetchReducer(initState, { type: 'FETCH_INIT' })).toEqual(
        newState,
      );
    });

    it('processes action FETCH_FAILURE correctly', () => {
      const newState = {
        data: [],
        isLoading: false,
        isError: true,
      };
      expect(dataFetchReducer(initState, { type: 'FETCH_FAILURE' })).toEqual(
        newState,
      );
    });

    it('processes action FETCH_SUCCESS correctly', () => {
      const newState = {
        data: [1, 2, 3],
        isLoading: false,
        isError: false,
      };
      expect(
        dataFetchReducer(initState, {
          type: 'FETCH_SUCCESS',
          payload: [1, 2, 3],
        }),
      ).toEqual(newState);
    });
  });

  describe('useDataApi()', () => {
    let mock;
    beforeAll(() => {
      mock = new MockAdapter(axios);      
    })
    
    afterAll(() => {
      mock.restore();      
    })
    
    it('hook initialize correctly', () => {
      const { result } = renderHook(
        () => useDataApi('', [])
      );
  
      expect(result.current[0]).toEqual({
        data:[],
        isLoading: false,
        isError: false
      });

      expect(result.current[1]).toBeTruthy();
    });

    it('hook fetch data correctly', async () => {
      const { result, waitForNextUpdate } = renderHook(
        () => useDataApi('', [])
      );

      const mockData1 =  [1, 2, 3];
      const mockData2 =  [2, 3, 4];
      const url1 = "http://url1.com";
      const url2 = "http://url2.com";
      mock.onGet(url1).reply(200, mockData1);      
      mock.onGet(url2).reply(200, mockData2);      


      // test action 1
      act(() => {
        result.current[1](url1);
      });

      // testing loading status
      expect(result.current[0]).toEqual({
        data: [],
        isLoading: true,
        isError: false
      });
  
      await waitForNextUpdate();      

      expect(result.current[0]).toEqual({
        data: mockData1,
        isLoading: false,
        isError: false
      });
  
      // test action 2
      act(() => {
        result.current[1](url2);
      });

      await waitForNextUpdate();      

      expect(result.current[0]).toEqual({
        data: mockData2,
        isLoading: false,
        isError: false
      });
  
    });

    it('hook handle errors correctly', async () => {
      const { result, waitForNextUpdate } = renderHook(
        () => useDataApi('', [])
      );

      const mock = new MockAdapter(axios);      

      const url = "http://test.url1.com";
      mock.onGet(url).networkError();

      act(() => {
        result.current[1](url);
      });

      await waitForNextUpdate();      

      expect(result.current[0]).toEqual({
        data: [],
        isLoading: false,
        isError: true
      });
 
  
    });

        
  });
});
