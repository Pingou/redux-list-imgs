import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { orientation } from './orientation';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    orientation,

});
