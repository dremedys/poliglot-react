import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";

import gameReducer from './game/game.slice'
import statsReducer from './stats/stats.slice'
import dictionaryReducer from './dictionary/dictionary.slice'
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    game:gameReducer,
    stats:statsReducer,
    dict: dictionaryReducer
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
