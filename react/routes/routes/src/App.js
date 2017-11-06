import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import Header from './components/Header';

const About = props => (
  <div>
    <h1>About</h1>
    <Route path={props.match.url + "/contacts"} component={Contact}/> {props.data}
  </div>
)

const Home = props => (
  <div>
    <h1>Home</h1>
  </div>
)

const Contact = props => (
  <div>
    <h1>Contacts</h1>
  </div>
)

const User = props => (
  <div>
    <h1>User</h1>
    <p>Dysplay details for {props.match.params.userName}</p>
  </div>
)

const NotFound = props => (
  <div>
    <h1>Not found</h1>
  </div>
)

const Dashboard = props => (
  <div>
    <h1>Dashboard</h1>
  </div>
)

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLogged: false
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route
            path="/redirect"
            render={() => {
            if (this.state.isLogged) {
              return (<Redirect to="/dashboard"/>)
            } else {
              return (<Home/>)
            }
          }}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/details/:userName" component={User}/>
          <Route
            path="/about"
            render={(props) => {
            return <About props={props} data="pesho"/>
          }}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
