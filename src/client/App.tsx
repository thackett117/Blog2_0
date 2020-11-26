import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SingleBlog from './components/SingleBlog';
import EditBlog from './components/EditBlog';
import CreateBlog from './components/CreateBlog';
import NavBar from './components/NavBar';
import Login from './components/Login';
 
const App = (props: AppProps) => {
	return (
		<Router>
		  {/* <div>
			<nav>
			  <ul>
				<li>
				  <Link to="/">Home</Link>
				</li>
				<li>
				  <Link to="/blog/create">Admin</Link>
				</li>
			  </ul>
			</nav> */}
			<NavBar />
	
			{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. */}
			<Switch>
				<Route exact path="/blog/login" component={Login} />
				<Route exact path="/blog/create" component={CreateBlog} />
				<Route exact path="/blog/:id/admin" component={EditBlog} />
				<Route exact path="/blog/:id" component={SingleBlog} />
				<Route exact path="/" component={Home} />
			</Switch>
		  {/* </div> */}
		</Router>
	  );
};

interface AppProps {}

export default App;

