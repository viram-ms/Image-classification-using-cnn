import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// import { reducer as formReducer } from "redux-form";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth"],
    stateReconciler: autoMergeLevel2
  };

  const rootReducer = combineReducers({
    // auth: authReducer,
    // form: formReducer,
  });

  export default persistReducer(persistConfig, rootReducer);
