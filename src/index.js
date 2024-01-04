import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from 'react-redux';

import {createStore,applyMiddleware} from 'redux'; 
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { App } from './components';
import {setUserFromToken} from'./actions/authActionCreator';
import './styles/index.css';

//=====================logger function==============================
const logger=({dispatch,getState})=>(next)=>(action)=>{
      //middleware code
      console.log("ACTION_TYPE=",action.type);
      next(action);
    }

const store=createStore(rootReducer,applyMiddleware(logger,thunk));
setUserFromToken(store.dispatch);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-left">
        <Router> 
          <Provider store={store}>
            <App/>
          </Provider>,
        </Router>
      </ToastProvider>
  </>
);

