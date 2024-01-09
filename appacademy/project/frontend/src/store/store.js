import {createStore, combineReducers, applyMiddleware, compose} from "redux"
import {thunk} from 'redux-thunk'
import sessionReducer from "./session";
import { spotReducer } from "./spots";
import { spotinfoReducer } from "./spotinfo";
import reviewsReducer from "./reviews";
const rootReducer = combineReducers({
session: sessionReducer,
spots: spotReducer,
spotinfo: spotinfoReducer,
reviews:reviewsReducer
})

let enhancer;
if (import.meta.env.MODE === 'production') {
    enhancer = applyMiddleware(thunk)
} else {
    const logger = (await import('redux-logger')).default;
    const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger))
}

const configureStore = (preloadedState => {
    return createStore(rootReducer, preloadedState, enhancer)
})
export default configureStore
