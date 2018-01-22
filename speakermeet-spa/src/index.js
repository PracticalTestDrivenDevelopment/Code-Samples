import React from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter} from 'react-router-dom';
 import {Provider} from 'react-redux';
 import registerServiceWorker from './registerServiceWorker';
 import configureStore from './store/configureStore';
 import { loadSpeakers } from './actions/speakerActions';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './index.css';
 import App from './components/App.js';
 
 const store = configureStore();
 store.dispatch(loadSpeakers());
 
 ReactDOM.render(
   <Provider store={store}>
     <BrowserRouter>
       <App/>
     </BrowserRouter>
   </Provider>,
   document.getElementById('root')
 );
 
 registerServiceWorker();
