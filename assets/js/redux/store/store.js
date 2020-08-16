import { createStore, applyMiddleware } from 'redux';
/*import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';*/
import reducers from '../reducers';
import { initialStates } from '../reducers'

// const loggerMiddleware = createLogger();

export default function configureStore(props, context) {
    // This is how we get initial props from Symfony into redux.
    const { user } = props;
    const { base, location } = context;
    const { authenticationState } = initialStates;

    // Redux expects to initialize the store using an Object
    const initialState = {
        authenticationState : { authenticationState, }
    };

    // use devtools if we are in a browser and the extension is enabled
    /*let composeEnhancers =
        (typeof window !== "undefined" &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
        compose;
*/
    const store = createStore(
        reducers,
        initialState,
    );
    return store;
}

// composeEnhancers(applyMiddleware(thunkMiddleware))

// applyMiddleware(
//     thunkMiddleware,
//     loggerMiddleware
// )