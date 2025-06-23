import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="main-content">
                   <Routes>
                       <Route path='/profile' element={<Profile/>}/>
                       <Route path='/messages' element={<Messages/>}/>
                       <Route path='/news' element={<News/>}/>
                       <Route path='/music' element={<Music/>}/>
                       <Route path='/settings' element={<Settings/>}/>
                   </Routes>
                </div>
                <div className="main-footer">
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
