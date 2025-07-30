import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import UsersContainer from "./Components/Users/UsersContainer";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route, Routes } from "react-router-dom";
import DialogsContainer from "./Components/Messages/Message/DialogsContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="main-content">  
                <Routes>
                    <Route path="/profile/:userId" element={<ProfileContainer />}  />
                    <Route path="/messages" element={<DialogsContainer/>} />
                    <Route path='/messages/:id' element={<DialogsContainer/>} />
                    <Route path='/users' element={<UsersContainer />} />
                    <Route path='/news' element={<News/>} />
                    <Route path='/music' element={<Music/>} />
                    <Route path='/settings' element={<Settings/>} />
                    <Route path='/login' element={<Login/>} />
                </Routes>
            </div>
            <div className="main-footer">
                <Footer/>
            </div>
        </div>
    );
}

export default App;
