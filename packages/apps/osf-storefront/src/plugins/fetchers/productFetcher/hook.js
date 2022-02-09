import {useEffect} from 'react';
import {isEmptyObject} from '@oracle-cx-commerce/utils/generic';
import {getProductName} from '../../selectors';
import {getProductNameFetcher} from '..';
 
export const useGetProduct = (store, val) => {
  useEffect(() => {
    // if (isEmptyObject(getProductName(store.getState()))) {
        getProductNameFetcher(store, val);
    // }
  }, [store]);
};