import React, { Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';

import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

// Redux need a provider to combine redux into react
import { Provider } from 'react-redux';
// Redux
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';


const App = () => {
  useEffect(() => {
    // Check for token in local storage
    if(localStorage.token){
      setAuthToken(localStorage.token)
    }
    store.dispatch(loadUser());

    // Log user out from all tabs if they log out in one tab
    // window.addEventListener('storage', () => {
    //   if (!localStorage.token)store.dispatch({ type:LOGOUT });
    // });
  },[]);
  
  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />

        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert/>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/create-profile' component={CreateProfile} />

          </Switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
)};

export default App;
