import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import Albums from './components/Albums';
import Todos from './components/Todos';
import Users from './components/Users';

export default function App() {
  return (
    <Router>
      <div className="navbar">
        JSONPlaceholder React-Axios Practice

        <div>
          <Link to='/posts'>Posts</Link>
          <Link to='/albums'>Albums</Link>
          <Link to='/todos'>Todos</Link>
          <Link to='/users'>Users</Link>
        </div>
      </div>

      <div className='page'>
        <Switch>
          <Route path='/posts' component={Posts} />
          <Route path='/albums' component={Albums} />
          <Route path='/todos' component={Todos} />
          <Route path='/users' component={Users} />
        </Switch>        
      </div>
    </Router>
  );
}