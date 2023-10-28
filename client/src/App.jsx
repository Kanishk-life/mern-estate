import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./assets/pages/Home";
import Signin from "./assets/pages/signin";
import SignUp from "./assets/pages/SignUp";
import About from "./assets/pages/About";
import Profile from "./assets/pages/profile";
import Header from "./componets/Header";
import PrivateRoute from "./componets/PrivateRoute";


export default function App() {
  return (<BrowserRouter>
  <Header/>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/sign-in" element={<Signin/>}/>
    <Route path ="/sign-up" element={<SignUp/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route  element={<PrivateRoute/>}>
    <Route path ="/profile" element={<Profile/>}/>
    </Route>

  </Routes>
  </BrowserRouter>
   
  );
}
