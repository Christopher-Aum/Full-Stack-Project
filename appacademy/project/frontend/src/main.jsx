import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';
// import * as sessionActions from './store/session';
// import { Modal, ModalProvider } from './context/Modal';
import { BrowserRouter } from 'react-router-dom';
const store = configureStore();

// if (import.meta.env.MODE !== 'production') {
//   restoreCSRF();

//   //runs the restoreCSRF function, and adds these values into keys within the window

//   window.csrfFetch = csrfFetch;
//   window.store = store;
//   window.sessionActions = sessionActions;
// }

//renders the components of the react apps in their specific orders
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <Provider store={store}>
            <App />
          <Modal />
        </Provider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>
);