import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './pages/Header/Header';
import Addblog from './pages/Addblog/Addblog';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Authprovider from './Context/Authprovider';
import PrivateRoute from './Privateroute/Privateroute';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Makeadmin from './pages/Makeadmin/Makeadmin';
import AdminRoute from './Adminroute/Adminroute';
import Myblogs from './pages/Myblogs/Myblogs';
import Manageblogs from './pages/Manageblogs/Manageblogs';
import Coding from './pages/Coding/Coding';
import Developer from './pages/Developer/Developer';
import Mern from './pages/Mern/Mern';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Notfound from './pages/Notfound/Notfound';

function App() {
  return (
    <>
      <Authprovider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/blog/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/coding">
              <Coding></Coding>
            </Route>
            <Route path="/developer">
              <Developer></Developer>
            </Route>
            <Route path="/mern">
              <Mern></Mern>
            </Route>
            <PrivateRoute path="/addblog">
              <Addblog></Addblog>
            </PrivateRoute>
            <PrivateRoute path="/myblogs">
              <Myblogs></Myblogs>
            </PrivateRoute>
            <AdminRoute path="/makeadmin">
              <Makeadmin></Makeadmin>
            </AdminRoute>
            <AdminRoute path="/manageblogs">
              <Manageblogs></Manageblogs>
            </AdminRoute>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </>
  );
}

export default App;
