import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./assets/pages/Home";
import Signin from "./assets/pages/signin";
import SignUp from "./assets/pages/SignUp";
import About from "./assets/pages/About";
import Profile from "./assets/pages/profile";


export default function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/sign-in" element={<Signin/>}/>
    <Route path ="/sign-up" element={<SignUp/>}/>
    <Route path ="/about" element={<About/>}/>
    <Route path ="/profile" element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
   
  );
}
