import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getProductsReducer } from '../reducers/productReducer';
i

const middleware = [thunk]

const rootReducer = combineReducers({
    getProducts : getProductsReducer,

})
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;