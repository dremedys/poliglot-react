import { all, call } from "redux-saga/effects";

import gameSaga from "./game/game.saga";
import dictionarySaga from "./dictionary/dictionary.saga";
export default function* rootSaga() {
  yield all([call(gameSaga),call(dictionarySaga)]);
}
