import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import Home from './component/Home.js';
import CreatePost from './component/CreatePost';
import Post from './component/Post';
import Login from './component/Login';
import Registr from './component/Registr';



function App() {
  return (

    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/createpost"> Create A Post</Link>
          <Link to="/login"> Login</Link>
          <Link to="/registr"> Registration</Link>
        </div>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/createPost" exact element={<CreatePost />}></Route>
          <Route path="/post/:id" exact element={<Post />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/registr" exact element={<Registr />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
