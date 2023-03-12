import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/reset.css'
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='792789015648-nsnptboa912bvuvujfsugeci6pj45k72.apps.googleusercontent.com'>
      <React.StrictMode>
          <BrowserRouter>
              <Provider store={store}>
                  <App />
              </Provider>
          </BrowserRouter>
      </React.StrictMode>,
  </GoogleOAuthProvider>
)
