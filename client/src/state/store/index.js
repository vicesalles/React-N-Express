import {
    applyMiddleware,
    createStore,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers'

//Dev Tools
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,   
    composeEnhacers(
        applyMiddleware(thunk)
    )
)

export default store;