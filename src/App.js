import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { MuiThemeProvider as CoreMuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import reducer from "./reducers";
import { muiTheme } from "./theme";
import Routes from "./Routes";
import './App.css';

export const store = createStore(reducer, applyMiddleware(thunk));
const persistor = persistStore(store);


function App() {
  return (
   <Provider store={store}>
     <PersistGate persistor={persistor}>
       <CoreMuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={muiTheme}>
          <BrowserRouter>
            <Routes  />
          </BrowserRouter>
        </ThemeProvider>
       </CoreMuiThemeProvider>
     </PersistGate>
   </Provider>
  );
}

export default App;
