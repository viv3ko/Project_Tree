import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import CreatePosts from './pages/CreatePosts';
import Login from './pages/Login';
import { useState } from "react";
import { signOut } from 'firebase/auth';
import { auth } from "./firbase-config";
import ViewPosts from './pages/ViewPosts';
import {FiLogOut} from 'react-icons/fi'
import {BsFilePost} from 'react-icons/bs'
import {IoIosCreate} from 'react-icons/io'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import AboutPage from './pages/AboutPage';
function App() {
  const [isAuth, setIsAuth] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname = "/";
    });
  };

  return (
    <Router>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      <nav>
        
        {/* <Link class='btn btn-secondary' to="/"> Home </Link> */}
        {!isAuth ?(
        // <Link  class='btn btn-primary'to="/login"> Log in </Link>
        // <Link class='btn btn-secondary' to="/viewposts"></Link>
        <div className='navbar-buttons'>
        <Link title='View projects'  style={{ color: 'white', marginTop: '50px', fontWeight: 'bold', fontSize: '30px', marginLeft: '20px', cursor: "pointer"}}to="/viewposts"> <BsFilePost title='View Projects'></BsFilePost> </Link>
        <Link title='About us' style={{ color: 'white', fontWeight: 'bold', fontSize: '30px', marginLeft: '20px', cursor: "pointer"}} to="/aboutus"> <AiOutlineInfoCircle title='About us'>  </AiOutlineInfoCircle></Link>
        <Link title='Click to Login'  style={{ color: 'white', marginTop: '50px', fontWeight: 'bold', fontSize: '30px', marginLeft: '20px', cursor: "pointer"}}to="/"> Please Login </Link>

        </div>

        ) : (
          <>
                  {/* <Link class='btn btn-secondary' to="/"> Home </Link> */}
            <div className='navbar-buttons'>
            <Link title='View projects'  style={{ color: 'white', marginTop: '20px', fontWeight: 'bold', fontSize: '30px', marginLeft: '20px', cursor: "pointer"}}to="/viewposts"> <BsFilePost title='View Projects'></BsFilePost> </Link>

            <Link title='Create post'  style={{ color: 'white', fontWeight: 'bold', fontSize: '30px', marginLeft: '20px', cursor: "pointer"}}to="/createposts"> <IoIosCreate title='Create Post'></IoIosCreate></Link>
            <Link title='About us' style={{ color: 'white', fontWeight: 'bold', fontSize: '30px', marginLeft: '20px', cursor: "pointer"}} to="/aboutus"> <AiOutlineInfoCircle title='About us'>  </AiOutlineInfoCircle></Link>
            <FiLogOut style={{ color: 'white', fontWeight: 'bold', fontSize: '30px', marginLeft: '20px', cursor: "pointer"}}  onClick={() => signUserOut()}/>

            </div>

          </>
        )}

      </nav>
      <Routes>
        <Route path="/" element={<Home setIsAuth={setIsAuth}/>} />
        <Route path="/createposts" element={<CreatePosts isAuth = {isAuth}/>} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/viewposts" element={<ViewPosts setIsAuth={setIsAuth} isAuth={isAuth}/>} />
        <Route path="/aboutus" element={<AboutPage setIsAuth={setIsAuth} isAuth={isAuth}/>} />

      </Routes>
    </Router>
  );
}

export default App;
