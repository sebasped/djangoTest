
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import MainPage from './components/main/MainPage';

import HomePage from './components/home/HomePage';


//import ToDosList from './components/todos/ToDosList';
//import ToDoForm from './components/todos/ToDoForm';
//import Login from './components/login/Login';

//import UsersList from './components/users/UsersList';
//import UserForm from './components/users/UserForm';

import history from './history';



function RouteNest(props){ 
  return (
    <Route exact={props.exact} path={props.path} render={ p => <props.component {...p} children={props.children}/> } />    
  )
}


class Routes extends Component {
  render() {
    return (
      <Router history={history}>
          <Switch>
              <RouteNest  path={'/main'} component={MainPage}>
                  <RouteNest  exact path={'/main/home'} component={HomePage}/>
              </RouteNest>
          </Switch>
      </Router>
    );
  }
}



ReactDOM.render(
    <Routes />,
  document.getElementById('root')    
);

