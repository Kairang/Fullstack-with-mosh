import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/admin/dashboard';
import Counters from './components/counters';
import GenreForm from './components/genreForm';
import Home from './components/home';
import Login from './components/login';
import Logout from './components/logout';
import MovieForm from './components/movieForm';
import Movies from './components/movies';
import Navbar from './components/navbar';
import NotFound from './components/notFound';
import Register from './components/register';
import auth from './services/authServer';
import ProtectedRoute from './components/common/protectedRoute';

class App extends React.Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  };

  render() {
    const user = this.state.user;

    return (
      <div className="App">
        <Navbar user={user} />
        <div className='container mt-4'>
          <Switch >
            <ProtectedRoute path='/counters' component={Counters} />
            <Route path='/genres/new' component={GenreForm} />
            <ProtectedRoute path='/movies/:id' component={MovieForm} />
            <Route path='/movies' render={(props) => <Movies {...props} user={user} />} />
            <Route path='/admin' render={(props) =>
              user?.isAdmin
                ? <Dashboard {...props} />
                : <Redirect to='/login' />} />
            <Route path='/login' component={Login} />
            <Route path='/logout' component={Logout} />
            <Route path='/register' component={Register} />
            <Redirect from='/videos' to='movies' />
            <Route path='/not-found' render={() => <NotFound message='Not Found' />} />
            <Route path='/' exact component={Home} />
            <Redirect to='/not-found' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
