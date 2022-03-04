import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reducer'
import sagas from './sagas'

const sagaMiddleWare = createSagaMiddleware()

const initStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(sagaMiddleWare))
    )
    sagaMiddleWare.run(sagas)

    return store
}

export const store = initStore()
