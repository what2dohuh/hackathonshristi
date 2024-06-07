 import React from "react";
 import "./App.css"
import {BrowserRouter as Router , Routes , Route} from'react-router-dom'
import AuthPage from "./pages/auth.page";
import HomePages from "./pages/Home.pages";
import NavbarComponents from "./components/Navbar.components";
import RequestPage from "./pages/request.page";
import Footer from "./components/Footer.component";
import CreaterequestPage from "./pages/createrequest.page";
import { UserContextProvider } from "./context/user.context";
import HelpPage from "./pages/help.page";
 function App() {

      return(
        <UserContextProvider>

        <Router>
            <NavbarComponents/>
        <Routes>
            <Route path="/" element={<HomePages/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
            <Route path="/request" element={<RequestPage/>}/>
            <Route path="/createrequest" element={<CreaterequestPage/>}/>
            <Route path="/help/:id" element={<HelpPage/>}/>
           
        </Routes>
        <Footer/>
        </Router>
        </UserContextProvider>
      )
 }

 export default App;